import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Layout from '../../../Common/Layout/Layout';

const ResetPassword = () => {
    let {resetToken}= useParams();

    const [pass, setPass] = useState({
        password: '',
        confirmPassword: ''
    })

    const onChangeHandlerLogin = (e) => {
        let data = { ...pass };
        data[e.target.name] = e.target.value;
        setPass(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
// console.log(resetToken,pass)
        axios.put(`/api/v1/auth/password/reset/${resetToken}`, pass)
            .then(data => swal("Password Reset Success"))
            .catch(err => swal(err.response.data.message + "password does not match"));
    }



    return (
        <Layout>

          <div className='mt-5'>
          <h4 className='px-5'>Setup New Password</h4>
            <form className="p-5" onSubmit={handleSubmit}>
                <div className=" mb-4">
                    <label className="d-block fw-bold">Enter Your Password</label>
                    <input name="password" onChange={onChangeHandlerLogin} type="password" id="loginName" className="login-input" placeholder='Your New Password' required/>
                </div>
                <div className=" mb-4">
                    <label className="d-block fw-bold">Re-Enter Your Password</label>
                    <input name="confirmPassword" onChange={onChangeHandlerLogin} type="password" id="loginName" className="login-input" placeholder=' Confirm Password' required />
                </div>
                <input type="submit" className="signin-btn  mb-3" value="Send Reset Link"></input>
            </form>
          </div>
        </Layout>
    );
}

export default ResetPassword