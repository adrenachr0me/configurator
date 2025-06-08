const mongoose = require("mongoose");

const ramSchema = new mongoose.Schema({
  brand: String,
  model: String,
  capacityGB: Number,
  sticks: Number,
  type: String,
  speedMHz: Number,
  price: Number,
});

module.exports = mongoose.model("RAM", ramSchema, "rams");