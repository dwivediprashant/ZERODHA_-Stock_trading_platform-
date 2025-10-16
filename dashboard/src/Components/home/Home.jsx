import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import { useState } from "react";
function HomePage() {
  let [flash, setFlash] = useState(null);
  return (
    <div>
      {flash && (
        <div
          className={`alert ${
            flash.type == "success" ? "alert-success" : "alert-danger"
          } w-50`}
          role="alert"
          style={{
            position: "fixed",
            top: "10px",
            textAlign: "center",
            marginLeft: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {flash.message}
        </div>
      )}
      <div
        className="row d-flex justify-content-around align-items-start pt-3"
        style={{ height: "100vh" }}
      >
        <div className="col-4">
          <LeftBar setFlash={setFlash} />
        </div>
        <div className="col-6 ">
          <RightBar setFlash={setFlash} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
