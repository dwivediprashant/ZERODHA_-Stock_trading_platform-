function Education() {
  return (
    <div className="container  my-5 d-flex align-items-center">
      <div className="col-6">
        <img src="/media/images/index-education.svg" alt="" />
      </div>
      <div className="col-6 ">
        <h3>Free and open market education</h3>
        <p className="mt-3">
          Varsity, the largest online stock market education book in the world
          covering everything from the basics to advanced trading.
        </p>
        <a href="#" className="text-decoration-none mt-3 fw-semibold">
          Varsity
          <i className="fa-solid fa-arrow-right ms-2"></i>
        </a>
        <p className="mt-3">
          TradingQ&A, the most active trading and investment community in India
          for all your market related queries.
        </p>
        <a href="#" className="text-decoration-none mt-3 fw-semibold">
          TradingQ&A
          <i className="fa-solid fa-arrow-right ms-2"></i>
        </a>
      </div>
    </div>
  );
}

export default Education;
