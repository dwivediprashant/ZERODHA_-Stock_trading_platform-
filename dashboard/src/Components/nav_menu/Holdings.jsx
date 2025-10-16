import { useState, useEffect } from "react";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import { availableStocks } from "../../data/data";
import SellWindow from "../utils/SellWindow";

function Holdings({ setFlash }) {
  const [holdings, setHoldings] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/holdings").then((res) => {
      // console.log(res.data);
      setHoldings(res.data);
    });
  }, []);
  //---------------------chart data------------------------------------
  const data = {
    labels: holdings.map((stock, idx) => {
      return stock.name;
    }),
    datasets: [
      {
        label: "Total holdings",
        data: holdings.map((stock, idx) => stock.qty),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(200, 159, 64, 0.2)",
          "rgba(100, 255, 64, 0.2)",
          "rgba(255, 100, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(200, 159, 64, 1)",
          "rgba(100, 255, 64, 1)",
          "rgba(255, 100, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  //---------------------
  //-sell pop effect---
  const [sellPop, setSellPop] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const handleSellPopWindow = (name) => {
    setSellPop(!sellPop);
    setSelectedStock(name);
  };
  return (
    <>
      {holdings.length == 0 ? (
        <div className="text-center mt-4">
          <h4 className="text-secondary">No holdings</h4>
          <p>Start investing to see your holdings appear here.</p>
        </div>
      ) : (
        <div>
          {" "}
          <h3>Holdings ({holdings.length})</h3>
          <div className="mt-3">
            <div className="overflow-auto" style={{ maxHeight: "300px" }}>
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Stock of</th>
                    <th>Qty</th>

                    <th>Your Price per stock</th>
                    <th>Current Price per stock</th>
                    <th>P&L</th>
                    <th>Wants to sell</th>
                  </tr>
                </thead>

                {holdings.map((stock, idx) => {
                  // const change = stock.buyPrice - stock.currPrice;
                  // stock.isLoss = change > 0 ? false : true;
                  return (
                    <tbody key={idx}>
                      <tr>
                        <td>{stock.name}</td>
                        <td>{stock.qty}</td>
                        <td>{stock.perStockPrice.toFixed(2)}</td>
                        <td>{stock.currPrice.toFixed(2)}</td>
                        <td
                          className={`${
                            stock.profitOrLoss >= 0 ? "profit" : "loss"
                          }`}
                        >
                          {stock.profitOrLoss.toFixed(2)}
                        </td>
                        <td>
                          <button
                            title="sell"
                            className="btn btn-sm btn-warning"
                            onClick={() => handleSellPopWindow(stock.name)}
                          >
                            Sell now
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
            <div
              className="d-flex flex-column justify-content-center align-items-center p-4 mb-5 mt-5 border border-dark"
              style={{
                width: "100%",
                height: "450px",
              }}
            >
              <h5>No. of holdings vs stocks</h5>
              <Doughnut data={data} />
            </div>
          </div>
        </div>
      )}

      {sellPop && selectedStock && (
        <SellWindow
          setSellPop={setSellPop}
          uid={selectedStock}
          setFlash={setFlash}
        />
      )}
    </>
  );
}

export default Holdings;
