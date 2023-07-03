import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user'); // Default user type is 'user'

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          userType, // Include the selected user type in the request body
        }),
      });

      const data = await response.json();
      localStorage.setItem('token', data.token);

      if (userType === 'user') {
        window.location.href = "/User";
      } else if (userType === 'recruiter') {
        window.location.href = "/Recruiter";
      }
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <>
      <form className="container" onSubmit={handleLogin}>
        <div className="rounded" id="LogIn_Form">
          <div className="text-light m-3 text-center">
            <h1>Log In Form</h1>
          </div>
          <div className="m-3">
            <label htmlFor="input_email" className="mb-3 text-light">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="input_email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="m-3">
            <label htmlFor="input_password" className="form-label text-light">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="input_password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="row g-1 mb-3 mt-5">
            <div className="col-md-6 form-check justify-content-center text-center d-flex login_radio">
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="userType"
                  id="userRadio"
                  value="user"
                  checked={userType === 'user'} // Set the checked state based on the selected user type
                  onChange={() => setUserType('user')} // Update the user type when selected
                />
                <label className="form-check-label text-light" htmlFor="userRadio">
                  User
                </label>
              </div>
            </div>
            <div className="col-md-6 form-check justify-content-center text-center d-flex login_radio">
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="userType"
                  id="recruiterRadio"
                  value="recruiter"
                  checked={userType === 'recruiter'} // Set the checked state based on the selected user type
                  onChange={() => setUserType('recruiter')} // Update the user type when selected
                />
                <label className="form-check-label text-light" htmlFor="recruiterRadio">
                  Recruiter
                </label>
              </div>
            </div>
          </div>

          <div className="justify-content-center d-flex">
            <button type="submit" className="btn btn-primary btn-lg">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
