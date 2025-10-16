const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  name: String,
  price: { type: Number, require: true },
  qty: { type: Number, require: true },
  mode: String,
  isExecuted: Boolean,
});

module.exports = OrdersSchema;
