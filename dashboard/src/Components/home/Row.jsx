import { useState, useRef } from "react";
import { Tooltip, Overlay } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BuyWindow from "../utils/BuyWindow";

function Row({ stock, setFlash }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  //-modal pop effect---
  const [isPop, setIsPop] = useState(false);
  const handlePopEffect = () => {
    setIsPop(!isPop);
  };
  return (
    <div
      className={`d-flex justify-content-between align-items-center p-1 fw-semisolid mt-3
        ${stock.isDown ? "loss" : "profit"}`}
      id="row"
      ref={target}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="w-50 d-flex">
        <p>{stock.name}</p>
      </div>
      <div className="d-flex justify-content-between w-50">
        <span>{stock.percent}</span>
        <span>{stock.price}</span>
        <span>
          {stock.isDown ? (
            <i className="fa-solid fa-caret-down"></i>
          ) : (
            <i className="fa-solid fa-caret-up"></i>
          )}
        </span>
      </div>

      {/* Tooltip overlay */}
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="tooltip-top " {...props} className="custom-tooltip">
            <div
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              className="d-flex gap-2"
            >
              <button
                className="btn btn-success btn-sm"
                title="Buy"
                onClick={handlePopEffect}
              >
                Buy
              </button>
              <button className="btn btn-danger btn-sm" title="Sell">
                Sell
              </button>
              <button className="btn btn-warning btn-sm" title="Analytics">
                <i class="fa-solid fa-chart-simple"></i>
              </button>
              <button className="btn btn-info btn-sm" title="More">
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </Tooltip>
        )}
      </Overlay>
      {isPop && (
        <BuyWindow setIsPop={setIsPop} setFlash={setFlash} uid={stock.name} />
      )}
    </div>
  );
}

export default Row;
