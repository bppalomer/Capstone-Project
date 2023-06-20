

function Footer() {
    return (
        <>
            <footer class="container-fluid mx-auto">
        <div class="row">
            <div class="col-md-4">
                <h1 class="ms-5">Curve</h1>
                <p class="mt-2 ms-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere dolorum placeat
                    doloribus obcaecati ex earum numquam incidunt enim, neque, delectus perferendis! Labore eum,
                    inventore nostrum ipsam corrupti repudiandae dignissimos minus!</p>
                <div class="icon ms-4 p-2">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-discord"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>    
            </div>

            <div class="col-md-2">
                <div class="support ms-2">
                    <h3>Support</h3>
                    <p>
                        <a href=""><small>How to Hire</small></a>
                    </p>
                    <p>
                        <a href=""><small>Finding a Team</small></a>
                    </p>
                    <p>
                        <a href=""><small>FAQs</small></a>
                    </p>
                    <p>
                        <a href=""><small>Privacy Policy</small></a>
                    </p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="ms-4">
                    <h3>Contact Us</h3>
                    <strong>Location</strong>
                    <p>Manila, Philippines</p>
                    
                    <strong>Phone Number</strong>
                    <p>+639 - 776 - 8450</p>
                    
                    <strong>Join Us</strong>
                    <p>support@curve.com</p>
                </div>
            </div>
            <div class="col-md-3">
                <div>
                    <h3>Newsletter Signup</h3>
                    <input type="text" placeholder="Your Email Address" class="mt-3"></input>
                    <button class="btn btn-primary fw-bold">Subscribe Now</button>
                    <p class="mt-3"><small>Get the latest update annd offer for business service yearly</small></p>
                </div>
            </div>
        </div>

        <div class="text-center mt-2">
            <p>© Copyright 2023 Curve. All Right Reserve</p>
        </div>
    </footer>
        </>
    )
}

export default Footer;