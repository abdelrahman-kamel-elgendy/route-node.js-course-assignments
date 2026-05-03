const express = require("express");
const { signup, login, getUserByEmail } = require("../controllers/user.controller");

module.exports = express.Router()
    .post("/signup", signup)
    .post("/login", login)
    .get("/by-email", getUserByEmail)