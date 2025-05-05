const mongoose = require("mongoose");

const gpuSchema = new mongoose.Schema({
  brand: String,
  model: String,
  memoryGB: Number,
  type: String,
  tdp: Number,
  lengthMM: Number,
  price: Number,
});

module.exports = mongoose.model("GPU", gpuSchema, "gpus");