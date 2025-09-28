function dashboard() {
  return (
    <div>
      <p className="fs-2 p-4 border-bottom border-secondary ">Hi user!</p>
      <div className=" mt-3 p-2 bg-primary text-white">
        <p>
          <i class="fa-solid fa-clock"></i> Equity
        </p>
        <div className="row p-3 ">
          <div className="col border-end border-white fs-4 ">
            <p className="fs-2">{3.74}k</p>
            <p className="fs-6">Margin available</p>
          </div>
          <div className="col">
            <p>Months used 0</p>
            <p>Opening balance 3.74k</p>
          </div>
        </div>
      </div>
      <div className=" mt-3 p-2 bg-primary text-white">
        <p>
          <i class="fa-solid fa-calendar"></i> Holdings(13)
        </p>
        <div className="row p-3 ">
          <div className="col border-end border-white fs-4">
            <p>
              <span className="fs-2">{1.55}k</span>{" "}
              <span className="fs-6">+5.33%</span>
            </p>
            <p className="fs-6">P&L</p>
          </div>
          <div className="col">
            <p>Current value 0</p>
            <p>Investment 3.74k</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
