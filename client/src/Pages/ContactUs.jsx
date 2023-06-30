function ContactUs() {
  return (
    <>
      <section id="hero-pages" className="container-fluid">
        <div id="about-wrapper" className="container ps-0 p-5">
          <h1 className="fw-bold display-3 text-white mt-5">CONTACT US</h1>
          <h4 className="text-white">WE WILL ANSWER ALL YOUR QUESTIONS</h4>
        </div>
      </section>
      <section className="contactUs d-flex">
        <div className="container mt-5 ">
          <h3 className="text-white">Get in Touch!</h3>
          <a className="header-text">Have Question Feel Free<br /> to Contact Us? </a>
          <form className="row" id="contactform">
            <div className="col-12">
              <input type="text" className="form-control" id="input" placeholder="Name" />
            </div>
            <div className="col-md-6 mt-3">
              <input type="text" className="form-control" id="input" placeholder="Email" />
            </div>
            <div className="col-md-6 mt-3">
              <input type="text" className="form-control" id="input" placeholder="Interested" />
            </div>
            <div className="mb-3 mt-3">
              <textarea className="form-control" id="Message" placeholder="Your Message" rows="3"></textarea>
            </div>
            <div>
            <button type="button" class="btn btn-dark">Submit</button>
            </div>
          </form>
        </div>
        <div className="info-box container d-flex ">
          <div className="col-12">
            <div className="text white">
              <h2 className="sec-subtitle2">Contact Information</h2>
              <div className="media-style1 border shadow-light">
                <div className="media-body">
                  <span className="media-title">CALL US DIRECTLY AT</span>
                  <p>+353 1 512 4410</p>
                </div>
              </div>
              <div className="media-style1 border shadow-light">
                <div>
                  <span>HAVE QUESTION?</span>
                  <p>curve@domain.com</p>
                </div>
              </div>
              <div className="media-style1 border shadow-light">
                <div className="media-body">
                  <span className="media-title">FIND LOCATION</span>
                  <p className="media-info">New street 24 town/ sports area united state</p>
                </div>
              </div>
              <div className="social-style1 mt-3">
                <a href="#"><i className="fab fa-facebook-f m-1"></i></a>
                <a href="#"><i className="fab fa-twitter m-1"></i></a>
                <a href="#"><i className="fab fa-linkedin-in m-1"></i></a>
                <a href="#"><i className="fab fa-google m-1"></i></a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default ContactUs;
