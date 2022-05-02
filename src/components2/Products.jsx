import React from 'react'
import "../styles/Product.css"

function Products({pname,prange,pdesc,plink}) {
  return (
    <div className='pcontainer'>
        <div className='imgdiv'>
        <img width={"300px"} height={"300px"} boder-radius={"5px"} src={plink} alt="#" />
        </div>

        <p>{pname}</p>
        <p>{prange}</p>
        <p>{pdesc}</p>
       
            <button className='cartBtn'>Add to Cart</button>
    </div>
  )
}

export default Products