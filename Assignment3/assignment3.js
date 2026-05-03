// =============
// Assignment 3
// =============
const fs = require("fs");
const { pipeline } = require("stream");
const zlib = require("zlib");
const http = require("http");

// ===============================
// Part 1: Core Modules (Streams)
// ===============================
var input;

// ==== Q1 ====
input = "./big.txt"
const readFileInChunks = filePath => {
    const readable = fs.createReadStream(filePath, { encoding: "utf-8", highWaterMark: 504 });

    readable.on("data", (chunk) => {
        console.log("---- Chunk ----");
        console.log(chunk);
    });

    readable.on("end", () => {
        console.log("\nFinished reading file.");
    });

    readable.on("error", (err) => {
        console.error(`Error reading file: ${err.message}`);
    });
}

readFileInChunks(input);


// ==== Q2 ====
const copyFile = (src, dest) => {
    const readable = fs.createReadStream(src);
    const writable = fs.createWriteStream(dest);

    readable.pipe(writable);

    writable.on("finish", () => {
        console.log("File copied using streams");
    });

    readable.on("error", (err) => {
        console.error(`Read error: ${err.message}`);
    });

    writable.on("error", (err) => {
        console.error(`Write error: ${err.message}`);
    });
}

copyFile(input, "./dest.txt");


// ==== Q3 ====
const compressFile = (src, dest) =>
    pipeline(
        fs.createReadStream(src),
        zlib.createGzip(),
        fs.createWriteStream(dest), err =>
        err ? console.error(`Pipeline failed: ${err.message}`) : console.log(`File compressed successfully → ${dest}`)
    );


compressFile(input, "./data.txt.gz");


// ==========================================
// Part 2: Simple CRUD Operations Using HTTP
// ==========================================

const DB_PATH = "./users.json";
const PORT = 8080;


// == Helpers ==================================================

// Read users array from the JSON file
const readUsers = () => {
    if (!fs.existsSync(DB_PATH))
        try {
            fs.writeFileSync(DB_PATH, "[]", "utf-8");
        } catch (err) {
            console.error(`Error creating file: ${err.message}`);
        }

    try {
        return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
    } catch (err) {
        console.error(`Error reading file: ${err.message}`);
    }

}

// Write users array back to the JSON file 
const writeUsers = users => {
    try {
        fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2), "utf-8");
    } catch (err) {
        console.error(`Error creating file: ${err.message}`);
    }
}

// Parse JSON body from an incoming request 
const parseBody = req =>
    new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch {
                reject(new Error("Invalid JSON body"));
            }
        });
        req.on("error", reject);
    });

// Send a JSON response
const sendJSON = (res, statusCode, data) => {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
}


// ==== Request Handler ====
const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    // ==== POST /user ====
    if (method === "POST" && url === "/user") {
        try {
            const body = await parseBody(req);
            const { name, age, email } = body;

            (!email) ?? sendJSON(res, 400, { message: "email is required." });
            (!name) ?? sendJSON(res, 400, { message: "name is required." });
            (!age) ?? sendJSON(res, 400, { message: "age is required." });

            const users = readUsers();
            if (users.some(u => u.email === email)) return sendJSON(res, 409, { message: "Email already exists." });
            users.push({ id: Number(new Date()), name, age, email })
            writeUsers(users);

            return sendJSON(res, 201, { message: "User added successfully." });
        } catch (err) {
            return sendJSON(res, 400, { message: err.message });
        }
    }

    // ==== PATCH /user/:id ====
    const patchMatch = url.match(/^\/user\/(\d+)$/);
    if (method === "PATCH" && patchMatch) {
        try {
            const id = parseInt(patchMatch[1]);
            const body = await parseBody(req);

            const users = readUsers();
            const user = users.find((u) => u.id === id);
            if (!user)
                return sendJSON(res, 404, { message: "User ID not found." });

            const { name, age, email } = body;
            if (name) user.name = name;
            if (age) user.age = age;
            if (email) user.age = email;

            writeUsers(users);

            return sendJSON(res, 200, { message: `User updated successfully.` });
        } catch (err) {
            return sendJSON(res, 400, { message: err.message });
        }
    }

    // ==== DELETE /user/:id ====
    const deleteMatch = url.match(/^\/user\/(\d+)$/);
    if (method === "DELETE" && deleteMatch) {
        try {
            const id = parseInt(deleteMatch[1]);

            const users = readUsers();
            if (!users.find(u => u.id === id)) return sendJSON(res, 404, { message: "User ID not found." });

            writeUsers(users.filter(u => u.id !== id));

            return sendJSON(res, 200, { message: "User deleted successfully." });
        } catch (err) {
            return sendJSON(res, 400, { message: err.message });
        }
    }

    // ==== GET /user ====
    if (method === "GET" && url === "/user") {
        const users = readUsers();
        return sendJSON(res, 200, users);
    }

    // ==== GET /user/:id ====
    const getByIdMatch = url.match(/^\/user\/(\d+)$/);
    if (method === "GET" && getByIdMatch) {
        const id = parseInt(getByIdMatch[1]);
        const users = readUsers();
        const user = users.find(u => u.id === id);

        if (!user) return sendJSON(res, 404, { message: "User not found." });

        return sendJSON(res, 200, user);
    }

    // ==== 404 fallback ====
    sendJSON(res, 404, { message: "Route not found." });
});


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});



// ========================================
// Part 3: Node Internals (Essay Questions)
// ========================================

/*
====================================
Q1. What is the Node.js Event Loop?
====================================
The Event Loop is the core mechanism that allows Node.js to perform
non-blocking I/O operations despite JavaScript being single-threaded.
It continuously checks whether the Call Stack is empty, and if it is,
it picks up the next callback from the Event Queue and pushes it onto
the stack for execution.

=========================================================
Q2. What is Libuv and What Role Does It Play in Node.js?
=========================================================
Libuv is a C library that provides Node.js with:

  • Cross-platform asynchronous I/O – it abstracts OS-level async APIs
    (epoll on Linux, kqueue on macOS, IOCP on Windows) into a single
    unified interface.

  • The Event Loop implementation – the phases described above (timers,
    poll, check, etc.) are implemented inside libuv, not in V8 or Node
    itself.

  • Thread Pool – for tasks that cannot be made truly async by the OS
    (e.g., file system operations, DNS lookups, crypto), libuv maintains
    a pool of background threads (default size: 4). These threads do the
    heavy work and notify the Event Loop when they finish.

  • Other utilities – TCP/UDP sockets, child processes, signals, timers,
    and shared memory.

In short: V8 executes JavaScript; libuv handles everything else
(I/O, threading, the event loop).


====================================================================
Q3. How Does Node.js Handle Asynchronous Operations Under the Hood?
====================================================================
When an async operation is called (e.g., fs.readFile):

  1. Node.js hands the task to libuv.
  2. Libuv checks if the OS supports async I/O for this type of operation:
       - If YES (network I/O): the OS watches the resource and signals
         libuv when data is ready (no thread is blocked).
       - If NO (file system, DNS, crypto): libuv pushes the work to a
         thread in its Thread Pool. The JS main thread is free to continue.
  3. When the operation completes, libuv places the callback into the
     appropriate Event Loop phase queue.
  4. The Event Loop picks up the callback on its next relevant pass
     and pushes it onto the Call Stack for execution.

This is why Node.js can handle thousands of simultaneous I/O operations
with a single JavaScript thread – the waiting happens in the OS or in
background threads, not in the JS thread.


=============================================================
Q4. Difference Between Call Stack, Event Queue, and Event Loop
=============================================================
 Call Stack    A LIFO (Last-In-First-Out) data structure where JS  
               function calls are tracked. When a function is      
               invoked it is pushed; when it returns it is popped. 
               Only one function executes at a time (single thread)
               
 Event Queue   Also called the Callback Queue. When an async       
               operation finishes, its callback is placed here,    
               waiting to be moved to the Call Stack.              
               (Microtask queue has higher priority than macrotask 
                queue – Promises resolve before setTimeout, etc.)  
                
 Event Loop    Continuously monitors the Call Stack and the Event  
               Queue. When the Call Stack is EMPTY it dequeues the 
               next callback from the Event Queue and pushes it    
               onto the Call Stack for execution.

Example flow:
  setTimeout(() => console.log("A"), 0);
  console.log("B");
  // Output: B  then  A
  // "B" runs on the Call Stack immediately.
  // "A"'s callback waits in the Event Queue until the stack is clear.


=============================================================
Q5. What is the Node.js Thread Pool and How to Set Its Size?
=============================================================
The Thread Pool is a set of background threads managed by libuv. It is
used for CPU-bound or OS-blocking tasks that cannot be delegated to the
OS's async API, including:
  - File system operations (fs module)
  - DNS lookups (dns.lookup)
  - Crypto operations (bcrypt, pbkdf2, randomBytes)
  - zlib compression

Default size: 4 threads.

You can change the size by setting the UV_THREADPOOL_SIZE environment
variable BEFORE the Node.js process starts:

  # Set to 8 threads (max is 1024)
  UV_THREADPOOL_SIZE=8 node server.js

  // Or from inside the app (must be set before any async work):
  process.env.UV_THREADPOOL_SIZE = 8;

Increasing the pool size can improve throughput for CPU-intensive or
file-heavy applications. However, it also increases memory usage, and
beyond the number of CPU cores the gains diminish.


=============================================================
Q6. How Does Node.js Handle Blocking vs Non-Blocking Code?
=============================================================
BLOCKING code occupies the Call Stack until it finishes. During that
time no other JavaScript can run — including incoming HTTP requests.

  Example (blocking):
    const data = fs.readFileSync("./big.txt", "utf-8"); // blocks
    console.log(data); // nothing else runs until readFileSync returns

NON-BLOCKING code initiates an operation and immediately returns control
to the Event Loop. A callback is executed later when the operation is done.

  Example (non-blocking):
    fs.readFile("./big.txt", "utf-8", (err, data) => {
      console.log(data); // runs when ready, not immediately
    });
    console.log("This prints BEFORE the file is read");

How Node.js achieves non-blocking execution:
  1. Network I/O  → delegated to the OS (epoll/kqueue/IOCP), no thread used.
  2. File/DNS/Crypto → offloaded to libuv's Thread Pool.
  3. The main JS thread never waits — it keeps processing the Event Loop.

Best practice: always prefer async/non-blocking APIs (fs.readFile,
promises, streams) in Node.js servers to avoid blocking the single
JavaScript thread and degrading performance for all users.
*/