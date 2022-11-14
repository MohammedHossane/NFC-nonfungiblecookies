import homeimg from "../../assets/icons/homeimg.png";
import menuimg from "../../assets/icons/scenes.png";
import shopimg from "../../assets/icons/Shopicons_Light_Cart1.png";
import "../Header/header.css";
import React from "react";

function Header() {
  return (
    <div className="flexcontainer">
      <div className="homebutton">
        <img className="homeImg" src={homeimg} alt="homeIMG" />
        <h1 className="homeText">HOME</h1>
      </div>
      <img className="menuImg" src={menuimg} alt="menuIMG" />
      <h1 className="menuText">MENU</h1>

      <h1 className="nfcText">NFC</h1>
      <h1 className="nonfungiblecookiesText">Nonfungible Cookies</h1>

      <img className="shopImg" src={shopimg} alt="shopIMG" />
      <h1 className="shopText">SHOP</h1>
    </div>
  );
}

export default Header;
