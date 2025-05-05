const mongoose = require("mongoose");

const mbsSchema = new mongoose.Schema({
  brand: String,
  model: String,
  socket: String,
  formFactor: String,
  chipset: String,
  ramType: String,
  price: Number,
});

module.exports = mongoose.model("MBS", mbsSchema, "motherboards");