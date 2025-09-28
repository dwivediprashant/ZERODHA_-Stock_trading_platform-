import TopRight from "./TopRight";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../nav_menu/dashboard";
import Orders from "../nav_menu/Orders";
import App from "../nav_menu/App";
import Holdings from "../nav_menu/Holdings";
import Funds from "../nav_menu/Funds";
import Positions from "../nav_menu/Positions";
function RightBar() {
  return (
    <>
      <TopRight />
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/apps" element={<App />}></Route>
          <Route path="/funds" element={<Funds />}></Route>
          <Route path="/holdings" element={<Holdings />}></Route>
          <Route path="/positions" element={<Positions />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default RightBar;
