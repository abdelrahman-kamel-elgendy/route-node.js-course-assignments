# 📚 Route – Node.js Assignments

Solutions for the **Route** Node.js track assignments.  
Each assignment lives in its own folder and contains two files: the main solution and the bonus.

---

## 📁 Repository Structure

```
├── Assignment1/
│   ├── assignment1.js          ← Coding questions + essay answers
│   ├── assignment1.pdf         ← Assignment 1 questions
│   └── bonus.js                ← Bonus task
│
├── Assignment2/
│   ├── assignment2.js          ← Node.js built-in modules questions
│   ├── assignment2.pdf         ← Assignment 2 questions
│   ├── bouns.js                ← LeetCode: Kth Missing Positive Number
│   ├── notes.txt               ← Sample file used in Q14 (readFileSync)
│   └── to_be_deleted.txt       ← Sample file used in Q10 (unlink)
│
├── Assignment3/
│   ├── assignment3.js          ← Streams + HTTP CRUD + Node Internals essays
│   ├── assignment3.pdf         ← Assignment 3 questions
│   ├── Assignment3-part2.postman_collection.json  ← Postman collection for API testing
│   ├── bouns.js                ← LeetCode: Majority Element
│   ├── big.txt                 ← Sample file used in streams questions
│   ├── dest.txt                ← Output file from stream copy (Q2)
│   ├── data.txt.gz             ← Compressed output from pipeline (Q3)
│   └── users.json              ← JSON file database for HTTP CRUD API
│
├── .gitignore
└── README.md
```

---

## 📝 Assignment 1 – JavaScript Fundamentals

**File:** `Assignment1/assignment1.js`

### Part 1 – Coding Questions (15 Questions)

| # | Topic | Concept Used |
|---|-------|-------------|
| 1 | String to number conversion | `Number()` |
| 2 | Falsy check | `!value` |
| 3 | Skip even numbers | `for` loop + `continue` |
| 4 | Filter even numbers | `Array.filter()` |
| 5 | Merge arrays | Spread operator `[...a, ...b]` |
| 6 | Day of week | `switch` statement |
| 7 | String lengths | `Array.map()` |
| 8 | Divisibility check | Modulo `%` operator |
| 9 | Square of a number | Arrow function |
| 10 | Format object data | Object destructuring |
| 11 | Sum of arguments | Rest params `...nums` + `reduce` |
| 12 | Delayed promise | `new Promise` + `setTimeout` |
| 13 | Largest number | `Math.max()` + spread |
| 14 | Object keys | `Object.keys()` |
| 15 | Split string | `String.split()` |

### Part 2 – Essay Questions (5 Essays)

| # | Topic |
|---|-------|
| 1 | `forEach` vs `for...of` |
| 2 | Hoisting & the Temporal Dead Zone (TDZ) |
| 3 | `==` vs `===` |
| 4 | `try-catch` in async operations |
| 5 | Type Conversion vs Type Coercion |

### Bonus – `Assignment1/bonus.js`

**LeetCode Problem:** [Counter II](https://leetcode.com/problems/counter-ii)

---

## 📝 Assignment 2 – Node.js Built-in Modules

**File:** `Assignment2/assignment2.js`

### Questions (17 Questions)

| # | Description | Module | Method |
|---|-------------|--------|--------|
| 1 | Log current file path & directory | — | `__filename`, `__dirname` |
| 2 | Get file name from path | `path` | `path.basename()` |
| 3 | Build path from object | `path` | `path.format()` |
| 4 | Get file extension | `path` | `path.extname()` |
| 5 | Parse path → name & ext | `path` | `path.parse()` |
| 6 | Check if path is absolute | `path` | `path.isAbsolute()` |
| 7 | Join multiple path segments | `path` | `path.join()` |
| 8 | Resolve relative → absolute path | `path` | `path.resolve()` |
| 9 | Join two paths | `path` | `path.join()` |
| 10 | Delete a file asynchronously | `fs` | `fs.unlink()` |
| 11 | Create a folder synchronously | `fs` | `fs.mkdirSync()` |
| 12 | Event emitter – "start" event | `events` | `EventEmitter` `.on()` `.emit()` |
| 13 | Emit "login" event with username | `events` | `EventEmitter` `.on()` `.emit()` |
| 14 | Read a file synchronously | `fs` | `fs.readFileSync()` |
| 15 | Write to a file asynchronously | `fs` | `fs.writeFile()` |
| 16 | Check if a path exists | `fs` | `fs.existsSync()` |
| 17 | Get OS platform & CPU architecture | `os` | `os.platform()`, `os.arch()` |

### Bonus – `Assignment2/bouns.js`

**LeetCode Problem:** [Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/)

---

## 📝 Assignment 3 – Streams, HTTP & Node Internals

**File:** `Assignment3/assignment3.js`

### Part 1 – Core Modules: Streams

| # | Description | Module | Method |
|---|-------------|--------|--------|
| 1 | Read `big.txt` in chunks and log each | `fs` | `createReadStream()` |
| 2 | Copy file → output saved to `dest.txt` | `fs` | `createReadStream()` + `createWriteStream()` + `.pipe()` |
| 3 | Read → compress → write `data.txt.gz` | `fs`, `zlib`, `stream` | `createGzip()` + `pipeline()` |

### Part 2 – HTTP CRUD API

**Database:** `Assignment3/users.json` (data persisted to file — no in-memory arrays)  
**Postman Collection:** `Assignment3/Assignment3-part2.postman_collection.json`

| # | Method | URL | Description |
|---|--------|-----|-------------|
| 1 | `POST` | `/user` | Add a new user (checks for duplicate email) |
| 2 | `PATCH` | `/user/:id` | Update user name, age, or email by ID |
| 3 | `DELETE` | `/user/:id` | Delete a user by ID |
| 4 | `GET` | `/user` | Get all users |
| 5 | `GET` | `/user/:id` | Get a single user by ID |

**Response examples:**

```json
// POST /user – success
{ "message": "User added successfully." }

// POST /user – duplicate email
{ "message": "Email already exists." }

// PATCH /user/99 – not found
{ "message": "User ID not found." }

// DELETE /user/1 – success
{ "message": "User deleted successfully." }

// GET /user/:id – not found
{ "message": "User not found." }
```

### Part 3 – Node Internals (Essays)

| # | Topic |
|---|-------|
| 1 | What is the Node.js Event Loop? |
| 2 | What is Libuv and its role in Node.js? |
| 3 | How Node.js handles async operations under the hood |
| 4 | Difference between Call Stack, Event Queue, and Event Loop |
| 5 | Node.js Thread Pool and how to set its size (`UV_THREADPOOL_SIZE`) |
| 6 | How Node.js handles blocking vs non-blocking code |

### Bonus – `Assignment3/bouns.js`

**LeetCode Problem:** [Majority Element](https://leetcode.com/problems/majority-element/)

---

## 🚀 How to Run

Make sure you have [Node.js](https://nodejs.org/) installed, then:

```bash
# Run Assignment 1
node Assignment1/assignment1.js

# Run Assignment 2
node Assignment2/assignment2.js

# Run Assignment 3 – HTTP Server (then test with Postman or curl)
node Assignment3/assignment3.js
```

**Test the API with curl or import the Postman collection:**

```bash
# Add a user
curl -X POST http://localhost:3000/user \
  -H "Content-Type: application/json" \
  -d '{"name":"Ahmed","age":27,"email":"ahmed@email.com"}'

# Get all users
curl http://localhost:3000/user

# Get user by ID
curl http://localhost:3000/user/1

# Update user
curl -X PATCH http://localhost:3000/user/1 \
  -H "Content-Type: application/json" \
  -d '{"age":30}'

# Delete user
curl -X DELETE http://localhost:3000/user/1
```

---

## 🛠 Technologies

- **Runtime:** Node.js
- **Language:** JavaScript (ES6+)
- **Modules:** `path` · `fs` · `events` · `os` · `http` · `stream` · `zlib`