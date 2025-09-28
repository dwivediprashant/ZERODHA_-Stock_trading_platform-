// Holdings.jsx
import React from "react";

function Holdings() {
  // sample metrics (replace with real data)
  const metrics = {
    totalInvestment: "29,875.",
    currentValue: "31,428.",
    pnl: "1,553.40",
    pnlPercent: "+5.20%",
  };

  // sample columns to render the header
  const columns = [
    "Instrument",
    "Qty.",
    "Avg. cost",
    "LTP",
    "Cur. val",
    "P&L",
    "Net chg.",
    "Day chg.",
  ];

  return (
    <div className="holdings-page  mt-5">
      {/* Main content row: left thin column and right main area */}
      <div className="row">
        {/* Right main column */}
        <div className="col">
          <div className="card border-0">
            <div className="card-body p-0">
              {/* Holdings header */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">
                  Holdings <span className="text-muted fs-6">(13)</span>
                </h5>
                <div className="text-muted small">
                  {" "}
                  {/* optional actions */}{" "}
                </div>
              </div>

              {/* Table header */}
              <div className="table-responsive">
                <table className="table table-borderless holdings-table">
                  <thead>
                    <tr className="small text-muted">
                      {columns.map((col) => (
                        <th key={col} className="py-3 border-top border-bottom">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  {/* Empty body — show no holdings message */}
                  <tbody>
                    <tr>
                      <td
                        colSpan={columns.length}
                        className="py-5 text-center text-muted"
                      >
                        No holdings to display
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Big summary metrics row (centered like screenshot) */}
              <div className="d-flex justify-content-center align-items-center mt-5 mb-4">
                <div className="summary_item text-center mx-4">
                  <div className="summary_value">{metrics.totalInvestment}</div>
                  <div className="summary_label text-muted">
                    Total investment
                  </div>
                </div>

                <div className="summary_item text-center mx-4">
                  <div className="summary_value">{metrics.currentValue}</div>
                  <div className="summary_label text-muted">Current value</div>
                </div>

                <div className="summary_item text-center mx-4">
                  <div className="summary_value text-success">
                    {metrics.pnl}{" "}
                    <span className="fs-6">({metrics.pnlPercent})</span>
                  </div>
                  <div className="summary_label text-muted">P&L</div>
                </div>
              </div>

              {/* Small footer / watermark area or help text */}
              <div className="text-end small text-muted pe-2">
                {/* can put last refreshed time */}
                Last updated: just now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Holdings;
