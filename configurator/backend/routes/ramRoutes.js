const express = require("express");
const router = express.Router();
const RAM = require("../models/ram");

router.get("/", async (req, res) => {
  try {
    const rams = await RAM.find();
    res.json(rams);
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;