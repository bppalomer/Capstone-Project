import { useState, useEffect } from "react";

function Apply() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  useEffect(() => {
    if (passwordError) {
      const timeout = setTimeout(() => {
        setPasswordError("");
      }, 3000);

      return () => clearTimeout(timeout);
    }

    if (registrationSuccess) {
      const timeout = setTimeout(() => {
        window.location.href = "/Login";
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [passwordError, registrationSuccess]);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password === repassword) {
      let url = "http://127.0.0.1:8000/api/users";

      const userTypeRadio = document.querySelector(
        'input[name="userType"]:checked'
      );
      if (userTypeRadio && userTypeRadio.value === "recruiters") {
        url = "http://127.0.0.1:8000/api/recruiters";
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          username,
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
      setRegistrationSuccess(true);
    } else {
      setPasswordError("Passwords do not match");
    }
  };
  return (
    <div className="justify-content-center d-flex m-4">
      <form
        className="recruiter container text-light m-5 p-5 rounded border border-light"
        onSubmit={handleRegister}
      >
        <div className="text-center">
          <h1>Registration Form</h1>
        </div>
        <p className="mt-4">Account Type</p>
        <div className="row g-1 mb-3 mt-2">
          <div className="col-md-6 form-check border border-light rounded registration_radio">
            <div className="ms-3">
              <input
                className="form-check-input"
                type="radio"
                name="userType"
                id="userRadio"
                value="user"
              />
              <label className="form-check-label" htmlFor="userRadio">
                Candidate
              </label>
            </div>
          </div>
          <div className="col-md-6 form-check border border-light rounded registration_radio">
            <div className="ms-3">
              <input
                className="form-check-input"
                type="radio"
                name="userType"
                id="recruitersRadio"
                value="recruiters"
              />
              <label className="form-check-label" htmlFor="recruitersRadio">
                Company
              </label>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="firstNameInput" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstNameInput"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="lastNameInput" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastNameInput"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        </div>
        
        
        <div className="mb-3">
          <label htmlFor="usernameInput" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="usernameInput"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="row">
          <div className="mb-3 col-md-6">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="repasswordInput" className="form-label">
              Re-Type Password
            </label>
            <input
              type="password"
              className="form-control"
              id="repasswordInput"
              required
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />
          </div>
        </div>
        {passwordError && (
          <div className="alert alert-danger">{passwordError}</div>
        )}
        {registrationSuccess && (
          <div className="alert alert-success">
            The account is successfully registered. Redirecting to the log in
            page...
          </div>
        )}
        <div className="justify-content-center d-flex mt-3">
          <button type="submit" className="btn btn-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Apply;
