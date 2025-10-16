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
const Order = require("./models/OrdersModel");
//-----------------------Available stocks data-------------------------------------
const { availableStocks } = require("../dashboard/src/data/data");
//--------------------------

const port = process.env.PORT || 8080;
//----routes-----------------
//-------home route----
app.get("/", (req, res) => {
  res.send("Zerodha ");
});
//---------get---all holdings----------
app.get("/holdings", async (req, res) => {
  let holdings = await Holdings.find({});
  res.json(holdings);
});

//------orders get request-------
app.get("/orders", async (req, res) => {
  let orders = await Order.find({});
  res.json(orders);
});
//-----post route for buy or sell the order

app.post("/orders", async (req, res) => {
  const newOrder = new Order({
    name: req.body.name,
    price: req.body.price,
    qty: req.body.qty,
    mode: req.body.mode,
    isExecuted: req.body.isExecuted,
  });

  await newOrder.save();
  res.json({
    type: "success",
    message: `${req.body.name} ${req.body.qty} stock(s) ${req.body.mode} successfully !`,
  });
});
//-----put request orders----------
app.put("/orders/:id", async (req, res) => {
  const { id } = req.params;
  const updatedOrder = await Order.findByIdAndUpdate(
    id,
    { isExecuted: true },
    { new: true }
  );
  const stock = availableStocks.filter((stock, idx) => {
    return stock.name == updatedOrder.name;
  });
  console.log(updatedOrder);
  if (updatedOrder.mode == "buy") {
    const newHolding = new Holdings({
      name: updatedOrder.name,
      qty: updatedOrder.qty,
      userPrice: updatedOrder.price,
      perStockPrice: updatedOrder.price / updatedOrder.qty,
      currPrice: stock[0].price,
      profitOrLoss: stock[0].price - updatedOrder.price / updatedOrder.qty,
    });
    await newHolding.save();
  } else if (updatedOrder.mode == "sell") {
    // SELL to reduce qty or remove
    let holding = await Holdings.findOne({ name: updatedOrder.name });
    console.log(holding);
    if (holding) {
      holding.qty -= updatedOrder.qty;
      holding = await Holdings.findOneAndUpdate(
        { name: updatedOrder.name },
        { qty: holding.qty },
        { new: true }
      );
      console.log(holding);
      if (holding.qty <= 0) {
        let res = await Holdings.deleteOne({ name: updatedOrder.name });
        console.log(res);
      }
    }
  }
  res.json(updatedOrder);
});
//--------listen port at 8080--
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
