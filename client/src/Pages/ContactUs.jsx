/* eslint-disable react/no-unescaped-entities */
function ContactUs() {
  return (
    <>
      <section id="hero-pages" className="container-fluid">
        <div id="about-wrapper" className="container ps-0 p-5">
          <h1 className="fw-bold display-3 text-white mt-5">CONTACT US</h1>
          <h4 className="text-white">WE WILL ANSWER ALL YOUR QUESTIONS</h4>
        </div>
      </section>

      <section className="container ps-0 p-5">
        <div className="row">
          <div className="col-md-7">
            <h4 className="text-white fw-bold">LET'S GO UP</h4>
            <h1 className="text-white fw-bold">CONTACT US FOR INQUIRIES</h1>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-5 text-end">
              <input type="text" className="mb-3 p-4" placeholder="COMPLETE NAME.." />
              <br />
              <input type="text" className="p-4" placeholder="EMAIL ADDRESS.." />
            </div>
            <div className="col-md-7 text-start">
              <input id="msg" type="text" className="mb-3 p-4" placeholder="MESSAGE HERE.." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
