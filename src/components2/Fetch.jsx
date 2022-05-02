import React, { useEffect, useState } from "react";
import "../styles/Home.css"

function Fetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function get() {
    const res = await fetch("http://localhost:5000/items");
    const data = await res.json();
    console.log(data);
    setData(data);
    setLoading(false);
  }
  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      {!data ? (
        "loading...."
       ) : (
        <div className="p-main-div">
          {data.map((e, i) => (
            <div key={i}>
              <img  width={"300px"} height={"300px"} className="imgdiv" src={e.image} alt="#" />
              <p>{e.name}</p>
              <p>{e.price}</p>
              <button className='cartBtn'>Add to Cart</button>
            </div>
       ))}
        </div>
       )
    }
    </div>
  );
}

export default Fetch;
