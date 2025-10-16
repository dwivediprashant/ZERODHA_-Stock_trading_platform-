function Founder() {
  return (
    <div className="container mt-5 pt-3">
      <div className="text-center fs-3 fw-semibold mt-5">
        <p>People</p>
      </div>
      <div className="card mb-3  bg-primary d-flex justify-content-center align-items-center ">
        <div className="row">
          <div className="col text-center text-white">
            <img
              src="/media/images/prashant.png"
              className=" col-6"
              alt="logo"
            />
            <p className="fs-5  fw-semibold ">Prashant</p>
            <p className="fs-6">MERN Dev</p>
          </div>
          <div className="col-6 d-flex">
            <div className="card-body lh-lg  d-flex flex-column justify-content-center">
              <p className="card-text text-white">
                Passionate AIML Student & MERN Full Stack Developer. I architect
                and implement solutions using Machine Learning, Artificial
                Intelligence, and modern Web technologies.
                <br />
                I continuously expand my expertise by developing real-world
                projects, excelling in hackathons, and contributing through
                internships.
                <br /> Playing chess is his zen.
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
