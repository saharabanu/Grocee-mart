import React from 'react';
import car from '../../../images/car.png'

const NavigationTop = () => {
  return (
    <>
       <div className='py-2' style={{backgroundColor:"#f65005"}}>
       <div className='d-flex justify-content-center align-items-center'>
       <img src={car} alt="car" />
        <p className='text-white ps-3'>Claim your online FREE Delivery or Shipping today! Expires in 10 days</p>
       </div>
       </div> 
    </>
  )
}

export default NavigationTop