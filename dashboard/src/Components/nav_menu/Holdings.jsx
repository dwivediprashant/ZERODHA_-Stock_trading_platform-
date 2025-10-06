import { holdings } from "../../data/data";
function Holdings() {
  return (
    <div className="mt-3">
      <h3>Holdings ({holdings.length})</h3>
      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg cost</th>
              <th>LTP</th>
              <th>Cur value</th>
              <th>P&L</th>
              <th>Net change</th>
              <th>Day change</th>
            </tr>
          </thead>

          {holdings.map((stock, idx) => {
            const currVal = stock.price * stock.qty;
            const isProfit = currVal - stock.avg * stock.qty >= 0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tbody key={idx}>
                <tr>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currVal.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currVal - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.net}</td>
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

export default Holdings;
