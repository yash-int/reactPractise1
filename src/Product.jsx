import React from "react";
import "./Product.css"

function Product({ title, price, link, rating,  }) {
  return (
    <div className="product">
      <div className="product__info">
        {/* {id} */}
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="produce__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              
              <p>⭐</p>;
            })}
        </div>
      </div>
      <img src={link} alt="product__image" />
      <button className="addToCart__button">Add to cart</button>
    </div>
  );
}

export default Product;
