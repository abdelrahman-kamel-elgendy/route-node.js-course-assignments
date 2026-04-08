// =======================================
// Assignment 2 - Node.js Built-in Modules
// =======================================

const path = require("path");
const fs = require("fs");
const { EventEmitter } = require("events");
const os = require("os");

var input;

// ==== Q1 ====
const getCurrentFileInfo = () => console.log({ File: __filename, Dir: __dirname });
getCurrentFileInfo(); // { File: '/home/user/project/index.js', Dir: '/home/user/project' }


// ==== Q2 ====
input = "/user/files/report.pdf";
const getFileName = filePath => path.basename(filePath);
console.log(getFileName(input)); // "report.pdf"


// ==== Q3 ====
input = { dir: "folder", name: "app", ext: ".js" };
const buildPath = obj => path.format(obj);
console.log(buildPath(input)); // "/folder/app.js"


// ==== Q4 ==== 
input = "/docs/readme.md";
const getExtension = filePath => path.extname(filePath);
console.log(getExtension(input)); // ".md"


// ==== Q5 ====
input = "/home/app/main.js";
const parsePath = filePath => ({ Name: path.parse(filePath).name, Ext: path.parse(filePath).ext });
console.log(parsePath(input)); // { Name: 'main', Ext: '.js' }


// ==== Q6 ====
input = "/home/user/file.txt";
const isAbsolutePath = filePath => path.isAbsolute(filePath);
console.log(isAbsolutePath(input)); // true


// ==== Q7 ====
seg1 = "src";
seg2 = "components";
seg3 = "App.js"
const joinSegments = (...segments) => path.join(...segments);
console.log(joinSegments(seg1, seg2, seg3)); // "src/components/App.js"


// ==== Q8 ====
input = "./index.js";
const resolvePath = relativePath => path.resolve(relativePath);
console.log(resolvePath(input)); // "[your dir]\route-node.js-course-assignments\assignment2\index.js"


// ==== Q9 ====
let path1 = "/folder1";
let path2 = "folder2/file.txt";
const joinTwoPaths = (p1, p2) => path.join(p1, p2);
console.log(joinTwoPaths(path1, path2)); // "/folder1/folder2/file.txt"


// ==== Q10 ====
input = "to_be_deleted.txt";
const deleteFileAsync = filePath => {
    try {
        fs.unlinkASync(filePath);
        console.log(`The ${path.basename(filePath)} is deleted.`); // "The to_be_deleted.txt is deleted."
    } catch (err) {
        console.error(`Error deleting file: ${err.message}`);
    }
}
deleteFileAsync(input);


// ==== Q11 ==== 
input = "./folder";
const createFolderSync = folderPath => {
    try {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`The ${path.basename(folderPath)} is created.`);
    } catch (err) {
        console.error(`Error creating folder: ${err.message}`);
    }
}
createFolderSync(input); // "Success"


// ==== Q12. ====
const emitter = new EventEmitter();
emitter.on("start", () => console.log("Welcome event triggered!"));
emitter.emit("start"); // "Welcome event triggered!"


// ==== Q13 ====
input = "Abdelrahman";
emitter.on("login", username => console.log(`User logged in: ${username}`));
emitter.emit("login", input); // "User logged in: Abdelrahman"


// ==== Q14 ====
input = "./notes.txt";
const readFileSync = filePath => {
    try {
        const content = fs.readFileSync(filePath, "utf-8");
        console.log(`the file content => "${content}"`);
    } catch (err) {
        console.error(`Error reading file: ${err.message}`);
    }
}
readFileSync(input); //the file content => "notes file to be read in assignment."


// ==== Q15 ====
const createOrWriteFileAsync = (filePath, data) => {
    try {
        fs.writeFileSync(filePath, data);
        console.log(`The ${path.basename(filePath)} is created.`); // "The to_be_deleted.txt is created.
    } catch (err) {
        console.error(`Error creating file: ${err.message}`);
    }
}
createOrWriteFileAsync("./folder/async.txt", "Async save"); // "File written successfully to async.txt"


// ==== 16 ====
input = "./folder/notes.txt";
const pathExists = targetPath => fs.existsSync(targetPath);
console.log(pathExists(input)); // true 


// ==== 17 ====
const getOsInfo = () => ({ Platform: os.platform(), Arch: os.arch() });
console.log(getOsInfo()); // { Platform: 'win32', Arch: 'x64' }  (varies by machine)