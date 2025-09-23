function Founder() {
  return (
    <div className="container mt-5 pt-3">
      <div className="text-center fs-3 fw-semibold mt-5">
        <p>People</p>
      </div>
      <div className="card mb-3  bg-primary p-3 ">
        <div className="row">
          <div className="col text-center text-white">
            <img
              src="/media/images/nithin-kamath.jpg"
              className=" rounded-circle col-6"
              alt="logo"
            />
            <p className="fs-5  fw-semibold ">Nithin Kamath</p>
            <p className="fs-6">Founder, CEO</p>
          </div>
          <div className="col-6">
            <div className="card-body lh-lg">
              <p className="card-text text-white">
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                hurdles he faced during his decade long stint as a trader.
                Today, Zerodha has changed the landscape of the Indian broking
                industry. <br />
                He is a member of the SEBI Secondary Market Advisory Committee
                (SMAC) and the Market Data Advisory Committee (MDAC).
                <br /> Playing basketball is his zen.
              </p>
              <p className="bg-white text-center ">
                Connect on{" "}
                <a href="" className="text-decoration-none">
                  Homepage
                </a>{" "}
                /{" "}
                <a href="" className="text-decoration-none">
                  TradingQnA
                </a>{" "}
                /{" "}
                <a href="" className="text-decoration-none">
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founder;
