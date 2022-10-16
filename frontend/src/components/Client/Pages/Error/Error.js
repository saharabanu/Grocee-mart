import React from 'react'
import Layout from '../../../Common/Layout/Layout';
import errorImg from '../../../../images/404-thumb.png';
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <>
    <Layout>
    <div className='common_banner_img'>
           <div className='text-center text-white pt-5'>
           <h2>Error 404</h2>
            <h4>Home  <span style={{color:"#3cb815"}}>/</span> Error 404</h4>
           </div>
        </div>
        <div className='text-center' >
           <img className='img-fluid py-4' src={errorImg} alt="404" />

           <h2>OPPS ! WE,AR NOT FOUND THIS PAGE</h2>
           <p className='py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi aliquid minima assumenda.</p>

           <Link to="/"className='hero-btn'>Back Home</Link>
         </div>
    </Layout>
        
    </>
  )
}

export default Error