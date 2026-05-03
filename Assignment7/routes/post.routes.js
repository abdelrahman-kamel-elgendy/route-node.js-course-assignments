const express = require("express");
const { createPost, deletePost, getPostsWithDetails, getPostsCommentCount } = require("../controllers/post.controller");

module.exports = express.Router()
    .post("/", createPost)
    .delete("/:postId", deletePost)
    .get("/details", getPostsWithDetails)
    .get("/comment-count", getPostsCommentCount);