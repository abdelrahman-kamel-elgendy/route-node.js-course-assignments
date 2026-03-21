// ============================================================
//  Assignment 2 – Node.js Core Modules
//  Route Node.js Course
// ============================================================

import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { EventEmitter } from "events";
import os from "os";
import { printCodingQuestion } from "../utils/print.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("\n========== CODING QUESTIONS OUTPUT ==========\n");

let input;
let output;

// ============================================================
//  path Module  (Q1 – Q9)
// ============================================================

// == Q1. Current file path and directory ======================
const q1 = () => ({ File: __filename, Dir: __dirname });

output = q1();
printCodingQuestion(1, "Write a function that logs the current file path and directory.", null, output);

// == Q2. File name from a path =================================
const q2 = (filePath) => path.basename(filePath);

input = "/user/files/report.pdf";
output = q2(input);
printCodingQuestion(2, "Write a function that takes a file path and returns its file name.", input, output);

// == Q3. Build a path from an object ==========================
const q3 = (pathObj) => path.format(pathObj);

input = { dir: "/folder", name: "app", ext: ".js" };
output = q3(input);
printCodingQuestion(3, "Write a function that builds a path from an object.", input, output);

// == Q4. File extension from a path ===========================
const q4 = (filePath) => path.extname(filePath);

input = "/docs/readme.md";
output = q4(input);
printCodingQuestion(4, "Write a function that returns the file extension from a given file path.", input, output);

// == Q5. Parse path → name and ext ============================
const q5 = (filePath) => {
    const { name, ext } = path.parse(filePath);
    return { Name: name, Ext: ext };
};

input = "/home/app/main.js";
output = q5(input);
printCodingQuestion(5, "Write a function that parses a given path and returns its name and ext.", input, output);

// == Q6. Check if a path is absolute ==========================
const q6 = (filePath) => path.isAbsolute(filePath);

input = "/home/user/file.txt";
output = q6(input);
printCodingQuestion(6, "Write a function that checks whether a given path is absolute.", input, output);

// == Q7. Join multiple segments ================================
const q7 = (...segments) => path.join(...segments);

input = ["src", "components", "App.js"];
output = q7(...input);
printCodingQuestion(7, "Write a function that joins multiple segments.", input, output);

// == Q8. Resolve a relative path to absolute ==================
const q8 = (relativePath) => path.resolve(relativePath);

input = "./index.js";
output = q8(input);
printCodingQuestion(8, "Write a function that resolves a relative path to an absolute one.", input, output);

// == Q9. Join two paths ========================================
const q9 = (p1, p2) => path.join(p1, p2);

const pathInput1 = "/folder1";
const pathInput2 = "folder2/file.txt";
output = q9(pathInput1, pathInput2);
printCodingQuestion(9, "Write a function that joins two paths.", { pathInput1, pathInput2 }, output);

// ============================================================
//  fs Module  (Q10, Q11, Q14 – Q16)
// ============================================================

// == Q10. Delete a file asynchronously ========================
const q10 = (filePath) =>
    new Promise((resolve, reject) =>
        fs.unlink(filePath, (err) =>
            err ? reject(err) : resolve(`The ${path.basename(filePath)} is deleted.`)
        )
    );

const tempFilePath = path.join(__dirname, "temp_delete_me.txt");
fs.writeFileSync(tempFilePath, "temporary file");

try {
    input = tempFilePath;
    output = await q10(input);
    printCodingQuestion(10, "Write a function that deletes a file asynchronously.", input, output);
} catch (err) {
    console.error("Q10 error:", err.message);
}

// == Q11. Create a folder synchronously =======================
const q11 = (folderPath) => {
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
    return "Success";
};

output = q11(path.join(__dirname, "new_folder"));
printCodingQuestion(11, "Write a function that creates a folder synchronously.", null, output);

// ============================================================
//  events Module  (Q12 – Q13)
// ============================================================

// == Q12. Listen for a "start" event ==========================
const emitter = new EventEmitter();

emitter.on("start", () => { output = "Welcome event triggered!"; });
emitter.emit("start");
printCodingQuestion(12, 'Create an event emitter that listens for a "start" event and logs a welcome message.', null, output);

// == Q13. Emit a "login" event with a username =================
emitter.on("login", (username) => { output = `User logged in: ${username}`; });

input = "abdelrahman";
emitter.emit("login", input);
printCodingQuestion(13, 'Emit a custom "login" event with a username parameter.', input, output);

// ============================================================
//  fs Module (continued)
// ============================================================

// == Q14. Read a file synchronously ===========================
const q14 = (filePath) => fs.readFileSync(filePath, "utf-8");

const notesPath = path.join(__dirname, "notes.txt");
fs.writeFileSync(notesPath, "This is a note.");

input = "./notes.txt";
output = q14(notesPath);
printCodingQuestion(14, "Read a file synchronously and log its contents.", input, output);

// == Q15. Write to a file asynchronously ======================
const q15 = (filePath, content) =>
    new Promise((resolve, reject) =>
        fs.writeFile(filePath, content, (err) =>
            err ? reject(err) : resolve(`Successfully wrote to ${path.basename(filePath)}`)
        )
    );

try {
    const asyncFilePath = path.join(__dirname, "async.txt");
    input = { path: "./async.txt", content: "Async save" };
    output = await q15(asyncFilePath, input.content);
    printCodingQuestion(15, "Write asynchronously to a file.", input, output);
} catch (err) {
    console.error("Q15 error:", err.message);
}

// == Q16. Check if a path exists ==============================
const q16 = (targetPath) => fs.existsSync(targetPath);

input = "./notes.txt";
output = q16(notesPath);
printCodingQuestion(16, "Check if a directory exists.", input, output);

// ============================================================
//  os Module  (Q17)
// ============================================================

// == Q17. OS platform and CPU architecture ====================
const q17 = () => ({ Platform: os.platform(), Arch: os.arch() });

output = q17();
printCodingQuestion(17, "Write a function that returns the OS platform and CPU architecture.", null, output);