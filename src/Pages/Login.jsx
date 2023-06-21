import "bootstrap/dist/css/bootstrap.css";

function Login() {

    return (

        <>
<<<<<<< HEAD
            <div className="container mt-5" id="Login">
                <form className="loginform border shadow rounded p-5">
                    <h1 className="form-title text-center text-white">Log-In</h1>
                    <div className="mb-3 form-input">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

=======
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
>>>>>>> main
                    </div>
                    <div className="mb-3 form-input">
                        <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label text-white" for="exampleCheck1">Keep me Log-In</label>
                    </div>
                    <button type="submit" className="btn btn-primary ">Submit</button>
                    <div id="emailHelp" className="form-text text-white">forgot password</div>
                </form>
            </div>
        </>
    )
}

export default Login;