function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom pt-3 pb-3 sticky-top row">
      <div className="container col-9">
        <a
          className="navbar-brand d-flex justify-content-center align-items-center me-0"
          href="#"
        >
          <img
            src="/media/images/logo.svg"
            alt="Logo"
            height="18"
            className="d-inline-block align-text-top"
          />
        </a>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link me-3" href="#">
              Signup
            </a>
            <a className="nav-link me-3" href="#">
              About
            </a>
            <a className="nav-link me-3" href="#">
              Products
            </a>
            <a className="nav-link me-3" href="#">
              Pricing
            </a>
            <a className="nav-link me-3" href="#">
              Support
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
