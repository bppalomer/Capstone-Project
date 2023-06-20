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
          <div className="navbar-right">
            <button className="btn btn-outline-light me-3" type="submit">
              Log-In
            </button>
            <button className="btn btn-outline-light" type="submit">
              Register
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
