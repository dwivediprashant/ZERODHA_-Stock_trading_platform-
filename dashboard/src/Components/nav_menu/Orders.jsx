import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
function Orders() {
  let [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/allOrders").then((res) => {
      setOrders(res.data);
    });
  }, []);
  //---------chart sell vs buy-------

  const buyStock = orders.filter((stock, idx) => {
    return stock.mode == "buy";
  });
  const sellStock = orders.filter((stock, idx) => {
    return stock.mode == "sell";
  });
  let buyQty = 0;
  for (let stock of buyStock) {
    buyQty += stock.qty;
  }
  let sellQty = 0;
  for (let stock of sellStock) {
    sellQty += stock.qty;
  }
  const data = {
    labels: ["Buy", "Sell"],
    datasets: [
      {
        label: "Total quantity",
        data: [buyQty, sellQty],
        backgroundColor: ["rgba(0,255,0,1)", "rgba(255,0,0,1)"],
        borderColor: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"],
        borderWidth: 5,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "black",
        },
      },
    },
  };
  return (
    <>
      {orders.length == 0 ? (
        <div className="d-flex flex-column p-3 justify-content-center align-items-center mt-5">
          <p className="text-center">You haven't place any order</p>
          <button className="btn btn-primary "> Get order</button>
        </div>
      ) : (
        <div className="mt-3">
          <h3>Orders ({orders.length})</h3>
          <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price in &#8377;</th>
                  <th>Buy/Sell</th>
                </tr>
              </thead>

              {orders.map((stock, idx) => {
                return (
                  <tbody key={idx}>
                    <tr>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td>{stock.mode}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div
            className=" d-flex flex-column justify-content-center align-items-center p-4 mb-5"
            style={{
              width: "100%",
              height: "450px",
              border: "1px solid black",
            }}
          >
            <h5>Buy vs Sell</h5>
            <Pie data={data} options={options} />
          </div>
        </div>
      )}
    </>
  );
}

export default Orders;
