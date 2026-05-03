const { DataTypes, Model } = require("sequelize");
const sequelize = require("../configs/db_connection");

class Post extends Model { }

module.exports = Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        title: {
            type: DataTypes.STRING,
            required: true,
        },

        content: {
            type: DataTypes.TEXT,
            required: true,
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
        modelName: "Post",
        timestamps: true,
        paranoid: true,
    }
);