const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
  brand: String,
  model: String,
  formFactorSupport: Array,
  maxGpuLengthMM: Number,
  price: Number,
});

module.exports = mongoose.model("CASE", caseSchema, "cases");