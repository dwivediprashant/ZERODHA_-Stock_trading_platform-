const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
  name: { type: String },
  qty: { type: Number },
  userPrice: { type: Number },
  currPrice: { type: Number },
  perStockPrice: { type: Number },
  profitOrLoss: { type: Number },
});

module.exports = HoldingsSchema;
