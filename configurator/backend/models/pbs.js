const mongoose = require("mongoose");

const pbsSchema = new mongoose.Schema({
  brand: String,
  model: String,
  wattage: Number,
  modular: String,
  certification: String,
  price: Number,
});

module.exports = mongoose.model("PBS", pbsSchema, "power");