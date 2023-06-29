import { useState } from "react";

function Admin() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <div className="container mt-5 p-5 border border-5 border-primary rounded my-auto">
            <div className="text-center m-5 p-5">
            <h1>Welcome to Dashboard</h1>
            </div>
            
            <div className="row">
              <div className="col-md-4 border border-5 border-primary rounded text-center">
                <div>
                  <h3>Number of Users</h3>
                </div>
                <div>
                  <h1>5</h1>
                </div>
              </div>
              <div className="col-md-4 border border-5 border-primary rounded text-center">
              <div>
                  <h3>Number of Recruiters</h3>
                </div>
                <div>
                  <h1>5</h1>
                </div>
              </div>
              <div className="col-md-4 border border-5 border-primary rounded text-center">
              <div>
                  <h3>Total</h3>
                </div>
                <div>
                  <h1>5</h1>
                </div>
              </div>
            </div>
          </div>
        );
      case "userEditor":
        return (
          <div>
            <div className="user_editor m-5 p-5 border border-5 border-primary rounded">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </div>

            <form className="m-5 p-5 border border-5 border-primary rounded">
              <div className="mb-3">
                <label for="firstname_ue" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email_ue" />
              </div>

              <div className="row">
                <div className="mb-3 col-md-6">
                  <label for="password_ue" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password_ue"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label for="repassword_ue" className="form-label">
                    Retype-Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="repassword_ue"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        );
      case "recruiterEditor":
        return (
          <div>
            <div className="user_editor m-5 p-5 border border-5 border-primary rounded">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </div>

            <form className="m-5 p-5 border border-5 border-primary rounded">
              <div className="mb-3">
                <label for="firstname_ue" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email_ue" />
              </div>

              <div className="row">
                <div className="mb-3 col-md-6">
                  <label for="password_ue" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password_ue"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label for="repassword_ue" className="form-label">
                    Retype-Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="repassword_ue"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        );
      case "settings":
        return (
          <div>
            <form className="m-5 p-5 border border-5 border-primary rounded">
              <div className="mb-3">
                <label for="firstname_ue" className="form-label">
                  Password
                </label>
                <input type="email" className="form-control" id="email_ue" />
              </div>

              <div className="mb-3">
                <label for="password_ue" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password_ue"
                />
              </div>
              <div className="mb-3">
                <label for="repassword_ue" className="form-label">
                  Retype-Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="repassword_ue"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        );
      case "logout":
        return (
          <div className="container d-flex justify-content-center align-items-center my-auto mt-5">
            <div className="alert alert-light border-5 border-primary rounded mt-5" role="alert">
              <h4>Warning</h4>
              <p>Are you sure you want to log out?</p>
              <div className="justify-content-center d-flex">
              <a class="btn btn-primary" href="#" role="button">Confirm</a>
              <a class="btn btn-primary ms-2" href="#" role="button">Cancel</a>
              </div>
              
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="d-flex flex-row">
        <div
          className="left-navbar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          id="admin_nav_bar"
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <img id="admin_img" src="/curve-logo.png" alt="" />
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${
                  currentPage === "dashboard" ? "active" : ""
                }`}
                onClick={() => handleNavClick("dashboard")}
              >
                <i className="fa-solid fa-house me-2"></i>
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link ${
                  currentPage === "userEditor" ? "active" : ""
                }`}
                onClick={() => handleNavClick("userEditor")}
              >
                <i className="fa-solid fa-user me-2"></i>
                User Editor
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link ${
                  currentPage === "recruiterEditor" ? "active" : ""
                }`}
                onClick={() => handleNavClick("recruiterEditor")}
              >
                <i className="fa-solid fa-users me-2"></i>
                Recruiter Editor
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link ${
                  currentPage === "settings" ? "active" : ""
                }`}
                onClick={() => handleNavClick("settings")}
              >
                <i className="fa-solid fa-gear me-2"></i>
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link ${
                  currentPage === "logout" ? "active" : ""
                }`}
                onClick={() => handleNavClick("logout")}
              >
                <i className="fas fa-sign-out-alt me-2"></i>
                Log out
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-grow-1 p-3 text-dark">{renderPage()}</div>
      </div>
    </>
  );
}

export default Admin;
