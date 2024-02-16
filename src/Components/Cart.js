import React, { useState } from 'react'
import CartItem from './CartItem'

export default function Cart() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) === null ? [] :  JSON.parse(localStorage.getItem('cartItems'))

    let cartPrices = cartItems.map((cartItem)=>{
        return cartItem.price
    })

    let cartPrice = cartPrices.reduce((prevVal, currVal)=>{
        return prevVal+currVal
    }, 0)

    let shippingCharge = cartPrice > 0 ? 50 : 0

    const [showCartItems, setShowCartItems] = useState(cartItems)

    const handleRemoveCart = (e, id) => {
        e.preventDefault()

        cartItems = cartItems.filter((cartItem) => {
            return cartItem.id !== id
        })
        setShowCartItems(cartItems)
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }

    return (
        <div className="container pb-4">
            <h2 className='py-4'>{cartItems.length > 0 ? `Cart Items ${cartItems.length}` : 'No Cart Items'}</h2>
            <div className="row">
                <div className="col-lg-8 col-12">
                    <div className="row gy-3">
                        {cartItems === null ? '' : showCartItems.map((cartItem) => {
                            return <CartItem cartItem={cartItem} key={cartItem.id} handleRemoveCart={handleRemoveCart} />
                        })}
                    </div>
                </div>
                <div className="col-lg-4 col-11 mx-auto">
                    <div className="card shadow p-3">
                        <h3>Order Summary</h3>
                        <hr />
                        <div className="d-flex justify-content-between mb-2">
                            <h6>Product Price: </h6>
                            <h6>₹{cartPrice}.00</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6>Shipping Charge: </h6>
                            <h6>₹{shippingCharge}.00</h6>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between mb-2">
                            <h5>Total Amount:</h5>
                            <h5>₹{cartPrice+shippingCharge}.00</h5>
                        </div>
                        <div className="w-100 d-flex justify-content-end">
                            <button disabled={cartPrice+shippingCharge===0} className='btn btn-primary'>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
