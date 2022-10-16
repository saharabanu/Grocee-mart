import React from 'react'
import { Link } from 'react-router-dom'

const FooterPart3 = () => {
  return (
    <>
                          <h4>Categories</h4>
                            <div className="part-3">
                            <Link to="/" className='link d-block'>All Products</Link>
                            <Link to="/" className='link d-block'>Grocery & Frozen</Link>
                            <Link to="/" className='link d-block'>Fresh Fruits</Link>
                            <Link to="/" className='link d-block'>Package Foods</Link>
                            <Link to="/" className='link d-block'>Organic Foods</Link>
                            <Link to="/" className='link d-block'>Health & Wellness</Link>
                            
                            </div>

    </>
  )
}

export default FooterPart3