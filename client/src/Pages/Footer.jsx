function Footer() {
  return (
    <>
      <footer className="container-fluid mx-auto mt-5 p-5 text-white">
        <div className="row">
          <div className="col-md-3">
            <h1 className="text-start"><img className="logo-footer" src="/curve-logo.png" alt="logo" /></h1>
            <p className="mt-2">
              Join our vibrant community today and unlock a world of opportunities as we reshape the future of gaming talent recruitment.
              Get ready to level up your gaming career with Curve!
            </p>

            <div className="icon ms-4 p-2">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-discord"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>

          <div className="col-md-2">
            <div className="support ms-2">
              <h2 className="fw-bold">Support Us</h2>
              <p>
                <a href="#">
                  <small>How to Hire</small>
                </a>
              </p>
              <p>
                <a href="#">
                  <small>Finding a Team</small>
                </a>
              </p>
              <p>
                <a href="#">
                  <small>FAQs</small>
                </a>
              </p>
              <p>
                <a href="">
                  <small>Privacy Policy</small>
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="ms-4">
              <h2 className="fw-bold">Contact Us</h2>

              <strong>Location</strong>
              <p>Manila, Philippines</p>

              <strong>Phone Number</strong>
              <p>+639 - 776 - 8450</p>

              <strong>Join Us</strong>
              <p>support@curve.com</p>
            </div>
          </div>
          <div className="col-md-3 pe-5 float-start">
            <div>
              <h2 className="fw-bold">Newsletter Signup</h2>
              <input
                type="text"
                placeholder="Email Address.."
                className="mt-3 form-control"
              ></input>
              <button className="btn btn-primary fw-bold mt-3 ms-0">Subscribe Now</button>
              <p className="mt-3">
                <small>
                  Get the latest update and offer for business service yearly
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid text-start align-text-start mt-5 pt-5 float-bottom">
          <p>© Copyright 2023 Curve. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
