import { useState } from "react";
import { Link } from "react-router-dom";

function TopRight() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom bottom-light p-3 row">
      <div className="col-2 ">
        <img
          src="/media/images/kite.png"
          alt="logo"
          width="40px"
          height="40px"
        />
      </div>
      <div className="d-flex justify-content-between align-items-center col-10">
        <div>
          <Link
            to="/"
            onClick={() => handleMenuClick(0)}
            className={selectedMenu === 0 ? "active-menu" : "menu"}
          >
            Dashboard
          </Link>
        </div>
        <div>
          <Link
            to="/orders"
            onClick={() => handleMenuClick(1)}
            className={selectedMenu === 1 ? "active-menu" : "menu"}
          >
            Orders
          </Link>
        </div>
        <div>
          <Link
            to="/holdings"
            onClick={() => handleMenuClick(2)}
            className={selectedMenu === 2 ? "active-menu" : "menu"}
          >
            Holdings
          </Link>
        </div>
        <div>
          <Link
            to="/markettrends"
            onClick={() => handleMenuClick(3)}
            className={selectedMenu === 3 ? "active-menu" : "menu"}
          >
            Market trends
          </Link>
        </div>
        <div>
          <Link
            to="/funds"
            onClick={() => handleMenuClick(4)}
            className={selectedMenu === 4 ? "active-menu" : "menu"}
          >
            Funds
          </Link>
        </div>
        <div>
          <Link
            to="/apps"
            onClick={() => handleMenuClick(5)}
            className={selectedMenu === 5 ? "active-menu" : "menu"}
          >
            Apps
          </Link>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-sm btn-primary rounded-circle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-user"></i>
          </button>

          <ul className="dropdown-menu text-center p-2">
            <li>
              <Link
                to="/portfolio"
                onClick={() => handleMenuClick(6)}
                className={`dropdown-item ${
                  selectedMenu === 6 ? "active-menu" : ""
                }`}
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                to="/logout"
                onClick={() => handleMenuClick(7)}
                className={`dropdown-item ${
                  selectedMenu === 7 ? "active-menu" : ""
                }`}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopRight;
