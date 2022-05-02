import React from "react";
import Navbar from "./Navbar";

import "../styles/Home.css";
import Fetch from "./Fetch";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-main-div">
        <Fetch />
      </div>
    </div>
  );
}
