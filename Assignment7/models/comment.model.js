const { DataTypes, Model } = require("sequelize");
const sequelize = require("../configs/db_connection");

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
            allowNull: false,
        },

        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Posts",
                key: "id"
            },
        },

        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
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