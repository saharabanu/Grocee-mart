import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Layout from '../../../Common/Layout/Layout';

const SignUp = () => {
    const [signupCredential, setSignupCredential] = useState({
        name: '',
        email: '',
        password: '',
        avatar: '',
    })

    const onChangeHandlerSignUP = (e) => {

        if (e.target.name === "avatar") {
            let reader = new FileReader();

            reader.onload = () => {
                let data = { ...signupCredential };
                data[e.target.name] = reader.result;
                setSignupCredential(data)

            }
            reader.readAsDataURL(e.target.files[0]);
        } else {
            let data = { ...signupCredential };
            data[e.target.name] = e.target.value;
            setSignupCredential(data)
        }

    }

    const handleSignUP = (e) => {
        e.preventDefault();

        // console.log(signupCredential)
        axios.post("/api/v1/auth/register", signupCredential)
            .then(data => swal("User registration Successfully done"))
            .catch(err =>swal(err.response.data.message+   "something went wrong") );


    }
   
  return (
    <>
        <Layout>
        <div className="container">
        <div className="row mt-5">
            <div className="col-md-6">
            <div className='login'>

<div className='text-center'>
     <h2>Create An Account</h2>
     <p>Register here if you are a new customer</p>
     </div>
         <form onSubmit={handleSignUP}>
                 <div className="">
                     <label className="d-block fw-bold">Enter Your Name</label>
                     <input name="name" onChange={(e) => onChangeHandlerSignUP(e)} type="text" className="login-input" placeholder='Your Name' required />
                 </div>
                 <br />
                 <div className="">
                     <label className="d-block fw-bold" >Enter Your Email</label>
                     <input name="email" onChange={(e) => onChangeHandlerSignUP(e)} type="email" className="login-input" placeholder='Your Email'  required/>
                 </div>
                  <br />
                 <div className="">
                     <label className="d-block fw-bold" >Password</label>
                     <input name="password" onChange={(e) => onChangeHandlerSignUP(e)} type="password" className="login-input" placeholder='Your Password'  required/>
                 </div>

                    <br />
                 <div className="">
                     
                     <input name="avatar" onChange={(e) => onChangeHandlerSignUP(e)} type="file" className="login-input" placeholder='Your Name'  required/>
                 </div>

                    <br />
                 <input type="submit" className="signin-btn mb-4" value="Sign Up"></input>


             </form>
          <p>Already have an account?  <Link to="/login" className='login-link-btn'>Sign In Here</Link></p>
      </div>
            </div>
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
        </div>
          </div>

      
        </Layout>
    </>
  )
}

export default SignUp