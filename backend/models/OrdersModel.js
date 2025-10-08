const mongoose = require("mongoose");
const OrdersSchema = require("../schemas/OrdersSchema");

module.exports = new mongoose.model("Order", OrdersSchema);
