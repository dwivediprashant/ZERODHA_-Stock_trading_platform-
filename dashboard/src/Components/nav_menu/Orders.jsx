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
//----------------------------------------------------------------------
function Orders() {
  let [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/orders").then((res) => {
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
        backgroundColor: ["rgba(0, 255, 0, 0.75)", "rgba(255, 0, 0, 0.9)"],
        borderColor: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"],
        borderWidth: 1,
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
  //---------------------------------------------------------------------
  const handleOrderStatus = async (idx, id) => {
    console.log(id);
    const res = await axios.put(`http://localhost:8080/orders/${id}`);
    const updated = orders.map((order, i) => (i === idx ? res.data : order));
    setOrders(updated);
  };
  //------------------------------------------------------------

  return (
    <>
      {orders.length == 0 ? (
        <div className="d-flex flex-column p-3 justify-content-center align-items-center mt-5">
          <p className="text-center">You haven't place any order</p>
          <button className="btn btn-primary "> Get order</button>
        </div>
      ) : (
        <div>
          <h3>Orders ({orders.length})</h3>
          <div className="mt-3 overflow-auto" style={{ maxHeight: "300px" }}>
            <div>
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price in &#8377;</th>
                    <th>Request to</th>
                    <th>Status</th>
                    <th>Broker Approval</th>
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
                        <td>
                          {stock.isExecuted ? (
                            <span>
                              <i
                                className="fa-solid fa-circle-check"
                                style={{ color: "#009900" }}
                              ></i>{" "}
                              Accepted
                            </span>
                          ) : (
                            <span>
                              <i
                                className="fa-regular fa-clock"
                                style={{ color: "orange" }}
                              ></i>{" "}
                              Pending
                            </span>
                          )}
                        </td>
                        <td>
                          {stock.isExecuted ? (
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-success ms-3"
                            >
                              Done
                            </button>
                          ) : (
                            <button
                              className="btn btn-sm btn-outline-warning ms-3"
                              onClick={() => handleOrderStatus(idx, stock._id)}
                            >
                              Mark as done
                            </button>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
          <div
            className=" d-flex flex-column justify-content-center align-items-center p-4 mb-5 mt-5"
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
