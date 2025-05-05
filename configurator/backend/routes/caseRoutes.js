const express = require("express");
const router = express.Router();
const CASE = require("../models/case");

router.get("/", async (req, res) => {
  try {
    const cases = await CASE.find();
    res.json(cases);
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;