const express = require("express");
const { createComments, updateComment, findOrCreateComment, searchComments, getNewestComments, getCommentDetails, } = require("../controllers/comment.controller");


module.exports = express.Router()
    .post("/", createComments)
    .patch("/:commentId", updateComment)
    .post("/find-or-create", findOrCreateComment)
    .get("/search", searchComments)
    .get("/newest/:postId", getNewestComments)
    .get("/details/:id", getCommentDetails);