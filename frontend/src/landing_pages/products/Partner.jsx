function Partner({ src, description }) {
  return (
    <div className="col-4 d-flex flex-column align-items-center justify-content-center">
      <img src={src} alt="image-partner" width="220px" />
      <p
        style={{ overflowWrap: "anywhere", width: "300px", fontSize: "12px" }}
        className="text-muted fw-semibold mt-3 "
      >
        {description}
      </p>
    </div>
  );
}

export default Partner;
