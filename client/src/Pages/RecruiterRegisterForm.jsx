import { useState } from "react";

function RecruiterRegistrationForm() {

  const [teamname, setTeamname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [representativename, setRepresentativename] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/recruiters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        teamname,
        address,
        email,
        representativename,
        password
      }),
    });

    const data = await response.json();
    console.log(data);
  };
   
  return (
      <div className="justify-content-center d-flex mt-4">
    <form className="recruiter container text-light m-5 p-5 rounded border border-light" onSubmit={handleRegister}>
      <div className="text-center">
          <h1>Recruiter Form</h1>
      </div>
      <div className="mb-3">
        <label htmlFor="teamNameInput" className="form-label">
          Team Name
        </label>
        <input
          type="text"
          className="form-control"
          id="teamNameInput"
          value={teamname}
              onChange={(e) => setTeamname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressInput" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="addressInput"
          value={address}
              onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput" required
          value={email}
              onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="representativeInput" className="form-label">
          Represetative Name
        </label>
        <input
          type="text"
          className="form-control"
          id="representativeInput" required
          value={representativename}
              onChange={(e) => setRepresentativename(e.target.value)}
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
          id="passwordInput" required
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
          id="repasswordInput" required
          value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
        />
      </div>
      </div>
      <div className="justify-content-center d-flex mt-3">
      <button type="submit" className="btn btn-lg">Submit</button>
      </div>
      </form>
  </div>
  )
}

export default RecruiterRegistrationForm;