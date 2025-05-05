const mongoose = require("mongoose");

const gpuSchema = new mongoose.Schema({
  brand: String,
  model: String,
  coolingType: String,
  tdpSupport: Number,
  heightMM: Number,
  price: Number,
});

module.exports = mongoose.model("COOLS", gpuSchema, "cooler");