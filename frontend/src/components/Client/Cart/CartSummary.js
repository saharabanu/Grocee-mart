import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const CartSummary = () => {
  return (
      <> 
                    <div className='container w-75 '>
                        <h4 className='pb-2'>Summary</h4>
                        {/* <div className='pb-2'>
                        <input type="text" className="" placeholder="Promo Code"/>
                        <input type="submit" className="" placeholder="Promo Code" value="Apply"/>

                    </div> */}
                    <div className="border p-3">
                   
                           <div className="d-flex justify-content-between align-items-center ">
                            <p>SubTotal</p>
                            <p>$89000</p>
                           </div>
                           
                           <div className="d-flex justify-content-between align-items-center ">
                            <p>Discount</p>
                            <p>5%</p>
                           </div>
                           
                           <div className="d-flex justify-content-between align-items-center ">
                            <p>Tax</p>
                            <p>3%</p>
                           </div>
                           <hr />
                           <div className="d-flex justify-content-between align-items-center ">
                            <p>Total</p>
                            <p>$89000</p>
                           </div>
                           </div>
                           <Link to="/checkout" className="signin-btn d-block mb-3 text-decoration-none fw-bold">Proceed to Checkout</Link> 
                           
                           
                        </div>
                   
                  
                 
               
         {/* <div className="cart_summary_area">
                <h3>Summary</h3>
                <div className="div1">
                    <p>
                        <span>3 Items</span>
                        <span>$564.98</span>
                    </p>
                    <p>
                        <span>Shipping</span>
                        <span>Free</span>
                    </p>
                </div>
                <div>
                    <p>
                        <span>Total (tax incl.)</span>
                        <span>$419.00</span>
                    </p>

                    
                       {
                        button&& <NavLink to="/checkout" >Checkout</NavLink> 
                       }
                    


                </div>
            </div> */}
    </>
  )
}

export default CartSummary