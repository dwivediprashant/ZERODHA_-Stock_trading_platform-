function Hero() {
  return (
    <div className="container my-5">
      <div className="row mb-3 d-flex justify-content-center">
        <img
          src="/media/images/homeimage.png"
          alt="Hero image"
          className="col-8"
        />
      </div>
      <div className="row text-center mt-5 d-flex flex-direction-column justify-content-center">
        <h3>Invest in everything</h3>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="btn btn-primary pe-4 ps-4 mt-4 fs-5 opacity-75"
          style={{ width: "max-content" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
