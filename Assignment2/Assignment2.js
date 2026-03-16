import path from "path";
import { fileURLToPath } from "url";

import fs from "fs";

import { EventEmitter } from "events";

import os from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Coding Questions
console.log("\n========== CODING QUESTIONS OUTPUT ==========\n");
var Input; // used as an input for each question.
var Output; // used as an output for each question.
// ===========================================================================================

// 1. Write a function that logs the current file path and directory.
const currentFileInfo = () => ({ File: __filename, Dir: __dirname });

Output = currentFileInfo();
printCodingQuestion(1, "Write a function that logs the current file path and directory.", null, Output);
// ===========================================================================================

// 2. Write a function that takes a file path and returns its file name.
const getFileName = (filePath) => path.basename(filePath);

Input = "/user/files/report.pdf ";
Output = getFileName(Input);
printCodingQuestion(2, "Write a function that takes a file path and returns its file name.", Input, Output);
// ===========================================================================================

// 3. Write a function that builds a path from an object.
const buildPath = (pathObj) => path.format(pathObj);

Input = {
    dir: "folder",
    name: "app",
    ext: ".js"
};
Output = buildPath(Input);
printCodingQuestion(3, "Write a function that builds a path from an object.", Input, Output);
// ===========================================================================================

// 4. Write a function that returns the file extension from a given file path.
const getExtension = (filePath) => path.extname(filePath);

Input = "/docs/readme.md";
Output = getExtension(Input);
printCodingQuestion(4, "Write a function that returns the file extension from a given file path.", Input, Output);
// ===========================================================================================

// 5. Write a function that parses a given path and returns its name and ext.
const parsePath = (filePath) => {
    const parsed = path.parse(filePath);
    return { Name: parsed.name, Ext: parsed.ext };
};

Input = "/home/app/main.js";
Output = parsePath(Input);
printCodingQuestion(5, "Write a function that parses a given path and returns its name and ext.", Input, Output);
// ===========================================================================================

// 6. Write a function that checks whether a given path is absolute.
const checkAbsolute = (filePath) => path.isAbsolute(filePath);

Input = "/home/user/file.txt";
Output = checkAbsolute(Input);
printCodingQuestion(6, "Write a function that checks whether a given path is absolute.", Input, Output);
// ===========================================================================================

// 7. Write a function that joins multiple segments.
const joinSegments = (...segments) => path.join(...segments);

Input = ["src", "components", "App.js"];
Output = joinSegments(...Input);
printCodingQuestion(7, "Write a function that joins multiple segments.", Input, Output);
// ===========================================================================================

// 8. Write a function that resolves a relative path to an absolute one.
const resolvePath = (relativePath) => path.resolve(relativePath);

Input = "./index.js";
Output = resolvePath(Input);
printCodingQuestion(8, "Write a function that resolves a relative path to an absolute one.", Input, Output);
// ===========================================================================================

// 9. Write a function that joins two paths.
const joinTwoPaths = (path1, path2) => path.join(path1, path2);

let pathInput1 = "/folder1";
let pathInput2 = "folder2/file.txt";
Output = joinTwoPaths(pathInput1, pathInput2);
printCodingQuestion(9, "Write a function that joins two paths.", Input = { pathInput1, pathInput2 }, Output);
// ===========================================================================================

// 10. Write a function that deletes a file asynchronously.
const tempFilePath = path.join(__dirname, "temp_delete_me.txt");
fs.writeFileSync(tempFilePath, "temporary file"); // create the file first so we can delete it

const deleteFileAsync = (filePath) => new Promise(
    (resolve, reject) =>
        fs.unlink(filePath, err =>
            err ? reject(err) : resolve(`The ${path.basename(filePath)} is deleted.`)));

Input = tempFilePath;
Output = await deleteFileAsync(Input);
printCodingQuestion(10, "Write a function that deletes a file asynchronously.", Input, Output);
// ===========================================================================================

// 11. Write a function that creates a folder synchronously.
const createFolderSync = (folderPath) => {
    if (!fs.existsSync(folderPath))
        fs.mkdirSync(folderPath);
    return "Success";
};

Output = createFolderSync(path.join(__dirname, "new_folder"));
printCodingQuestion(11, "Write a function that creates a folder synchronously.", null, Output);
// ===========================================================================================

// 12. Create an event emitter that listens for a "start" event and logs a welcome message.
const emitter = new EventEmitter();

emitter.on("start", () => Output = "Welcome event triggered!");
emitter.emit("start");

printCodingQuestion(12, "Create an event emitter that listens for a \"start\" event and logs a welcome message.", null, Output);
// ===========================================================================================

// 13. Emit a custom "login" event with a username parameter.
emitter.on("login", (username) => Output = `User logged in: ${username}`);
Input = "abdelrahman";

emitter.emit("login", Input);

printCodingQuestion(13, "Emit a custom \"login\" event with a username parameter.", Input, Output);
// ===========================================================================================

// 14. Read a file synchronously and log its contents.
Input = "./notes.txt";
const notesPath = path.join(__dirname, Input);
fs.writeFileSync(notesPath, "This is a note."); // create the file first

const readFileSync = (filePath) => fs.readFileSync(filePath, "utf-8");

Output = readFileSync(notesPath);
printCodingQuestion(14, "Read a file synchronously and log its contents.", Input, Output);
// ===========================================================================================

// 15. Write asynchronously to a file.
const asyncFilePath = path.join(__dirname, "async.txt");

const writeFileAsync = (filePath, content) => new Promise((resolve, reject) =>
    fs.writeFile(filePath, content, err =>
        err ? reject(err) : resolve(`Successfully wrote to ${path.basename(filePath)}`)));

Input = { path: "./async.txt", content: "Async save" };
Output = await writeFileAsync(asyncFilePath, Input.content);
printCodingQuestion(15, "Write asynchronously to a file.", Input, Output);
// ===========================================================================================

// 16. Check if a directory exists.
const checkExists = (targetPath) => fs.existsSync(targetPath);
Input = "./notes.txt";
Output = checkExists(notesPath);
printCodingQuestion(16, "Check if a directory exists.", Input, Output);
// ===========================================================================================

// 17. Write a function that returns the OS platform and CPU architecture.
const getOSInfo = () => ({ Platform: os.platform(), Arch: os.arch() });

Output = getOSInfo();
printCodingQuestion(17, "Write a function that returns the OS platform and CPU architecture.", null, Output);
// ===========================================================================================




// function to print coding questions
function printCodingQuestion(questionNumber, description, Input, Output) {

    console.log(`Question ${questionNumber}`);
    console.log("Description:", description);

    // Format input properly
    if (Input === null || Input === undefined)
        console.log("{ Input: No input }");

    else
        console.log({ Input });

    console.log({ Output });
    console.log("---------------------------------------------\n");
}