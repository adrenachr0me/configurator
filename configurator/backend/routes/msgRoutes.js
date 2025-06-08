const express = require("express");
const router = express.Router();
const MESSAGE = require("../models/msg");

router.post("/", async (req, res) => {
    try {
        
        const { name, email, subject, message } = req.body;
        const newMessage = new MESSAGE(req.body);
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: "Ошибка сервера" });
    }
});
module.exports = router;
    