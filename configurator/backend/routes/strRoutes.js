const express = require("express");
const router = express.Router();
const STR = require("../models/str");

router.get("/", async (req, res) => {
  try {
    const storage = await STR.find();
    res.json(storage);
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});


module.exports = router;