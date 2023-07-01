import { useState } from "react";
import { Link } from "react-router-dom";

function UserRegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zip, setZip] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [sex, setSex] = useState("");
  const [gamename, setGamename] = useState("");
  const [bio, setBio] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        address,
        city,
        province,
        zip,
        birthdate,
        sex,
        gamename,
        bio,
      }),
    });

    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <div className="container p-5 mt-5">
        <form
          id="gamerform"
          className="row g-3 text-white border rounded shadow p-5"
          onSubmit={handleRegister}
        >
          <div className="col-md-6">
            <label
              htmlFor="inputFirstname"
              className="form-label fw-bold"
              required
            >
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              id="inputFirstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label
              htmlFor="inputLastname"
              className="form-label fw-bold"
              required
            >
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              id="inputLastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail" className="form-label fw-bold" required>
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label
              htmlFor="inputPassword"
              className="form-label fw-bold"
              required
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="repassword" className="form-label fw-bold" required>
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="repassword"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label
              htmlFor="inputAddress"
              className="form-label fw-bold"
              required
            >
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label fw-bold" required>
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label fw-bold" required>
              Province
            </label>
            <select
              id="inputState"
              className="form-select"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              <option selected>Choose...</option>
              <option value="Abra">Abra</option>
              <option value="Agusan del Norte">Agusan del Norte</option>
              <option value="Agusan del Sur">Agusan del Sur</option>
              <option value="Aklan">Aklan</option>
              <option value="Albay">Albay</option>
              <option value="Antique">Antique</option>
              <option value="Apayao">Apayao</option>
              <option value="Aurora">Aurora</option>
              <option value="Basilan">Basilan</option>
              <option value="Bataan">Bataan</option>
              <option value="Batanes">Batanes</option>
              <option value="Batangas">Batangas</option>
              <option value="Biliran">Biliran</option>
              <option value="Benguet">Benguet</option>
              <option value="Bohol">Bohol</option>
              <option value="Bukidnon">Bukidnon</option>
              <option value="Bulacan">Bulacan</option>
              <option value="Cagayan">Cagayan</option>
              <option value="Camarines Norte">Camarines Norte</option>
              <option value="Camarines Sur">Camarines Sur</option>
              <option value="Camiguin">Camiguin</option>
              <option value="Capiz">Capiz</option>
              <option value="Catanduanes">Catanduanes</option>
              <option value="Cavite">Cavite</option>
              <option value="Cebu">Cebu</option>
              <option value="Compostela">Compostela</option>
              <option value="Davao del Norte">Davao del Norte</option>
              <option value="Davao del Sur">Davao del Sur</option>
              <option value="Davao Oriental">Davao Oriental</option>
              <option value="Eastern Samar">Eastern Samar</option>
              <option value="Guimaras">Guimaras</option>
              <option value="Ifugao">Ifugao</option>
              <option value="Ilocos Norte">Ilocos Norte</option>
              <option value="Ilocos Sur">Ilocos Sur</option>
              <option value="Iloilo">Iloilo</option>
              <option value="Isabela">Isabela</option>
              <option value="Kalinga">Kalinga</option>
              <option value="Laguna">Laguna</option>
              <option value="Lanao del Norte">Lanao del Norte</option>
              <option value="Lanao del Sur">Lanao del Sur</option>
              <option value="La Union">La Union</option>
              <option value="Leyte">Leyte</option>
              <option value="Maguindanao">Maguindanao</option>
              <option value="Marinduque">Marinduque</option>
              <option value="Masbate">Masbate</option>
              <option value="Mindoro Occidental">Mindoro Occidental</option>
              <option value="Mindoro Oriental">Mindoro Oriental</option>
              <option value="Misamis Occidental">Misamis Occidental</option>
              <option value="Misamis Oriental">Misamis Oriental</option>
              <option value="Mountain Province">Mountain Province</option>
              <option value="Negros Occidental">Negros Occidental</option>
              <option value="Negros Oriental">Negros Oriental</option>
              <option value="North Cotabato">North Cotabato</option>
              <option value="Northern Samar">Northern Samar</option>
              <option value="Nueva Ecija">Nueva Ecija</option>
              <option value="Nueva Vizcaya">Nueva Vizcaya</option>
              <option value="Palawan">Palawan</option>
              <option value="Pampanga">Pampanga</option>
              <option value="Pangasinan">Pangasinan</option>
              <option value="Quezon">Quezon</option>
              <option value="Quirino">Quirino</option>
              <option value="Rizal">Rizal</option>
              <option value="Romblon">Romblon</option>
              <option value="Samar">Samar</option>
              <option value="Sarangani">Sarangani</option>
              <option value="Siquijor">Siquijor</option>
              <option value="Sorsogon">Sorsogon</option>
              <option value="South Cotabato">South Cotabato</option>
              <option value="Southern Leyte">Southern Leyte</option>
              <option value="Sultan Kudarat">Sultan Kudarat</option>
              <option value="Sulu">Sulu</option>
              <option value="Surigao del Norte">Surigao del Norte</option>
              <option value="Surigao del Sur">Surigao del Sur</option>
              <option value="Tarlac">Tarlac</option>
              <option value="Tawi-Tawi">Tawi-Tawi</option>
              <option value="Zambales">Zambales</option>
              <option value="Zamboanga del Norte">Zamboanga del Norte</option>
              <option value="Zamboanga del Sur">Zamboanga del Sur</option>
              <option value="Zamboanga Sibugay">Zamboanga Sibugay</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label fw-bold" required>
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label
              htmlFor="inputBirthDate"
              className="form-label fw-bold"
              required
            >
              Birthdate
            </label>
            <input
              type="date"
              className="form-control"
              id="inputBirthDate"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputSex" className="form-label fw-bold" required>
              Sex
            </label>
            <select
              id="inputSex"
              className="form-select"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <option selected>Choose...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="inputGame" className="form-label fw-bold" required>
              Game Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputGame"
              aria-describedby="gmHelp"
              value={gamename}
              onChange={(e) => setGamename(e.target.value)}
            />
            <div id="gmHelp" className="form-text text-light">
              You can list up to 5 different games from mobile to pc.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="bio" className="form-label fw-bold" required>
              Bio
            </label>
            <textarea
              className="form-control"
              id="bio"
              placeholder="please fill this a short description of yourself"
              rows="3"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
          <div className="submit d-flex justify-content-center">
            <button type="submit" className="btn btn-lg fw-bold" required>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserRegistrationForm;
