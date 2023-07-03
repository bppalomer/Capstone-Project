/* eslint-disable no-unused-vars */


function Home() {



    return (
        <>
            <section id="hero-section" className="container-fluid">
                <div className="container ps-0 p-5 mt-5">
                    <div className="row">
                        <div className="col-md-7 my-auto mt-5 pt-5">
                            <h1 className="fw-bold ps-3 display-3 text-white text-start">
                                Curve - Pro Gaming Recruitment Platform
                            </h1>
                            <p className="fw-semibold ps-3 display-6 text-white">
                                Rise above the rest, unleash your greatness! Become who you dream to be.
                            </p>
                            <button className="p-3 ms-3">Get Started</button>
                        </div>
                    </div>
                    {/* <div id="wrapper" className="container">
                        
                        <br />
                        <br />
                        
                    </div> */}
                </div>
                
            </section>
            

            <div id="divider"></div>

            <section id="intro-section" className="container-fluid">
                <p className="container p-5 pb-0">
                    <h2 id="intro-text" className="fw-semibold text-center text-white text-start m-5 p-5">
                        <span className="fw-bold display-3">Level up your gaming career with Curve!</span>
                        <br />
                        Join a community of elite players and professional teams, and unleash
                        your potential in the world of competitive gaming. Get scouted, connect
                        with top teams, and embark on an exciting journey to success.
                    </h2>
                    <div className="mt-4">
                        <button className="p-3 fw-bold text-align-middle m-2 mt-0">BE A PRO</button>
                        <button className="p-3 fw-bold text-align-middle m-2 mt-0">HIRE A PRO</button>
                    </div>
                </p>
                <div className="container">
                    <h1 className="fw-bold display-4 text-white text-start mt-5 pt-5">Popular Top Games</h1>
                    <div className="container p-5">
                        <div className="row mb-5 pb-5">
                            <div className="marquee mb-5 pb-5">
                                <div className="marquee-content mb-5 pb-5">
                                    <div className="marquee-item" aria-hidden="true">
                                        <img src="/valorant-m1.png" alt="valorant" />
                                    </div>
                                    
                                    <div className="marquee-item">
                                        <img src="/LoL-m2.png" alt="LoL" />
                                    </div>

                                    <div className="marquee-item">
                                        <img src="/Dota2-m3.png" alt="Dota2" />
                                    </div>

                                    <div className="marquee-item">
                                        <img src="/CsGo-m4.png" alt="CsGo" />
                                    </div>

                                    <div className="marquee-item">
                                        <img src="/COD-m5.png" alt="COD warzone" />
                                    </div>

                                    <div className="marquee-item">
                                        <img src="/ML-m6.png" alt="Mobile Legends" />
                                    </div>

                                    <div className="marquee-item">
                                        <img src="/Fortnite-m7.png" alt="Fortnite" />
                                    </div>

                                    <div className="marquee-item">
                                        <img src="/Pubg-m8.png" alt="PubG" />
                                    </div>

                                    <div className="marquee-item">
                                        <img src="/WR-m9.png" alt="Wild Rift" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div id="divider2"></div>

            {/* How it works */}
            <section id="how-it-works" className="container-fluid p-5">
                <div className="container p-5 mx-auto text-center">
                    <h1 className="fw-bold display-4 text-white">How it works?</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div id="card-step" className="col-md-3 mx-auto text-center p-2">
                            <div className="container">
                                <i id="icons" className="fa-solid fa-user-plus text-white m-3"></i>
                            </div>
                            <h1 className="fw-bold text-white">Sign up & Create Your Profile</h1>
                            <div className="container">
                                <p className="text-white">Start by signing up on our platform and creating a detailed profile highlighting
                                    your gaming experience, skills, and achievements.</p>
                            </div>
                        </div>

                        <div id="card-step" className="col-md-3 mx-auto text-center p-2">
                            <div className="container">
                                <i id="icons" className="fa-solid fa-address-card text-white m-3"></i>
                            </div>
                            <h1 className="fw-bold text-white">Profile <br /> Evaluation</h1>
                            <div className="container">
                                <p className="text-white">Our team reviews your profile and evaluates your potential as a professional gamer,
                                    considering factors such as skill level, game proficiency, and teamwork abilities.</p>
                            </div>
                        </div>

                        <div id="card-step" className="col-md-3 mx-auto text-center p-2">
                            <div className="container">
                                <i id="icons" className="fa-solid fa-people-arrows text-white m-3"></i>
                            </div>
                            <h1 className="fw-bold text-white">Connecting Gamers with Recruiters</h1>
                            <div className="container">
                                <p className="text-white">We actively connect you with esports organizations and recruiters who are seeking
                                    talented gamers. We leverage our network to facilitate introductions and showcase your profile to decision-makers.</p>
                            </div>
                        </div>

                        <div id="card-step" className="col-md-3 mx-auto text-center p-2">
                            <div className="container">
                                <i id="icons" className="fa-solid fa-handshake-angle text-white m-3"></i>
                            </div>
                            <h1 className="fw-bold text-white">Support and Success</h1>
                            <div className="container">
                                <p className="text-white">Once connected, we provide ongoing support and guidance throughout the recruitment process.
                                    We celebrate your successes and assist you in navigating the journey to a successful pro gaming career.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Home;