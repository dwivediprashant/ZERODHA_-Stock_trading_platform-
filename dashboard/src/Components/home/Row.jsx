import { useState, useRef } from "react";
import { Tooltip, Overlay } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BuyWindow from "../utils/BuyWindow";
import AnalyticsWindow from "../utils/AnalyticsWindow";

function Row({ stock, setFlash }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  //-buy pop effect---
  const [isPop, setIsPop] = useState(false);
  const handlePopEffect = () => {
    setIsPop(!isPop);
  };
  //----anlysis window pop effect
  const [analyticsPop, setAnalyticsPop] = useState(false);
  const handleAnalyticsPopWindow = () => {
    setAnalyticsPop(!analyticsPop);
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
        <span>&#8377;{stock.price}</span>
        <span>
          {stock.isDown ? (
            <i className="fa-solid fa-caret-down fa-fade"></i>
          ) : (
            <i className="fa-solid fa-caret-up fa-bounce"></i>
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
              <button
                className="btn btn-warning btn-sm"
                title="Analytics"
                onClick={handleAnalyticsPopWindow}
              >
                <i className="fa-solid fa-chart-simple"></i>
              </button>
              {/* <button className="btn btn-info btn-sm" title="More">
                <i className="fa-solid fa-ellipsis"></i>
              </button> */}
            </div>
          </Tooltip>
        )}
      </Overlay>
      {isPop && (
        <BuyWindow setIsPop={setIsPop} setFlash={setFlash} uid={stock.name} />
      )}

      {analyticsPop && (
        <AnalyticsWindow uid={stock.name} setAnalyticsPop={setAnalyticsPop} />
      )}
    </div>
  );
}

export default Row;
