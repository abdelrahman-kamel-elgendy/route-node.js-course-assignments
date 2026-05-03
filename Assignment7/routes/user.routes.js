const express = require("express");
const { signup, login, getUserByEmail, getUserById, getAllUsers, updateUser, deleteUser } = require("../controllers/user.controller");

module.exports = express.Router()
    .post("/signup", signup)
    .post("/login", login)
    .get("/by-email", getUserByEmail)
    .get("/:id", getUserById)
    .get("/", getAllUsers)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser);