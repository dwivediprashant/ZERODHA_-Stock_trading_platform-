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
const Order = require("./models/OrdersModel");

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
//------orders get request-------
app.get("/allOrders", async (req, res) => {
  let orders = await Order.find({});
  res.json(orders);
});
//-----post route fro buy or sell the order
app.post("/newOrder", async (req, res) => {
  const newOrder = new Order({
    name: req.body.name,
    price: req.body.price,
    qty: req.body.qty,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.json({
    type: "success",
    message: `Stock ${req.body.mode} successfully !`,
  });
});
//--------listen port at 8080--
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
