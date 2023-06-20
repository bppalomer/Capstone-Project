function Footer() {
  return (
    <>
      <footer className="container-fluid mx-auto bg-light">
        <div className="row">
          <div className="col-md-4">
            <h1 className="ms-5">Curve</h1>
            <p className="mt-2 ms-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              dolorum placeat doloribus obcaecati ex earum numquam incidunt
              enim, neque, delectus perferendis! Labore eum, inventore nostrum
              ipsam corrupti repudiandae dignissimos minus!
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
              <h3>Support</h3>
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
          <div className="col-md-3">
            <div className="ms-4">
              <h3>Contact Us</h3>
              <strong>Location</strong>
              <p>Manila, Philippines</p>

              <strong>Phone Number</strong>
              <p>+639 - 776 - 8450</p>

              <strong>Join Us</strong>
              <p>support@curve.com</p>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h3>Newsletter Signup</h3>
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

        <div className="text-center mt-2">
          <p>© Copyright 2023 Curve. All Right Reserve</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
