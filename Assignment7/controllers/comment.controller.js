const { Post, User, Comment } = require("../models");
const { Op } = require("sequelize");

const createComments = async (req, res) => {
    try {
        const { comments } = req.body;
        await Comment.bulkCreate(comments);
        res.status(201).json({ message: "comments created." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const { userId, content } = req.body;

        const comment = await Comment.findByPk(commentId);
        if (!comment) {
            return res.status(404).json({ message: "comment not found." });
        }

        if (comment.userId !== Number(userId)) {
            return res.status(403).json({
                message: "You are not authorized to update this comment.",
            });
        }

        comment.content = content;
        await comment.save();

        res.status(200).json({ message: "Comment updated." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const findOrCreateComment = async (req, res) => {
    try {
        const { postId, userId, content } = req.body;

        const [comment, created] = await Comment.findOrCreate({
            where: { postId, userId, content },
            defaults: { postId, userId, content },
        });

        res.status(200).json({ comment, created });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const searchComments = async (req, res) => {
    try {
        const { word } = req.query;

        const { count, rows } = await Comment.findAndCountAll({
            where: {
                content: { [Op.like]: `%${word}%` },
            },
        });

        if (count === 0)
            return res.status(404).json({ message: "no comments found." });


        res.status(200).json({ count, comments: rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getNewestComments = async (req, res) => {
    try {
        const { postId } = req.params;

        const comments = await Comment.findAll({
            where: { postId },
            order: [["createdAt", "DESC"]],
            limit: 3,
            attributes: ["id", "content", "createdAt"],
        });

        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getCommentDetails = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ["id", "name", "email"],
                },
                {
                    model: Post,
                    attributes: ["id", "title", "content"],
                },
            ],
        });

        if (!comment) {
            return res.status(404).json({ message: "no comment found" });
        }

        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createComments, updateComment, findOrCreateComment, searchComments, getNewestComments, getCommentDetails };