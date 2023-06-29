

function Apply() {

    return (
        <>
            <div className="container pt-5 pb-5 border rounded shadow" id="apply">
            <h1 className="text-white  d-flex justify-content-center mb-5">Join as a Recruiter or Gamer.</h1>
                <form className=" d-flex justify-content-center">
                        <div className="card border rounded shadow me-5">
                            <div className="card-body">
                                <h5 className="card-title">Join as Recruiter</h5>
                                <a className=" apply-btn text-dark">Join</a>
                            </div>
                        </div>
                        <div className="card border rounded shadow">
                            <div className="card-body">
                                <h5 className="card-title">Join as Gamer</h5>
                               <a className="apply-btn text-dark" href="/Gamerform">Join</a>
                            </div>
                        </div>
                </form>
            </div>
        </>
    )
}

export default Apply;