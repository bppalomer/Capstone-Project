function RecruiterProfile() {


    return (
        <>
            <section>
                <div className="container d-flex justify-content-end text-white mt-3">
                    <p>Home | Profile | settings</p>
                </div>
                <div className="d-flex justify-content-center">
                <div className=" d-flex justify-content-center border rounded pt-5 pb-5 pe-5" id="recruiter-form" >
                    <div className="col-10">
                        <form className="">
                            <input type="text" className="form-control m-3" id="SearchInput" placeholder="Subject Name" />
                            <input type="text" className="form-control m-3" id="SearchInput" placeholder="Game Name" />
                            <input type="text" className="form-control m-3" id="SearchInput" placeholder="Team Name" />
                            <input type="text" className="form-control m-3" id="SearchInput" placeholder="Gaming Gig" />
                        </form>
                    </div>
                </div>
                </div>
                
                <div className="d-flex justify-content-center">
                    <button type="button" class="btn btn-dark">Post</button>
                </div>
                <div className="container d-flex justify-content-center">
                    <div className="recruiter-profile card mb-3 bg-info bg-opacity-10 text-white">
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="Recruitername">Recruiter Name</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-white">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-flex justify-content-center">
                    <div className="recruiter-profile card mb-3 bg-info bg-opacity-10 text-white">
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="Recruitername">Recruiter Name</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-white">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default RecruiterProfile;