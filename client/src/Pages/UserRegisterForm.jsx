// import { Link } from "react-router-dom";
// import { useState } from "react";

// const [firstName, setFirstname] = useState("");
// const [lastName, setLastName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [address, setaddress] = useState("");
// const [city, setCity] = useState("");
// const [state, setState] = useState("");
// const [zip, setZip] = useState("");
// const [birthdate, setBirthdate] = useState("");
// const [sex, setSex] = useState("");
// const [gamename, setGamename] = useState("");
// const [bio, setBio] = useState("");

// function UserRegisterForm() {
//   return (
//     <>
//       <div className="container p-5 mt-5">
//         <form
//           id="gamerform"
//           className="row g-3 text-white border rounded shadow p-5"
//         >
//           <div className="col-md-6">
//             <label for="inputFirstname" className="form-label">
//               {Firstname}
//             </label>
//             <input type="text" className="form-control" id="inputFirstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
//           </div>
//           <div className="col-md-6">
//             <label for="inputLastname" className="form-label">
//               Lastname
//             </label>
//             <input type="text" className="form-control" id="inputLastname" />
//           </div>

//           <div className="col-12">
//             <label for="inputEmail" className="form-label">
//               Email
//             </label>
//             <input type="text" className="form-control" id="inputEmail" />
//           </div>
//           <div className="col-12">
//             <label for="inputPassword" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="inputPassword"
//             />
//           </div>
//           <div className="col-12">
//             <label for="inputPassword" className="form-label">
//               Confirm Password
//             </label>
//             <input
//               type="confirm-password"
//               className="form-control"
//               id="inputPassword"
//             />
//           </div>
//           <div className="col-12">
//             <label for="inputPassword" className="form-label">
//               Address
//             </label>
//             <input
//               type="confirm-password"
//               className="form-control"
//               id="inputPassword"
//             />
//           </div>
//           <div className="col-md-6">
//             <label for="inputPassword" className="form-label">
//               City
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="inputPassword"
//             />
//           </div>
//           <div className="col-md-4">
//             <label for="inputState" className="form-label">
//               State
//             </label>
//             <select id="inputState" className="form-select">
//               <option selected>Choose...</option>
//               <option>...</option>
//             </select>
//           </div>
//           <div className="col-md-2">
//             <label for="inputZip" className="form-label">
//               Zip
//             </label>
//             <input type="text" className="form-control" id="inputZip" />
//           </div>
//           <div className="col-md-12">
//             <label for="inputBirthDate" className="form-label">
//               Birthdate
//             </label>
//             <input type="date" className="form-control" id="inputBirthDate" />
//           </div>
//           <div>
//             <h6>Sex</h6>
//           </div>
//           <div className="form-check  mt-0 ms-2">
//             <input
//               className="form-check-input"
//               type="radio"
//               name="sex"
//               id="sex"
//             />
//             <label className="form-check-label" for="sex">
//               Male
//             </label>
//           </div>
//           <div className="form-check mt-0 ms-2">
//             <input
//               className="form-check-input"
//               type="radio"
//               name="sex"
//               id="sex"
//             />
//             <label className="form-check-label" for="sex">
//               Female
//             </label>
//           </div>
//           <div className="mb-3">
//             <label for="inputGame" className="form-label">
//               Game Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="inputGame"
//               aria-describedby="gmHelp"
//             />
//             <div id="gmHelp" class="form-text text-light">
//               You can list up to 5 different games from mobile to pc.
//             </div>
//           </div>
//           <div className="mb-3">
//             <label for="bio" className="form-label">
//               Bio
//             </label>
//             <textarea
//               className="form-control"
//               id="bio"
//               placeholder="please fill this a short description of yourself"
//               rows="3"
//             ></textarea>
//           </div>
//           <div className="submit d-flex justify-content-center">
//             <button type="button" className="btn">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default UserRegisterForm;
