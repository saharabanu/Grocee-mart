import React from 'react'
import { Link } from 'react-router-dom'

const FooterPart5 = () => {
  return (
    <>
              <h4>My Account</h4>
                            <div className="part-3">
                            <Link to="/" className='link d-block'>My Account</Link>
                            <Link to="/" className='link d-block'>Shopping Cart</Link>
                            <Link to="/" className='link d-block'>Checkout</Link>
                            <Link to="/" className='link d-block'>Login</Link>
                            <Link to="/" className='link d-block'>SignUp</Link>
                            <Link to="/" className='link d-block'>Compare</Link>
                            
                            </div>

    </>
  )
}

export default FooterPart5