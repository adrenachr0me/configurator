const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate");
const prebuildSchema = new mongoose.Schema({
    title: String,
    specs: String,
    components: {
      cpu: { type: mongoose.Schema.Types.ObjectId, autopopulate: true, select: 'brand model', ref: 'CPU' },
      gpu: { type: mongoose.Schema.Types.ObjectId, ref: 'GPU', autopopulate: true, select: 'brand model'  },
      cooler: { type: mongoose.Schema.Types.ObjectId, ref: 'COOLS', autopopulate: true, select: 'brand model' },
      motherboard: { type: mongoose.Schema.Types.ObjectId, ref: 'MBS', autopopulate: true, select: 'brand model' },
      ram: { type: mongoose.Schema.Types.ObjectId, ref: 'RAM', autopopulate: true, select: 'brand model capacityGB' },
      storage: { type: mongoose.Schema.Types.ObjectId, ref: 'STR', autopopulate: true, select: 'brand model capacityGB' },
      psu: { type: mongoose.Schema.Types.ObjectId, ref: 'PBS', autopopulate: true, select: 'brand model wattage' },
      case: { type: mongoose.Schema.Types.ObjectId, ref: 'CASE', autopopulate: true, select: 'brand model' },
    },
    price: Number
  });
  prebuildSchema.plugin(autopopulate);
module.exports = mongoose.model("Prebuild", prebuildSchema, "prebuilds");