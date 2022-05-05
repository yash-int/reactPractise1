import React from 'react'
import checkout__ad from "./images/checkout__ad.jpg"

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img src={checkout__ad} alt="checkout_ad" className="checkout__ad" />
        </div>
    </div>
  )
}

export default Checkout