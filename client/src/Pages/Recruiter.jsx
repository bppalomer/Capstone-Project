

function Recruiter() {
   
    return (
        <>
        <form className="recruiter container">
            <div className="text-center mt-5">
                <h2>Team</h2>
                <input id="inpt" type="text" placeholder="Type Team" />
            </div>
            <div className="text-center mt-5">
                <h2>Company Address</h2>
                <input id="inpt" type="text" placeholder="Type Company Address"/>
            </div>
            <div className="text-center mt-5">
                <h2>Email</h2>
                <input id="inpt" type="text" placeholder="Type Email" />
            </div>
            <div className="text-center mt-5">
                <h2>Game Name</h2>
                <input id="inpt" type="text" placeholder="Type Game Name" />

                <div className="text-center mt-5">
                <h2>Job Description</h2>
                <textarea id="job" type="text"/>
            </div>
            </div>
            <div class="d-flex justify-content-center mt-4">
            <button class="btn btn-primary">Submit</button>
        </div>
        </form>
        </>
    )
}

export default Recruiter;