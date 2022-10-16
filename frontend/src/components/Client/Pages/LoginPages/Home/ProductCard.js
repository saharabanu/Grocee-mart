import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

const ProductCard = ({item}) => {
    const addToCartHandler = (item) => {

        if (!localStorage.getItem("cart")) {
            let newItem = {
                name: item.name,
                price: item.price,
                quantity: 1,
                product: item._id

            };
            let data = [];
            data.push(newItem);
            localStorage.setItem("cart", JSON.stringify(data))
        } else {

            let newItem = {
                name: item.name,
                price: item.price,
                quantity: 1,
                product: item._id
            };
            let Xproduct = JSON.parse(localStorage.getItem("cart"))

            let bool = false;
            Xproduct.filter(i => {
                if (i.product === item._id) {
                    bool = true;
                }
            })

            if (!bool) {
                Xproduct.push(newItem);
                localStorage.setItem("cart", JSON.stringify(Xproduct))

            }


        }

    }
  return (
    <div className="col-md-3">
    <div className="product-card">
        <div className="product-img ">
        <img className="img-fluid"src={item.image[0].url} 
         alt="product" />
         {/* {product?.allImages[0].mediaFileName} */}
        
        <div>
            <h5 className='product-offer'>Sale</h5>
        </div>
        </div>
        <div className="overlay">
            <Link to="/" className='btn-btn'><i className="fa-solid fa-heart"></i></Link>
            <br /> <br />
            <Link to="/" className='btn-btn'><i className="fa-solid fa-cart-shopping"></i></Link>
            <br /> <br />
            <Link to="/" className='btn-btn'><i className="fa-solid fa-eye"></i></Link>
        </div>
        

        <div className="card-content text-center">
            
            {/* <h6 className="fs-6">{item.category}</h6> */}
            <h6 className='pt-3'>{item.name}</h6>
            
            {/* <StarRatings
                rating={item.ratings}
                starRatedColor="orange"
                starDimension='10px'
                starSpacing='0px'
                numberOfStars={5}
                name='rating'/>
                
                <h4 className='text-muted'>{item?.ratings}/5</h4> */}
                
             <p className=''style={{color:"#3cb815"}}>$ {item?.price}</p>
             <button onClick={() => addToCartHandler(item)} className=' add-to-cart'>Add To Cart</button>
        </div>
    </div>
</div>
  )
}

export default ProductCard