const express = require("express");
const router = express.Router();
const CPU = require("../models/cpu");

router.get("/", async (req, res) => {
  try {
    const cpus = await CPU.find();
    res.json(cpus);
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;