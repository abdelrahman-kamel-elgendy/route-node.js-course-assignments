const express = require("express");
const { signup, getUserByEmail, getUserById, updateUser } = require("../controllers/user.controller");

module.exports = express.Router()
    .post("/signup", signup)
    .get("/by-email", getUserByEmail)
    .get("/:id", getUserById)
    .put("/:id", updateUser);