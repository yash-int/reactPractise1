import React, { useEffect } from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'
function CheckoutProduct({link,price,title,rating,id}) {
    const data={
        link:link,
        price:price,
        title:title,
        rating:rating,
        id:id
    }
    useEffect(()=>{
        
    },[data])
    const [{basket},dispatch]=useStateValue()
    function removeFromBasket(){
        console.log(id)
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }
    return (
    <div key={data.id}>
        <div className="checkoutProduct">
            <img src={data.link} alt="#" className="checkoutProduct__image" 
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {data.title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{data.price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(data.rating)
                    .fill()
                    .map((_,i)=>(
                        <p key={i}>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct