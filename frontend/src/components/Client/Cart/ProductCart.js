import React from 'react'
import { Link } from 'react-router-dom'

const ProductCart = ({cartItem,deleteCartItem, quantityUpdate}) => {
  return (
    <>
            <div className=" ">
                <div className="d-flex justify-content-between"><h4><b>Shopping Cart</b></h4>
                            <p className="text-right text-muted">1 item</p>
                            {/* col align-self-center  */}
                </div>
            </div>
                  
                     <div className="row border mb-4">
                       {cartItem.length === 0 ? <div className='text-danger'><h6>No product added in cart</h6></div> : cartItem && cartItem.map(item=><div key={item._id}className='col-md-12 py-2 border-bottom'>
                       <div className="row">
                         <div className="col-md-3 col-sm-3 col">
                            <p className="">{item.name}</p>
                        </div>
              
                        <div className="col-md-3 d-flex align-items-center col-sm-3 col">
                            <button className='border-0' style={{backgroundColor:"#fff"}}onClick={() => quantityUpdate(item.product,'-')}>-</button>
                            <input type="number" className="w-50 px-3 " readOnly value={item.quantity} />
                            <button className='border-0' style={{backgroundColor:"#fff"}} onClick={() => quantityUpdate(item.product,"+")}>+</button>
                        </div>
                        <div className="col-md-2 col-sm-2 col">
                            {/* <span>Total Price</span> */}
                            <h5 className="pt-2">$ {item.price}</h5>
                
                        </div>
                        <div className="col-md-2 col-sm-2 col">
                            {/* <span>Total Price</span> */}
                            <h5 className="pt-2"> $ 999</h5>
                
                        </div>
              
                        <div className="col-md-2 col-sm-2 col ">
                            <button className='border-0 bg-white' type="submit" onClick={() => deleteCartItem(item)} ><i className="fas fa-trash fa-lg pt-2 text-danger "></i></button>
                        </div>
                        </div>
                      </div>)}
                      
                
                    </div>
                    <Link to="/shop" className="signin-btn mt-5 text-decoration-none fw-bold">Continue Shopping</Link> 
                    
                     
                     
                  
          
    </>
  )
}

export default ProductCart