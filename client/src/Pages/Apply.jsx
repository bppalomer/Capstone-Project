import { useState } from "react";


function Apply() {
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

    const response = await fetch ('http://127.0.0.1:8000/api/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
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
            bio
        })
    })

    const data = await response.json();
    console.log (data);
}
  return (
    <>
      <div className="container p-5 mt-5">
        <form
          id="gamerform"
          className="row g-3 text-white border rounded shadow p-5"
          onSubmit={handleRegister}
        >
          <div className="col-md-6">
            <label htmlFor="inputFirstname" className="form-label fw-bold" required>
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
            <label htmlFor="inputLastname" className="form-label fw-bold" required>
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
            <label htmlFor="inputPassword" className="form-label fw-bold" required>
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
            <label htmlFor="inputAddress" className="form-label fw-bold" required>
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
              <option>Abra</option>
              <option>Agusan del Norte</option>
              <option>Agusan del Sur</option>
              <option>Aklan</option>
              <option>Albay</option>
              <option>Antique</option>
              <option>Apayao</option>
              <option>Aurora</option>
              <option>Basilan</option>
              <option>Bataan</option>
              <option>Batanes</option>
              <option>Batangas</option>
              <option>Biliran</option>
              <option>Benguet</option>
              <option>Bohol</option>
              <option>Bukidnon</option>
              <option>Bulacan</option>
              <option>Cagayan</option>
              <option>Camarines Norte</option>
              <option>Camarines Sur</option>
              <option>Camiguin</option>
              <option>Capiz</option>
              <option>Catanduanes</option>
              <option>Cavite</option>
              <option>Cebu</option>
              <option>Compostela</option>
              <option>Davao del Norte</option>
              <option>Davao del Sur</option>
              <option>Davao Oriental</option>
              <option>Eastern Samar</option>
              <option>Guimaras</option>
              <option>Ifugao</option>
              <option>Ilocos Norte</option>
              <option>Ilocos Sur</option>
              <option>Iloilo</option>
              <option>Isabela</option>
              <option>Kalinga</option>
              <option>Laguna</option>
              <option>Lanao del Norte</option>
              <option>Lanao del Sur</option>
              <option>La Union</option>
              <option>Leyte</option>
              <option>Maguindanao</option>
              <option>Marinduque</option>
              <option>Masbate</option>
              <option>Metro Manila</option>
              <option>Mindoro Occidental</option>
              <option>Mindoro Oriental</option>
              <option>Misamis Occidental</option>
              <option>Misamis Oriental</option>
              <option>Mountain Province</option>
              <option>Negros Occidental</option>
              <option>Negros Oriental</option>
              <option>North Cotabato</option>
              <option>Northern Samar</option>
              <option>Nueva Ecija</option>
              <option>Nueva Vizcaya</option>
              <option>Palawan</option>
              <option>Pampanga</option>
              <option>Pangasinan</option>
              <option>Quezon</option>
              <option>Quirino</option>
              <option>Rizal</option>
              <option>Romblon</option>
              <option>Samar</option>
              <option>Sarangani</option>
              <option>Siquijor</option>
              <option>Sorsogon</option>
              <option>South Cotabato</option>
              <option>Southern Leyte</option>
              <option>Sultan Kudarat</option>
              <option>Sulu</option>
              <option>Surigao del Norte</option>
              <option>Surigao del Sur</option>
              <option>Tarlac</option>
              <option>Tawi-Tawi</option>
              <option>Zambales</option>
              <option>Zamboanga del Norte</option>
              <option>Zamboanga del Sur</option>
              <option>Zamboanga Sibugay</option>
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
            <label htmlFor="inputBirthDate" className="form-label fw-bold" required>
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
              <option>Male</option>
              <option>Female</option>
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

export default Apply;
