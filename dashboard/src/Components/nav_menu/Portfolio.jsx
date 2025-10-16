import { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Portfolio() {
  const [holdings, setHoldings] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/holdings")
      .then((res) => setHoldings(res.data));
    axios
      .get("http://localhost:8080/orders")
      .then((res) => setOrders(res.data));
  }, []);

  // ---- Trend calculations ----
  const totalInvested = holdings.reduce(
    (acc, s) => acc + s.perStockPrice * s.qty,
    0
  );
  const totalCurrent = holdings.reduce(
    (acc, s) => acc + s.currPrice * s.qty,
    0
  );
  const profitPercent =
    ((totalCurrent - totalInvested) / totalInvested) * 100 || 0;

  const mostBought = [...orders]
    .filter((o) => o.mode === "buy")
    .sort((a, b) => b.qty - a.qty)[0];

  const mostSold = [...orders]
    .filter((o) => o.mode === "sell")
    .sort((a, b) => b.qty - a.qty)[0];

  const barData = {
    labels: holdings.map((s) => s.name),
    datasets: [
      {
        label: "Your Buy Price",
        data: holdings.map((s) => s.perStockPrice),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Current Price",
        data: holdings.map((s) => s.currPrice),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <div className="container mt-4">
      <h3>Hello investor !</h3>

      <div className="d-flex flex-wrap justify-content-around my-4">
        <div className="border p-3 rounded bg-light m-2">
          <h5>Total Invested</h5>
          <p>₹{totalInvested.toFixed(2)}</p>
        </div>
        <div className="border p-3 rounded bg-light m-2">
          <h5>Current Value</h5>
          <p>₹{totalCurrent.toFixed(2)}</p>
        </div>
        <div
          className={`border p-3 rounded m-2 ${
            profitPercent >= 0 ? "bg-success-subtle" : "bg-danger-subtle"
          }`}
        >
          <h5>Overall Change</h5>
          <p>{profitPercent.toFixed(2)}%</p>
        </div>
      </div>

      <div className="text-center mb-4 ">
        <h6>
          <span className="text-success">Most Bought:</span>{" "}
          <strong>{mostBought ? mostBought.name : "N/A"}</strong> |
          <span className="text-danger"> Most Sold:</span>{" "}
          <strong>{mostSold ? mostSold.name : "N/A"}</strong>
        </h6>
      </div>

      <div className="border p-3 mb-4" style={{ height: "400px" }}>
        <h5 className="text-center mb-3">Price Comparison</h5>
        <Bar data={barData} />
      </div>
    </div>
  );
}

export default Portfolio;
