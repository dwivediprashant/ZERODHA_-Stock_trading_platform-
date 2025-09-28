function Row({ title, numbers }) {
  return (
    <div
      className="d-flex justify-content-between align-items-center p-1 fw-semisolid  mt-3"
      id="row"
    >
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{numbers}%</p>
      </div>
    </div>
  );
}

export default Row;
