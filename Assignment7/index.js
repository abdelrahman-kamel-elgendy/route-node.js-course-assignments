const express = require("express");
const sequelize = require("./configs/db_connection");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

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