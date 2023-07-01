import "bootstrap/dist/css/bootstrap.css";

function Login() {

    return (

        <>
            <form className="container">
                <div className="rounded"  id="LogIn_Form">                    
                    <div className="m-3">
                    <label htmlFor ="input_email" className="mb-3 text-light">E-mail</label>
                    <input type="email" className="form-control" id="inputPassword2" placeholder="email"/>
                    </div>
                    <div className="m-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-light" placeholder="Password">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div>
                    <button type="submit" className="btn btn-primary ">Submit</button>
                    </div>
                    
                </div>
            </form>
        </>
    )
}

export default Login;