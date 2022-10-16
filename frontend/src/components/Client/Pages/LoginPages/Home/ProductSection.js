import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import ProductCard from './ProductCard';

const ProductSection = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/product')
            .then(response => setProduct(response.data.products))
            .catch(err => console.log(err))

    })
  return (
    <> <div className='product'>
    <div className="container">
        <div className=''>
        <h4 className='text-center pt-5 pb-2' style={{color:"#3cb815"}}>Our Products</h4>
        </div>
              {/* all categories  */}
         <div className='text-center  mb-5 '>
        <button className='all-cat'>All</button>
        <button className='all-cat'>vegetables</button>
        <button className='all-cat'>Fresh</button>
        <button className='all-cat'>Fish </button>
        <button className='all-cat'>Fruits</button>
        <button className='all-cat'>recipies</button>
       

        </div>  

        <div className="product-div">
            <div className="row g-4">
                {product?.map(item=><ProductCard item={item} key={item._id}/>)}
               
               
            </div>
        </div>

    </div>
</div></>
  )
}

export default ProductSection