

function Recruiter() {
   
    return (
        <div className="justify-content-center d-flex mt-4">
      <form className="recruiter container text-light m-5 p-5 rounded border border-light">
        <div class="text-center">
            <h1>Recruiter Form</h1>
        </div>
        <div class="mb-3">
          <label for="teamNameInput" class="form-label">
            Team Name
          </label>
          <input
            type="text"
            class="form-control"
            id="teamNameInput"
          />
        </div>
        <div class="mb-3">
          <label for="addressInput" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="addressInput"
          />
        </div>
        <div class="mb-3">
          <label for="emailInput" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="emailInput" required
          />
        </div>
        <div class="mb-3">
          <label for="representativeInput" class="form-label">
            Represetative Name
          </label>
          <input
            type="text"
            class="form-control"
            id="representativeInput" required
          />
        </div>
        <div className="row">
        <div class="mb-3 col-md-6">
          <label for="passwordInput" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="passwordInput" required
          />
        </div>
        <div class="mb-3 col-md-6">
          <label for="repasswordInput" class="form-label">
            Re-Type Password
          </label>
          <input
            type="password"
            class="form-control"
            id="repasswordInput" required
          />
        </div>
        </div>
        <div className="justify-content-center d-flex mt-3">
        <button type="submit" class="btn btn-lg">Submit</button>
        </div>
        </form>
    </div>
    )
}

export default Recruiter;