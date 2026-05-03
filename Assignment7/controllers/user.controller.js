const User = require("../models/user.model");

const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const existing = await User.findOne({ where: { email } });
        if (existing)
            return res.status(409).json({ message: "Email already exists." });

        const user = User.build({ name, email, password, role });
        await user.save();

        res.status(201).json({ message: "User added successfully." });

    } catch (err) {
        if (err.name === "SequelizeValidationError")
            return res.status(400).json({
                message: err.errors.map((e) => e.message).join(", "),
            });

        res.status(500).json({ message: err.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user)
            return res.status(404).json({ message: "Email not exists." });

        if (user.password !== password)
            return res.status(401).json({ message: "Incorrect password." });

        res.status(200).json({ message: "Login successful." });

    } catch (err) {
        if (err.name === "SequelizeValidationError")
            return res.status(400).json({
                message: err.errors.map((e) => e.message).join(", "),
            });

        res.status(500).json({ message: err.message });
    }
};

const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.query;

        const user = await User.findOne({ where: { email } });
        if (!user)
            return res.status(404).json({ message: "no user found" });

        res.status(200).json({ user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { signup, login, getUserByEmail };