import React from 'react'
import Navbar from './Navbar'
import Products from './Products'

export default function Home() {
  return (
    <div>
        {/* <h1>This is my practise as on 1/5/22</h1> */}
        <Navbar/>
        <Products plink={"https://images.unsplash.com/photo-1651342717469-56d76efbdae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}
        pname={"red woollen"} prange={"$200"} pdesc={"United States sheep producers market wool with private or cooperative wool warehouses, but wool pools are common in many states. In some cases, wool is pooled in a local market area"}/>
    </div>
  )
}
