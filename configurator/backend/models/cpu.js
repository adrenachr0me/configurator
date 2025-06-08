const mongoose = require("mongoose");

const cpuSchema = new mongoose.Schema({
  brand: String,
  model: String,
  socket: String,
  cores: Number,
  threads: Number,
  baseClockGHz: Number,
  boostClockGHz: Number,
  tdp: Number,
  price: Number
});

module.exports = mongoose.model("CPU", cpuSchema, "cpus");