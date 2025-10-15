import Row from "./Row";
import { watchlist } from "../../data/data";
function RowTab({ setFlash }) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <input
          type="text"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold msc"
          className="form-control m-3"
        />
        <span>{watchlist.length}/20</span>
      </div>
      <div className="scroll-container overflow-auto">
        {watchlist.map((stock, idx) => {
          return <Row stock={stock} key={idx} setFlash={setFlash} />;
        })}
      </div>
    </>
  );
}

export default RowTab;
