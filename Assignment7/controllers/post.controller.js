const { fn, col } = require("sequelize");
const { Post, User, Comment } = require("../models");

const createPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        if (!title || !content || !userId)
            return res.status(400).json({ message: "Title, content, and userId are required." });

        if (title === "" || content === "" || userId === "")
            return res.status(400).json({ message: "Title, content, and userId cannot be empty." });

        if (!await User.findByPk(userId))
            return res.status(404).json({ message: "User not found." });

        const post = new Post({ title, content, userId });
        await post.save();

        res.status(201).json({ message: "Post created successfully." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const { userId } = req.body;

        if (!await User.findByPk(userId))
            return res.status(404).json({ message: "User not found." });

        const post = await Post.findByPk(postId);
        if (!post) {
            return res.status(404).json({ message: "Post not found." });
        }

        if (post.userId !== Number(userId)) {
            return res.status(403).json({
                message: "You are not authorized to delete this post.",
            });
        }

        await post.destroy();
        res.status(200).json({ message: "Post deleted." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getPostsWithDetails = async (req, res) => {
    try {
        const posts = await Post.findAll({
            attributes: ["id", "title"],
            include: [
                {
                    model: User,
                    attributes: ["id", "name"],
                },
                {
                    model: Comment,
                    attributes: ["id", "content"],
                },
            ],
        });

        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};

const getPostsCommentCount = async (req, res) => {
    try {
        const posts = await Post.findAll({
            attributes: [
                "id",
                "title",
                [fn("COUNT", col("Comments.id")), "commentCount"],
            ],
            include: [
                {
                    model: Comment,
                    attributes: [],
                },
            ],
            group: ["Post.id"],
        });

        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createPost, deletePost, getPostsWithDetails, getPostsCommentCount };