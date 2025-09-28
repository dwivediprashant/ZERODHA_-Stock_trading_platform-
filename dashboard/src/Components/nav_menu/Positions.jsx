function Positions() {
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
                  Positions <span className="text-muted fs-6">(2)</span>
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
                        No Positions to display
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Positions;
