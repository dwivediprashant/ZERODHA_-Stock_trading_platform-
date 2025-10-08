const mongoose = require("mongoose");
const PositionsSchema = require("../schemas/PositionsSchema");

const Position = new mongoose.model("Position", PositionsSchema);
module.exports = Position;
