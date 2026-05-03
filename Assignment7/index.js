const express = require("express");
const sequelize = require("./configs/database");
const userRoutes = require("./routes/user.routes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/user", userRoutes);

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