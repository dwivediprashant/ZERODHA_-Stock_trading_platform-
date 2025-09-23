import PartnerTab from "./PartnerTab";

function Partners() {
  return (
    <div className="container text-center ">
      <div className="fw-semibold text-center text-muted">
        <p className="fs-3 ">The Zerodha Universe</p>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="d-flex justify-content-center ">
        <PartnerTab />
      </div>
      <div className="text-center">
        <button className="btn btn-primary mt-4 ps-4 pe-4 fs-5 ">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Partners;
