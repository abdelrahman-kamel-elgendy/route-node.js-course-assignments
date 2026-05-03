// ============================================================
// Assignment 4 – Part 1: CRUD Operations Using Express.js
// ============================================================

const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = 8080;
const DB_PATH = path.join(__dirname, "users.json");

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

// =============================================================
// Creating Express Server and Middleware
// =============================================================
const app = express();
app.use(express.json());

// =============================================================
// 1. POST /user => add a new user
// =============================================================
app.post("/user", (req, res) => {
    try {
        const { name, age, email } = req.body;

        const errors = [];
        if (!name) errors.push("name is required.");
        if (!age) errors.push("age is required.");
        if (!email) errors.push("email is required.");

        if (errors.length > 0)
            return res.status(400).json({ message: errors.join(", ") });

        const users = readUsers();
        if (users.some(u => u.email === email))
            return res.status(400).json({ message: "Email already exists." });


        users.push({ id: Number(new Date()), name, age, email })
        writeUsers(users);

        res.status(201).json({ message: "User added successfully." });
    } catch (err) {
        console.error(`Error processing request: ${err.message}`);
        res.status(500).json({ message: "Internal server error." });
    }
});

// =============================================================
// 2. PATCH /user/:id => update user by ID (name, age, or email)
// =============================================================
app.patch("/user/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const users = readUsers();

        const index = users.findIndex((u) => u.id === id);
        if (index === -1)
            return res.status(404).json({ message: "User ID not found." });


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
    } catch (err) {
        console.error(`Error processing request: ${err.message}`);
        res.status(500).json({ message: "Internal server error." });
    }
});

// =============================================================
// 3a. DELETE /user/:id => delete by ID from params
// 3b. DELETE /user => delete by ID from request body
// =============================================================
function deleteUser(req, res) {
    try {
        const id = parseInt(req.params.id ?? req.body?.id);
        const users = readUsers();

        if (isNaN(id))
            return res.status(400).json({ message: "Please provide a valid user ID." });

        const index = users.findIndex((u) => u.id === id);
        if (index === -1)
            return res.status(404).json({ message: "User ID not found." });


        users.splice(index, 1);
        writeUsers(users);

        res.status(200).json({ message: "User deleted successfully." });
    } catch (err) {
        console.error(`Error processing request: ${err.message}`);
        res.status(500).json({ message: "Internal server error." });
    }
}

app.delete("/user/:id", deleteUser);
app.delete("/user", deleteUser);

// =============================================================
// 4. GET /user/getByName?name=Abdelrahman => get user by name
// =============================================================
app.get("/user/getByName", (req, res) => {
    try {
        const { name } = req.query;

        if (!name)
            return res.status(400).json({ message: "Please provide a name query parameter." });

        const users = readUsers();
        const user = users.find((u) => u.name.toLowerCase() === name.toLowerCase());

        if (!user)
            return res.status(404).json({ message: "User name not found." });


        res.status(200).json(user);
    } catch (err) {
        console.error(`Error processing request: ${err.message}`);
        res.status(500).json({ message: "Internal server error." });
    }
});

// =============================================================
// 5. GET /user => get all users
// =============================================================
app.get("/user", (req, res) => {
    try {
        res.status(200).json(readUsers());
    } catch (err) {
        console.error(`Error processing request: ${err.message}`);
        res.status(500).json({ message: "Internal server error." });
    }
});


// =============================================================
// 6. GET /user/filter?minAge=25 => filter users by minimum age
// =============================================================
app.get("/user/filter", (req, res) => {
    try {
        const minAge = parseInt(req.query.minAge);

        if (isNaN(minAge))
            return res.status(400).json({ message: "Please provide a valid minAge query parameter." });

        const filtered = readUsers().filter((u) => u.age >= minAge);
        res.status(200).json(filtered);
    } catch (err) {
        console.error(`Error processing request: ${err.message}`);
        res.status(500).json({ message: "Internal server error." });
    }
});

// =============================================================
// 7. GET /user/:id => get user by ID
// =============================================================
app.get("/user/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const users = readUsers();
        const user = users.find((u) => u.id === id);

        if (!user)
            return res.status(404).json({ message: "User not found." });


        res.status(200).json(user);
    } catch (err) {
        console.error(`Error processing request: ${err.message}`);
        res.status(500).json({ message: "Internal server error." });
    }
});

// =============================================================
// Starting Server
// =============================================================
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});