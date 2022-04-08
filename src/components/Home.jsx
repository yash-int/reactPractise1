import { Navbar } from "./Navbar";
import image1 from "./images/apple.jpg"

export function Home(){
    return(
        <body>
            <Navbar/>
            <img src={image1} alt="#" />
            <h1>hey home page</h1>
        </body>
    )
}