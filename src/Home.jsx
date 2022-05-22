import React from "react";
import amazon__primePoster from "./images/amazonPrime__Poster.webp";
import camera from "./images/camera.webp";
import headphones from "./images/headphones.jpg";
import nivea from "./images/nivea.jpg";
import perfume from "./images/perfume.jpg";
import shampoo from "./images/shampoo.jpg";
import wristWatch from "./images/wristWatch.jpg";
import Product from "./Product";
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          width={"100%"}
          height={"500px"}
          className="home__image"
          src={amazon__primePoster}
          alt="amazon__prime--poster"
        />
        <div className="home__row">
          <Product 
          id={1233}
          title={"The lean startup"} 
          price={"19.99"} link={nivea} rating={5} />

          <Product title={"The future Camera"}id={1234}
          price={"28.01"} link={camera} rating={5} />
        </div>
        <div className="home__row">
          <Product
           id={1235}
            title={"Fragrance King Perfume"}
            price={"10.99"}
            link={perfume}
            rating={5} 
          />
          <Product
             id={1236}
            title={"Your Grow Hair Shampoo"}
            price={"17.89"}
            link={shampoo}
            rating={5} 
          />
          <Product 
           id={1237}
          title={"headphones"}
           price={"36.76"} link={headphones} rating={3}  />
        </div>
        <div className="home__row">
          <Product 
           id={1238}
          title={"Wrist Watch"} price={"66.66"} 
          link={wristWatch} rating={4} />
        </div>
      </div>
    </div>
  );
}

export default Home;
