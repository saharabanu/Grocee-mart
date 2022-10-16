import React, { useEffect, useState } from 'react'
import CartSummary from './CartSummary'
import ProductCart from './ProductCart'

const ShoppingCart = () => {
    const [cartItem, setCartItem] = useState([])


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('cart'))
        setCartItem(data)

    }, [])

    let deleteCartItem = (item) => {
        let data = JSON.parse(localStorage.getItem('cart'))
        data = data.filter(i => i.product !== item.product);
        localStorage.setItem('cart', JSON.stringify(data))
        setCartItem(data)
    }

    const quantityUpdate = (id, position) => {

        let data = [...cartItem]

        if (position === "-") {
            data.forEach(item => {
                if (item.product === id) {
                    item.quantity = item.quantity - 1
                }
            })


        } else {
            data.forEach(item => {
                if (item.product === id) {
                    item.quantity = item.quantity + 1
                }
            })

        }

        localStorage.setItem('cart', JSON.stringify(data))
        setCartItem(data)

    }
  return (
    <>
    <div className="container mt-5">
       <div className="row ">
        <div className="col-md-7 ">
        <ProductCart deleteCartItem={deleteCartItem} quantityUpdate={quantityUpdate} cartItem={cartItem}/>
        
        </div>
        <div className="col-md-5 ">
        <CartSummary/>
        </div>
       </div>
       </div>
    </>
  )
}

export default ShoppingCart