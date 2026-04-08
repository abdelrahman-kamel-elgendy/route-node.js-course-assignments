// ============================================================
// Assignment 4 – Part 1: CRUD Operations Using Express.js
// ============================================================

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const DB_PATH = path.join(__dirname, "users.json");

app.use(express.json());


// == Helpers ==================================================

/** Read users array from the JSON file */
function readUsers() {
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, "[]", "utf-8");
    }
    return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

/** Write users array back to the JSON file */
function writeUsers(users) {
    fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2), "utf-8");
}

// =============================================================
// 4. GET /user/getByName?name=ali  → get user by name (query param)
// =============================================================
app.get("/user/getByName", (req, res) => {
    const { name } = req.query;

    if (!name) 
        return res.status(400).json({ message: "Please provide a name query parameter." });
    

    const users = readUsers();
    const user = users.find(
        (u) => u.name.toLowerCase() === name.toLowerCase()
    );

    if (!user) 
        return res.status(404).json({ message: "User name not found." });
    

    res.status(200).json(user);
});


// =============================================================
// 6. GET /user/filter?minAge=25  → filter users by minimum age
// =============================================================
app.get("/user/filter", (req, res) => {
    const minAge = parseInt(req.query.minAge);

    if (isNaN(minAge)) {
        return res.status(400).json({ message: "Please provide a valid minAge query parameter." });
    }

    const users = readUsers();
    const filtered = users.filter((u) => u.age >= minAge);

    if (filtered.length === 0) {
        return res.status(404).json({ message: "no user found" });
    }

    res.status(200).json(filtered);
});


// =============================================================
// 5. GET /user  → get all users
// =============================================================
app.get("/user", (req, res) => {
    const users = readUsers();
    res.status(200).json(users);
});


// =============================================================
// 7. GET /user/:id  → get user by ID
// =============================================================
app.get("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const users = readUsers();
    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
});


// =============================================================
// 2. PATCH /user/:id  → update user by ID (name, age, or email)
// =============================================================
app.patch("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const users = readUsers();
    const index = users.findIndex((u) => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "User ID not found." });
    }

    const { name, age, email } = req.body;

    if (!name && !age && !email) {
        return res.status(400).json({ message: "Provide at least one field to update (name, age, email)." });
    }

    // Track which field was updated for the response message
    let updatedField = "";
    if (name) { users[index].name = name; updatedField = "name"; }
    if (age) { users[index].age = age; updatedField = "age"; }
    if (email) { users[index].email = email; updatedField = "email"; }

    writeUsers(users);

    res.status(200).json({ message: `User ${updatedField} updated successfully.` });
});


// =============================================================
// 3a. DELETE /user/:id  → delete by ID from params
// 3b. DELETE /user      → delete by ID from request body
// (Express 5 removed support for optional params like :id?)
// =============================================================
function deleteUser(req, res) {
    const id = parseInt(req.params.id ?? req.body?.id);
    const users = readUsers();

    if (isNaN(id)) {
        return res.status(400).json({ message: "Please provide a valid user ID." });
    }

    const index = users.findIndex((u) => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "User ID not found." });
    }

    users.splice(index, 1);
    writeUsers(users);

    res.status(200).json({ message: "User deleted successfully." });
}

app.delete("/user/:id", deleteUser);
app.delete("/user", deleteUser);


// == Start Server ==============================================
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});