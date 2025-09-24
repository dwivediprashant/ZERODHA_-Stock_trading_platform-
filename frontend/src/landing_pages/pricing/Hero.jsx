function Hero() {
  return (
    <div className="container">
      <div className=" text-center my-5">
        <h3>Charges</h3>
        <p className="text-secondary fs-5 mt-2">
          List of all charges and taxes
        </p>
      </div>
      <div className="row d-flex justify-content-around text-center my-5 p-4">
        <div className="col-3">
          <img src="/media/images/pricing-eq.svg" alt="" />
          <h3 className=" opacity-75">Free equity delivery</h3>
          <p className=" opacity-75">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-3">
          <img src="/media/images/other-trades.svg" alt="" />
          <h3 className=" opacity-75">Intraday and F&O trades</h3>
          <p className=" opacity-75">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-3">
          <img src="/media/images/pricing-eq (1).svg" alt="" />
          <h3 className=" opacity-75">Free direct MF</h3>
          <p className=" opacity-75">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
