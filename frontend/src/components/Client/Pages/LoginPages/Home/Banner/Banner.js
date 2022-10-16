import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <>
    <div className='container'>

   
        <div className=" row pt-5">
              <div className="col-md-6">
                 <div className="banner1-img">
                    <div className='w-75'>
                        <h3  style={{color:"#3cb815"}}>Organic Juice</h3>
                        <p className='py-3'>Shop Our selection of organic fresh vegetables in a discounted price 10% off</p>
                        <Link to="/shop" className='hero-btn'>Shop Now</Link>
                    </div>
                 </div>
              </div>
              <div className="col-md-6">
              <div className="banner2-img">
                    <div className='w-75'>
                        <h3 style={{color:"#3cb815"}}>Organic Food</h3>
                        <p className='py-3'>Shop Our selection of organic fresh vegetables in a discounted price 10% off</p>
                        <Link to="/shop" className='hero-btn'>Shop Now</Link>
                    </div>
                 </div>
              </div>
        </div>
        </div>
    </>
  )
}

export default Banner