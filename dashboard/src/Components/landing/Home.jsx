import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
function HomePage() {
  return (
    <div
      className="row d-flex justify-content-around align-items-start pt-3"
      style={{ height: "100vh" }}
    >
      <div className="col-4">
        <LeftBar />
      </div>
      <div className="col-6 ">
        <RightBar />
      </div>
    </div>
  );
}

export default HomePage;
