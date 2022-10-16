import axios from 'axios';
import React, { useState } from 'react'
import swal from 'sweetalert';
import Layout from '../../../Common/Layout/Layout'

const ForgetPassword = () => {
    const [email, setEmail] = useState({
        email: ''
    })

    const onChangeHandlerLogin = (e) => {
        let data = { ...email };
        data[e.target.name] = e.target.value;
        setEmail(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("api/v1/auth/forget/password", email)
            .then(data => swal("Email Sent successfully. Please , check your email"))
            .catch(err => swal(err.response.data.message));
    }

    return (
        <Layout>
           <div className="login mt-5">
           <h4 className='pt-4 ps-5'>Reset Your Password</h4>
            <form className="p-5" onSubmit={handleSubmit}>
                <div className="">
                    <label className="d-block fw-bold">Enter Your Email</label>
                    <input name="email" onChange={onChangeHandlerLogin} type="email" id="loginName" className="login-input" required placeholder='Your Email'/>
                </div>
                <input type="submit" className="signin-btn mb-3" value="Send Reset Link"></input>
            </form>
           </div>
        </Layout>
    );
}

export default ForgetPassword