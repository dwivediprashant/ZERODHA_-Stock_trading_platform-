import { availableStocks } from "../../data/data";
import MarketTrends from "./MarketTrends";

function MarketTrendsContainer() {
  return (
    <>
      <h4
        className="text-bg-light text-center mt-2 lh-lg"
        style={{ boxShadow: "0 0 5px gray" }}
      >
        Stock trends over past years
      </h4>
      <div className="overflow-auto mt-5" style={{ maxHeight: "100vh" }}>
        {availableStocks.map((stock, idx) => (
          <MarketTrends stockName={stock.name} key={idx} />
        ))}
      </div>
    </>
  );
}

export default MarketTrendsContainer;
