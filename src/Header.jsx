import React from "react";
import amazon__logo from "./images/amazon__logo.png";
// import SearchIcon from '@mui/icons-material/Search';
import { BiSearch } from "react-icons/bi";
import { FaShoppingBasket } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={amazon__logo} alt="amazon_logo" />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <BiSearch className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Signin</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <FaShoppingBasket />
          <span className="header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
