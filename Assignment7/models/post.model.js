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
            allowNull: false,
        },

        content: {
            type: DataTypes.TEXT,
            allowNull: false,

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
        modelName: "Post",
        timestamps: true,
        paranoid: true,
    }
);