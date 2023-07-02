import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const find = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top shadow-lg p-4">
        <div className="container text-center">
          <div className="navbar-left">
            <Link className="navbar-brand" to="/">
              <img className="logo" src="/curve-logo.png" alt="logo" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link ${
                      find.pathname === "/" ? `fw-bold active` : ``
                    }`}
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/About"
                    className={`nav-link ${
                      find.pathname === "/About" ? `fw-bold active` : ``
                    }`}
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/Apply"
                    className={`nav-link ${
                      find.pathname === "/Apply" ? `fw-bold active` : ``
                    }`}
                  >
                    APPLY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/ContactUs"
                    className={`nav-link ${
                      find.pathname === "/ContactUs" ? `fw-bold active` : ``
                    }`}
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-right justify-content-center d-flex">
              <Link
                to="/Login"
                className={`nav-link ${
                  find.pathname === "/Login" ? `fw-bold active` : ``
                }`}
              >
                <button className="navbar-btn ps-4 pe-4 pt-2 pb-2 me-3 rounded" type="submit">
                  Log-In
                </button>
              </Link>
              <Link
                to="/Apply"
                className={`nav-link ${
                  find.pathname === "/Apply" ? `fw-bold active` : ``
                }`}
              >
                <button className="navbar-btn ps-3 pe-3 pt-2 pb-2 rounded" type="submit">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
