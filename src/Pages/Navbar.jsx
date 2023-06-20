import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const find = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ms-4 me-4">
          <div className="navbar-left">

            <Link className="navbar-brand" to="/">Curve</Link>
            
          </div>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
            
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-center">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/" className={`nav-link ${(find.pathname === `/`) ? `fw-bold active` : ``}`}>Home</Link>
              </li>
              <li className="nav-item">
              <Link to="/About" className={`nav-link ${(find.pathname === `/About`) ? `fw-bold active` : ``}`}>About</Link>
              </li>
              <li className="nav-item dropdown">
              <Link to="/Apply" className={`nav-link ${(find.pathname === `/Apply`) ? `fw-bold active` : ``}`}>Apply</Link>
              </li>
              <li className="nav-item">
              <Link to="/ContactUs" className={`nav-link ${(find.pathname === `/ContactUs`) ? `fw-bold active` : ``}`}>ContactUs</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-right justify-content-center d-flex">
            <button
              className="navbar-btn ps-4 pe-4 pt-2 pb-2 me-3"
              type="submit"
            >
              Log-In
            </button>
            <button className="navbar-btn ps-3 pe-3 pt-2 pb-2" type="submit">
              Register
            </button>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
