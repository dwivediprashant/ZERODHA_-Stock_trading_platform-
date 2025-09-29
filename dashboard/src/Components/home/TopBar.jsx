function TopBar() {
  return (
    <div
      className="row p-4 border-bottom border-secondary fw-semibold d-flex justify-content-between"
      style={{ fontSize: "12px" }}
    >
      <div className="col d-flex justify-content-around">
        <p>NIFTY 50</p>
        <p className="text-danger">{0.0}</p>
        <p>{0}</p>
      </div>
      <div className="col d-flex justify-content-around">
        <p>SENSEX</p>
        <p className="text-danger">{0.0}</p>
        <p>{0}</p>
      </div>
    </div>
  );
}

export default TopBar;
