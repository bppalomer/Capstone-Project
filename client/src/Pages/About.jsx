import { useState } from "react";

const About = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttonData = {
    developer: <div className="d-flex">
<div className="card about_card justify-content-center d-flex align-items-center m-4">
  <img className="card-img-top about_img_card m-2" src="/bryan.png" alt="Card image cap" />
  <div className="card-body text-center">
    <h5 className="card-title fw-bold">Bryan Paul Palomer</h5>
    <p className="card-text fw-bold">Back-End Developer</p>
    <a class="text-dark" href=""><i class="fa-brands fa-github m-3"></i></a>
    <a class="text-dark" href=""><i class="fa-brands fa-linkedin m-3"></i></a>
    <a class="text-dark" href=""><i class="fa-brands fa-facebook m-3"></i></a>
    <a class="text-dark" href=""><i class="fa-brands fa-instagram m-3"></i></a>
  </div>
</div>
<div className="card about_card justify-content-center d-flex align-items-center m-4">
  <img className="card-img-top about_img_card m-2" src="/bryan.png" alt="Card image cap" />
  <div className="card-body text-center">
    <h5 className="card-title fw-bold">Bryan Paul Palomer</h5>
    <p className="card-text fw-bold">Back-End Developer</p>
    <a class="text-dark" href=""><i class="fa-brands fa-github m-3"></i></a>
    <a class="text-dark" href=""><i class="fa-brands fa-linkedin m-3"></i></a>
    <a class="text-dark" href=""><i class="fa-brands fa-facebook m-3"></i></a>
    <a class="text-dark" href=""><i class="fa-brands fa-instagram m-3"></i></a>
  </div>
</div>
<div className="card about_card justify-content-center d-flex align-items-center m-4">
  <img className="card-img-top about_img_card m-2" src="/bryan.png" alt="Card image cap" />
  <div className="card-body text-center">
    <h5 className="card-title fw-bold">Bryan Paul Palomer</h5>
    <p className="card-text fw-bold">Back-End Developer</p>
    <a class="text-dark" href=""><i class="fa-brands fa-github m-3"></i></a>
    <a class="text-dark" href=""><i class="fa-brands fa-linkedin m-3"></i></a>
    <a class="text-dark" href=""><i class="fa-brands fa-facebook m-3"></i></a>
    <a class="text-dark" href=""><i class="fa-brands fa-instagram m-3"></i></a>
  </div>
</div>
<div className="card about_card justify-content-center d-flex align-items-center m-4">
  <img className="card-img-top about_img_card m-2" src="/bryan.png" alt="Card image cap" />
  <div className="card-body text-center">
    <h5 className="card-title fw-bold">Bryan Paul Palomer</h5>
    <p className="card-text fw-bold">Back-End Developer</p>
    <a class="text-dark" href=""><i class="fa-brands fa-github m-3"></i></a>
    <a class="text-dark" href=""><i class="fa-brands fa-linkedin m-3"></i></a>
    <a class="text-dark" href=""><i class="fa-brands fa-facebook m-3"></i></a>
    <a class="text-dark" href=""><i class="fa-brands fa-instagram m-3"></i></a>
  </div>
</div>



    </div>,
    faqs: <div>This is button 2</div>,
    privacy_policy: <div>This is button 3</div>,
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <>
      <div className="container d-flex justify-content-center m-5 mx-auto">
        <div>
          <button
            onClick={() => handleButtonClick("developer")}
            className="rounded m-2 about_btn"
          >
            Developers
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("faqs")} className="rounded m-2 about_btn">
            FAQ's
          </button>
        </div>
        <div>
          <button
            onClick={() => handleButtonClick("privacy_policy")}
            className="rounded m-2 about_btn"
          >
            Privacy Policy
          </button>
        </div>
      </div>
      <div className="justify-content-center mx-auto d-flex">
        {selectedButton && (
          <div className="text-light">{buttonData[selectedButton]}</div>
        )}
      </div>
    </>
  );
};

export default About;
