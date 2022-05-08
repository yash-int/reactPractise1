import React from "react";
import "./Product.css"
import { useStateValue } from "./StateProvider";

function Product({ title, price, link, rating,  }) {
  const [{basket},dispatch]=useStateValue()
  console.log('this is basket ->', basket);

  const addtoBasket=()=>{
    //dispatch item into the data layer
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        // id:id,
        title:title,
        link:link,
        price:price,
        rating:rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="produce__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return(

                <p>⭐</p>
                )
            })}
        </div>
      </div>
      <img src={link} alt="product__image" />
      <button className="addToCart__button" onClick={addtoBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
