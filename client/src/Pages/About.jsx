/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <>
    <section id="hero-pages" className="container-fluid">
      <div id="about-wrapper" className="container ps-0 p-5">
        <h1 className="fw-bold display-3 text-white mt-5">ABOUT US</h1>
        <h4 className="text-white">COVER ALL ESPORTS & GAMER NEEDS</h4>
      </div>
    </section>

      <div className="container p-5">
        <h1 className="text-white text-center">Welcome to Curve!</h1>
        <div className="text-light m-5 p-5 border border-primary-subtle">
          <h1>Mission</h1>
          <p>To empower gamers and recruiters by providing a platform that seamlessly connects them, enabling the creation of highly skilled and successful gaming teams.</p>
        </div>
        <div className="text-light m-5 p-5 border border-primary-subtle">
          <h1>Vision</h1>
          <p>To be the leading platform that revolutionizes the way gamers and recruiters come
            together, fostering a dynamic and inclusive gaming community that drives excellence
            and innovation in esports and gaming talent recruitment.

            By connecting gamers and recruiters, Curve aims to bridge the gap and facilitate
            the formation of gaming teams that are not only skilled but also aligned in their
            goals and aspirations. This mission and vision statement highlights the company's
            commitment to enabling collaboration, nurturing talent, and driving the growth and
            advancement of the gaming industry.</p>
        </div>
      </div>
      <div className="text-light text-center m-5">
        <h1>Meet the Developers</h1>
      </div>

      <div className="row justify-content-center mt-3 mb-5">
        <div className="card col-md-3 about_card justify-content-center d-flex align-items-center m-1 shadow-lg">
          <img
            className="card-img-top about_img_card m-2 border-light rounded-circle"
            src="/bryan.png"
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">Bryan Paul Palomer</h5>
            <p className="card-text fw-bold">Back-End Developer</p>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-github m-3"></i>
            </a>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-linkedin m-3"></i>
            </a>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-facebook m-3"></i>
            </a>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-instagram m-3"></i>
            </a>
          </div>
        </div>
        <div className="card col-md-3 about_card justify-content-center d-flex align-items-center m-1 shadow-lg">
          <img
            className="card-img-top about_img_card m-2 border-light rounded-circle"
            src="/elie.png"
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">Eliezer Layug</h5>
            <p className="card-text fw-bold">Front-End Developer</p>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-github m-3"></i>
            </a>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-linkedin m-3"></i>
            </a>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-facebook m-3"></i>
            </a>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-instagram m-3"></i>
            </a>
          </div>
        </div>
        <div className="card col-md-3 about_card justify-content-center d-flex align-items-center m-1 shadow-lg">
          <img
            className="card-img-top about_img_card m-2 border-light rounded-circle"
            src="/patrick2.png"
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">Patrick Laguna</h5>
            <p className="card-text fw-bold">Front-End Developer</p>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-github m-3"></i>
            </a>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-linkedin m-3"></i>
            </a>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-facebook m-3"></i>
            </a>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-instagram m-3"></i>
            </a>
          </div>
        </div>
        <div className="card col-md-3 about_card justify-content-center d-flex align-items-center m-1 shadow-lg">
          <img
            className="card-img-top about_img_card m-2 border-light rounded-circle"
            src="/marj.png"
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">Marjorie Mainit</h5>
            <p className="card-text fw-bold">Back-End Developer</p>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-github m-3"></i>
            </a>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-linkedin m-3"></i>
            </a>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-facebook m-3"></i>
            </a>
            <a className="text-dark" href="">
              <i className="fa-brands about_logo fa-2x fa-instagram m-3"></i>
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default About;
