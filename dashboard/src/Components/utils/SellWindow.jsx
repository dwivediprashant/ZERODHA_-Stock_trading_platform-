import { useState } from "react";
import axios from "axios";

function SellWindow({ setSellPop, uid, setFlash }) {
  let [quantity, setQuantity] = useState(1);
  let [price, setPrice] = useState(0.0);
  const handleSellClick = async () => {
    const res = await axios.post("http://localhost:8080/orders", {
      name: uid,
      price: price,
      qty: quantity,
      mode: "sell",
      isExecuted: false,
    });
    setSellPop(false);
    setFlash({ type: res.data.type, message: res.data.message });
    setTimeout(() => setFlash(null), 3000);
  };
  return (
    <div className="pop-top ">
      <form
        className="pop-effect text-light needs-validation"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;

          if (!form.checkValidity()) {
            e.stopPropagation();
          } else {
            handleSellClick();
          }

          form.classList.add("was-validated");
        }}
      >
        <button
          type="button"
          className="btn-close close-window-btn  "
          onClick={() => setSellPop(false)}
        ></button>
        <div className="d-flex justify-content-center">
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="floatingTextarea"
              type="number"
              name="qty"
              onChange={(e) => setQuantity(e.target.value)}
              required
              min={1}
            ></input>
            <div className="invalid-feedback">
              Quantity should be greater than 0
            </div>{" "}
            <div className="valid-feedback">Valid quantity</div>
            <label htmlFor="floatingTextarea">Quantity</label>
          </div>
          <div className="input-group w-25">
            <span
              className="input-group-text"
              style={{
                maxHeight: "max-content",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              &#8377;
            </span>
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="floatingInputGroup1"
                name="price"
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <div className="invalid-feedback">
                &ge; current stock price &#8377; 100
              </div>
              <div className="valid-feedback">Valid price</div>
              <label htmlFor="floatingInputGroup1">Price</label>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between p-2">
          <button className="btn  btn-warning me-3 " type="submit">
            Sell
          </button>
          <button
            type="button"
            className="btn  btn-danger"
            onClick={() => setSellPop(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default SellWindow;
