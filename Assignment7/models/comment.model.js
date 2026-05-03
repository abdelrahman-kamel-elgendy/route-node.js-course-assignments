const { DataTypes, Model } = require("sequelize");
const sequelize = require("../configs/database");

class Comment extends Model { }

module.exports = Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        content: {
            type: DataTypes.TEXT,
            required: true,
        },

        postId: {
            type: DataTypes.INTEGER,
            required: true,
            references: {
                model: "Posts",
                key: "id"
            },
        },

        userId: {
            type: DataTypes.INTEGER,
            required: true,
            references: {
                model: "Users",
                key: "id"
            },
        },
    },

    {
        sequelize,
        modelName: "Comment",
        timestamps: true,
    }
);