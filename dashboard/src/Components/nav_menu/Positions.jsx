import axios from "axios";
import { useState, useEffect } from "react";
function Positions() {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/allPositions").then((res) => {
      setPositions(res.data);
    });
  });
  return (
    <div className="mt-3">
      <h3>Positions ({positions.length})</h3>
      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg cost</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Change</th>
            </tr>
          </thead>

          {positions.map((stock, idx) => {
            const currVal = stock.price * stock.qty;
            const isProfit = currVal - stock.avg * stock.qty >= 0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tbody key={idx}>
                <tr>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currVal - stock.avg * stock.qty).toFixed(2)}
                  </td>

                  <td className={dayClass}>{stock.day}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Positions;
