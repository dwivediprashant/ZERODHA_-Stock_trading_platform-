const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
  name: { type: String },
  qty: { type: Number },
  avg: { type: Number },
  price: { type: Number },
  net: String,
  day: String,
  isLoss: Boolean,
});

module.exports = HoldingsSchema;
