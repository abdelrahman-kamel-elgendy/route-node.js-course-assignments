const express = require("express");
const { signup, login } = require("../controllers/user.controller");

module.exports = express.Router()
    .post("/signup", signup)
    .post("/login", login)