import { useState } from "react";
import { Link } from "react-router-dom";

function Apply() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/users", {
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
  };
  return (
    <div className="justify-content-center d-flex mt-4">
      <form
        className="recruiter container text-light m-5 p-5 rounded border border-light"
        onSubmit={handleRegister}
      >
        <div className="text-center">
          <h1>Registration Form</h1>
        </div>
        <div className="d-flex justify-content-around mb-3 mt-5">
          <div className="form-check border border-light">
            <input
              className="form-check-input"
              type="radio"
              name="userType"
              id="candidateRadio"
              value="candidate"
            />
            <label className="form-check-label" htmlFor="candidateRadio">
              Candidate
            </label>
          </div>
          <div className="form-check border border-light">
            <input
              className="form-check-input"
              type="radio"
              name="userType"
              id="companyRadio"
              value="company"
            />
            <label className="form-check-label" htmlFor="companyRadio">
              Company
            </label>
          </div>
        </div>
        <div className="mb-3">
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
        <div className="mb-3">
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
        <div className="mb-3">
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
