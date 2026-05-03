const express = require("express");
const sequelize = require("./configs/database");

const app = express();
const PORT = 3000;

app.use(express.json());

sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("Database synced.");
        app.listen(PORT, () =>
            console.log(`Server running at http://localhost:${PORT}`)
        );
    })
    .catch((err) => {
        console.error("DB connection failed:", err.message);
    });