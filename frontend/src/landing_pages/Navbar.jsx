import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom pt-3 pb-3 sticky-top row">
      <div className="container col-9">
        <Link
          className="navbar-brand d-flex justify-content-center align-items-center me-0"
          to="/"
        >
          <img
            src="/media/images/logo.svg"
            alt="Logo"
            height="18"
            className="d-inline-block align-text-top"
          />
        </Link>

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
            <Link className="nav-link me-3" to="/signup">
              Signup
            </Link>
            <Link className="nav-link me-3" to="/about">
              About
            </Link>
            <Link className="nav-link me-3" to="/products">
              Products
            </Link>
            <Link className="nav-link me-3" to="/pricing">
              Pricing
            </Link>
            <Link className="nav-link me-3" to="/support">
              Support
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
