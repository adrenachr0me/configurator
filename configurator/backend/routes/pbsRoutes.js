const express = require("express");
const router = express.Router();
const PBS = require("../models/pbs");

router.get("/", async (req, res) => {
  try {
    const power = await PBS.find();
    res.json(power);
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;