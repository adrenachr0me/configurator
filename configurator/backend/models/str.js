const mongoose = require("mongoose");

const strSchema = new mongoose.Schema({
  brand: String,
  model: String,
  type: String,
  interface: String,
  capacityGB: Number,
  price: Number,
});

module.exports = mongoose.model("STR", strSchema, "storage");