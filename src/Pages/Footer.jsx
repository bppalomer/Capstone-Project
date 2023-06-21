function Footer() {
  return (
    <>
      <footer className="container-fluid mx-auto mt-5 pt-5">
        <div className="row">
          <div className="col-md-4">
            <h1 className="text ms-5">Curve</h1>
            <p className="text mt-2 ms-3">
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

          <div className="col-md-1">
            <div className="support ms-2">
              <h2 className="fw-bold">Support</h2>
              <p>
                <a href="">
                  <small>How to Hire</small>
                </a>
              </p>
              <p>
                <a href="">
                  <small>Finding a Team</small>
                </a>
              </p>
              <p>
                <a href="">
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
                <div className="col-md-4">
                  <div>
                    <h2 className="fw-bold">Newsletter Signup</h2>
                    <input
                      type="text"
                      placeholder="Your Email Address"
                      className="mt-3"
                    ></input>
                    <button className="btn btn-primary fw-bold">Subscribe Now</button>
                    <p className="mt-3">
                      <small>
                        Get the latest update annd offer for business service yearly
                      </small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="text text-center mt-2">
                <p>© Copyright 2023 Curve. All Right Reserve</p>
              </div>
        </footer>
    </>
  );
}

export default Footer;
