const express = require("express");
const { signup, login, getUserByEmail, getUserById, updateUser, deleteUser } = require("../controllers/user.controller");

module.exports = express.Router()
    .post("/signup", signup)
    .post("/login", login)
    .get("/by-email", getUserByEmail)
    .get("/:id", getUserById)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser);