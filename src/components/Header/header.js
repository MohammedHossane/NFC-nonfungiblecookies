import homeimg from "../../assets/icons/homeimg.png";
import menuimg from "../../assets/icons/scenes.png";
import shopimg from "../../assets/icons/Shopicons_Light_Cart1.png";
import "../Header/header.css";
import React from "react";
import "../../App"
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flexcontainer">
        <img className="homeImg" src={homeimg} alt="homeIMG" />
        <Link to="/" className="homeText">HOME</Link>
      
      <img className="menuImg" src={menuimg} alt="menuIMG" />
      <Link to="/cookies"className="menuText">MENU</Link>

      <h1 className="nfcText">NFC</h1>
      <h1 className="nonfungiblecookiesText">Nonfungible Cookies</h1>

      <img className="shopImg" src={shopimg} alt="shopIMG" />
      <Link to="/shop" className="shopText">SHOP</Link>
    </div>
  );
}

export default Header;
