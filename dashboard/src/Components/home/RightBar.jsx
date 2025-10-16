import TopRight from "./TopRight";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../nav_menu/dashboard";
import Orders from "../nav_menu/Orders";
import App from "../nav_menu/App";
import Holdings from "../nav_menu/Holdings";
import Funds from "../nav_menu/Funds";
import MarketTrendsContainer from "../nav_menu/MarketTrendsContainer";
import Portfolio from "../nav_menu/Portfolio";
function RightBar({ setFlash }) {
  return (
    <>
      <TopRight />
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/apps" element={<App />}></Route>
          <Route path="/funds" element={<Funds />}></Route>
          <Route
            path="/holdings"
            element={<Holdings setFlash={setFlash} />}
          ></Route>
          <Route
            path="/markettrends"
            element={<MarketTrendsContainer />}
          ></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default RightBar;
