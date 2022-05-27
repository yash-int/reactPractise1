import React from 'react'
// import Checkout from './Checkout'
import CheckoutProduct from './CheckoutProduct'
import "./payment.css"
import { useStateValue } from './StateProvider'
// import { getBasketTotal } from './reducer'
function Payment() {
    const [{basket,user}, dispatch] =useStateValue()
  return (
    <div className='payment'>
        <div className="payment__container">
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email }</p>
                    <p>Los Angeles</p>
                    <p>Kamla Nagar agra</p>
                        
                    
                </div>
            </div>
            <div className="payment__section">
            <div className="payment__title">
                <h3>review items and delivery</h3>
                
                </div>
                <div className="payment__items">
                    {basket .map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        link={item.link}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>

            </div>
            <div className="payment__section">

            </div>
        </div>
    </div>
  )
}

export default Payment