function Pricing() {
  return (
    <div className="container  d-flex justify-content-center mt-5">
      <div className="col-4  ">
        <h4>Unbeatable pricing</h4>
        <p className="mt-4">
          We pioneered the concept of discount broking and price transparency in
          India. Flat fees and no hidden charges.
        </p>
        <a href="#" className="text-decoration-none fw-semibold ">
          See pricing <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="col-6 d-flex justify-content-center">
        <div className="d-flex">
          <img src="/media/images/pricing-eq.svg" alt="" className="col-8" />
        </div>
        <div className="d-flex">
          <img
            src="/media/images/pricing-eq (1).svg"
            alt=""
            className="col-8"
          />
        </div>
        <div className="d-flex">
          <img src="/media/images/other-trades.svg" alt="" className="col-8" />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
