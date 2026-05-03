const { Sequelize } = require("sequelize");

module.exports = new Sequelize("social_media_db", "postgres", "123456", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
});