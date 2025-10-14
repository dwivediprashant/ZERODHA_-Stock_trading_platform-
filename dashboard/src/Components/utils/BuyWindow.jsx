import { useState } from "react";
import axios from "axios";
function BuyWindow({ setIsPop, uid, setFlash }) {
  let [quantity, setQuantity] = useState(1);
  let [price, setPrice] = useState(0.0);
  const handleBuyClick = async () => {
    const res = await axios.post("http://localhost:8080/newOrder", {
      name: uid,
      price: price,
      qty: quantity,
      mode: "buy",
    });
    setIsPop(false);
    setFlash({ type: res.data.type, message: res.data.message });
    setTimeout(() => setFlash(null), 3000);
  };
  return (
    <div className="pop-top">
      <div className="pop-effect p-4 text-light ">
        <div className="form-floating mb-3">
          <input
            className="form-control"
            id="floatingTextarea"
            type="number"
            name="qty"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          ></input>
          <label for="floatingTextarea">Quantity</label>
        </div>
        <div className="input-group w-25">
          <span className="input-group-text">&#8377;</span>
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="floatingInputGroup1"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <label htmlFor="floatingInputGroup1">Price</label>
          </div>
        </div>
        <p className="text-dark">Minimum margin required : &#8377; 5000</p>
        <div className="d-flex justify-content-between p-2">
          <button className="btn  btn-success me-3" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn  btn-danger" onClick={() => setIsPop(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyWindow;
