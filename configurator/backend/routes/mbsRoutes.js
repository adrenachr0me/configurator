const express = require("express");
const router = express.Router();
const MBS = require("../models/mbs");

router.get("/", async (req, res) => {
  try {
    const motherboards = await MBS.find();
    res.json(motherboards);
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;