import "bootstrap/dist/css/bootstrap.css";

function Login() {

    return (

        <>
            <form className="container">
                <div className="rounded">
                    <div>
                        <h1>Log-in</h1>
                        <div className="col-auto">
                            <label htmlFor ="input_email" className="visually-hidden">E-mail</label>
                            <input type="email" className="form-control" id="inputPassword2" placeholder="email"/>
                        </div>
                        <div className="col-auto">
                            <label htmlFor ="inputPassword2" className="visually-hidden">Password</label>
                            <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login;