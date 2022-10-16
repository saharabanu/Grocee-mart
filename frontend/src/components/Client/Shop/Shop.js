import React from 'react';
import Layout from '../../Common/Layout/Layout'

const Shop = () => {
  return (
    <>
        <Layout>
        <div className='common_banner_img'>
           <div className='text-center text-white pt-5'>
           <h2>Shop Page</h2>
            <h4>Home  <span style={{color:"#3cb815"}}>/</span> Shop</h4>
           </div>
        </div>

        <div className='container'>
        <div className="row">
            <div className="col-md-4">
                Sidebar
            </div>
            <div className="col-md-8">
                All product
            </div>
        </div>

        </div>
        </Layout>
    </>
  )
}

export default Shop