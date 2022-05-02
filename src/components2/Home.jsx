import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
    
      <Navbar />
      <div className="p-main-div">
        <Products
          plink={
            "https://images.unsplash.com/photo-1651342717469-56d76efbdae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          pname={"Red Woollen"}
          prange={"$200"}
          pdesc={
            "United States sheep producers market wool with private or cooperative wool warehouses, but wool pools are common in many states. In some cases, wool is pooled in a local market area"
          }
        />

        <Products
          plink={
            "https://images.unsplash.com/photo-1651132137288-39f9ec6c6da7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          pname={"Royal Enfield Bullta"}
          prange={"$300"}
          pdesc={
            "United States sheep producers market wool with private or cooperative wool warehouses, but wool pools are common in many states. In some cases, wool is pooled in a local market area"
          }
        />

        <Products
          plink={
            "https://images.unsplash.com/photo-1644982648600-4583461837f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          pname={"Oppo Reno V3"}
          prange={"$400"}
          pdesc={
            "United States sheep producers market wool with private or cooperative wool warehouses, but wool pools are common in many states. In some cases, wool is pooled in a local market area"
          }
        />
      </div>
    </div>
  );
}
