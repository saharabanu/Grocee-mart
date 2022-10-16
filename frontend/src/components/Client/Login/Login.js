import React, { useState } from 'react';
import axios from 'axios';

import swal from 'sweetalert';
import { Link, NavLink } from 'react-router-dom';

const Login = () => {
    const [loginCredential, setLoginCredential] = useState({
        email: '',
        password: '',
    })

    const onChangeHandlerLogin = (e) => {
            let data = { ...loginCredential };
            data[e.target.name] = e.target.value;
            setLoginCredential(data)
      

    }

    const loginSubmitHandler=(e)=>{
        e.preventDefault();
     
        axios.post("/api/v1/auth/login", loginCredential)
            .then(data => swal("Login Success"))
            .catch(err =>swal(err.response.data.message  + " Your email or password wrong") );
    }


    return (
        <>
        <div className="container">
        <div className="row pt-5">
            <div className="col-md-6">
            <lottie-player
                  src="https://assets4.lottiefiles.com/packages/lf20_xlmz9xwm.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%", height: "100%" }}
                  loop
                  autoplay
                ></lottie-player>
            </div>
            <div className="col-md-6">
            <div className=' login'>
            <div className='text-center'>
            <h2>Login</h2>
            <p>Login if you area a returning customer.</p>
            </div>
                    <form onSubmit={loginSubmitHandler}>
                        <div className="">
                            <label className="d-block fw-bold" >Email </label>
                            <input name="email" onChange={(e) => onChangeHandlerLogin(e)} type="email" id="loginName" className="  login-input" placeholder='Email Address' required/>
                        </div>

                             <br />
                        <div className="">
                            <label className="d-block fw-bold" >Password</label>
                            <input name="password" onChange={(e) => onChangeHandlerLogin(e)} type="password" id="loginPassword" className=" login-input" placeholder='Password' required />
                        </div>
                          <br />
                        <div className=" d-flex justify-content-between">
                       <div>
                       <input type="checkbox" name="" id="" required/>
                        <label htmlFor="">  Remember me</label>
                       </div>

                            <NavLink className="login-link-btn" to="/forgetPassword">Forgot password?</NavLink>
                        </div>

                        <input type="submit" className="signin-btn mb-3 " value="Login"></input>


                    </form>

                <div className="switch_account">
                   
                        <p>
                            Dont't have an account?
                            <Link to="/signUp" className='fw-bold login-link-btn' >Sign Up Here</Link>
                        </p>  
                  
                </div>
            </div>
            </div>
        </div>
</div>
           






        </>
  )
}

export default Login