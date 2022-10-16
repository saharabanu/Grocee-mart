import React from 'react';
import { Link } from 'react-router-dom';

const FooterPart2 = () => {
  return (
    <>
                      <h4>Information</h4>
                       <div className="part-2 ">
                            <Link to="/" className='link d-block '>About Us</Link>
                            
                            <Link to="/" className='link d-block'>Contact Us</Link>
                            
                            <Link to="/" className='link d-block'>Wishlist</Link>
                            
                            <Link to="/" className='link d-block'>Portfolio</Link>
                           
                            <Link to="/" className='link d-block'>Privacy Policy</Link>
                            
                            <Link to="/" className='link d-block'>Frequently</Link>
                            
                           





                       </div>
    </>
  )
}

export default FooterPart2