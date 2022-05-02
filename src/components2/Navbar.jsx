// import React from 'react'
import styles from "../styles/Navbar.module.css"

function Navbar() {
  return (
    <div>
        <nav className={styles.navbar}>
            <p>Home</p>
            <p>About Us</p>
            <p>Cart</p>
            <p>Contact</p>
        </nav>
    </div>
  )
}

export default Navbar