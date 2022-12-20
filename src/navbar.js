import "./navbar.css";
import Logo from "../src/assets/logo.png";

import React from 'react'

const navbar = () => {
  return (
    <div className="navbar1">
        <div className="navbar2">
    <div className="navbar">
      <img src={Logo} alt="" />
    </div>
    <div className="para">
        <p>Video Call App</p>
    </div>
    </div>

    {/* <div className="navbar3">
        <ul>
            <li>About Uses</li>
            <li>Product</li>
            <li>Blogs</li>
        </ul>
    </div> */}
    </div>
  )
}

export default navbar
