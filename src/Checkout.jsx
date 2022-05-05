import React from 'react'
import checkout__ad from "./images/checkout__ad.jpg"

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img height={"200px"} width={"100%"} src={checkout__ad} alt="checkout_ad" className="checkout__ad" />
            <h2 className='checkout__title'>Your Shopping Basket</h2>
        </div>
        <div className="checkout__right">
            the subtotal will go here
        </div>
        <div>

        </div>
    </div>
  )
}

export default Checkout