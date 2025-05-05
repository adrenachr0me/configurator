const express = require("express");
const router = express.Router();
const GPU = require("../models/gpu");

router.get("/", async (req, res) => {
  try {
    const gpus = await GPU.find();
    res.json(gpus);
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;