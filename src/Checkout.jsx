import React from "react";
import checkout__ad from "./images/checkout__ad.jpg";
import "./Checkout.css"
import Subtotal from "./Subtotal.jsx"

function Checkout() {
  return (
    <div className="checkout">

      <div className="checkout__left">
        <img
          height={"200px"}
          width={"70%"}
          src={checkout__ad}
          alt="checkout_ad"
          className="checkout__ad"
        />
        <h2 className="checkout__title">Your Shopping Basket</h2>
      </div>
      <div className="checkout__right">
         <Subtotal/>
              </div>
      
    </div>
  );
}

export default Checkout;
