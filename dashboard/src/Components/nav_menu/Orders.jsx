import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Orders() {
  let [orders, setOrders] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:8080/allOrders").then((res) => {
      setOrders(res.data);
    });
  }, []);
  return (
    <>
      {orders == 0 ? (
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
        </div>
      )}
    </>
  );
}

export default Orders;
