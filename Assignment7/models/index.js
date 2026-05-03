const User = require("./user.model");
const Post = require("./post.model");
const Comment = require("./comment.model");
const sequelize = require("../configs/db_connection");


User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });


const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log("Database synced successfully");
    } catch (error) {
        console.error("Error syncing database:", error);
    }
};

module.exports = { User, Post, Comment, sequelize, syncDatabase };