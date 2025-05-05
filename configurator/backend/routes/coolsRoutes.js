const express = require("express");
const router = express.Router();
const COOL = require("../models/cools");

router.get("/", async (req, res) => {
  try {
    const cooler = await COOL.find();
    res.json(cooler);
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;