require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//------cors+body parser
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
//mongoose connect
const MONGO_URL = process.env.MONGO_URL;
const connectDB = async () => {
  await mongoose.connect(MONGO_URL);
  console.log("DB connection established successfully!");
};
connectDB();
//-----------------------------
//--------models---------------

const Holdings = require("./models/HoldingsModel");
const Positions = require("./models/PositionsModel");

//--------------------------

const port = process.env.PORT || 8080;
//----routes-----------------
//-------home route----
app.get("/", (req, res) => {
  res.send("Zerodha ");
});
//------------all holdings----------
app.get("/allHoldings", async (req, res) => {
  let holdings = await Holdings.find({});
  res.json(holdings);
});
//---------positiins get----------
app.get("/allPositions", async (req, res) => {
  let positions = await Positions.find({});
  res.json(positions);
});
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
