import styles from "../styles/navbar.module.css"

export function Navbar(){
    return(
        <body>
            <nav>
                <p className={styles.home}>home</p>
                <p>about</p>
                <p>services</p>
                <p>contact</p>
            </nav>
        </body>
    )
}