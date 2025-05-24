const express = require("express");
const router = express.Router();
const Prebuild = require("../models/prebuild");

router.get("/", async (req, res) => {
    try {
      const prebuilds = await Prebuild.find({})
        .populate("components.cpu")
        .populate("components.gpu")
        .populate("components.cooler")
        .populate("components.motherboard")
        .populate("components.ram")
        .populate("components.storage")
        .populate("components.psu")
        .populate("components.case");
  
      const prebuildsData = prebuilds.map((prebuild) => ({
        title: prebuild.title,
        specs: prebuild.specs,
        components: prebuild.components,
        price: prebuild.price,
      }));
  
      res.json(prebuildsData);
    } catch (err) {
        console.error("Ошибка при получении prebuilds:", err);
      res.status(500).json({ message: "Ошибка сервера" });
    }
  });

module.exports = router;