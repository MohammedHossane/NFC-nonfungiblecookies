import Header from "../../components/Header/header";
import React from "react";
import "../allCookies/allCookies.css";
import bannerSugarCookie from "../../assets/sugarcookie.png";
import pinksugarcookie from "../../assets/pinksugarcookie.png";
import whitesugarcookie from "../../assets/whitesugarcookie.png";
import invisiblesugarcookie from "../../assets/invisiblesugarcookie.png";
import chocolatecookie from "../../assets/chocolatechipcookie.png";
import redcookie from "../../assets/redvelvetcookie.png";
import matchacookie from "../../assets/matchacookie.png";
import bluemacaron from "../../assets/bluemacaron.png";
import pinkmacaron from "../../assets/pinkmacaron.png";
import yellowmacaron from "../../assets/bananamacron.png";
import obama from "../../assets/obama.png";
import trump from "../../assets/obamaV2.png";
import biden from "../../assets/obamaV3.png";
import { Link } from "react-router-dom";

export default function allCookies() {
  return (
    <div>
      <Header></Header>
      <img
        id="bannerSugarCookie"
        src={bannerSugarCookie}
        alt="bannerSugarCookie"
      />

      <img id="pinksugarcookie" src={pinksugarcookie} alt="pinksugarcookie" />
      <Link to="/pinkSugarCookie"id="pinkRow1"> Pink Unicorn Dust</Link>

      <img
        id="whitesugarcookie"
        src={whitesugarcookie}
        alt="whitesugarcookie"
      />
      <h1 id="snowRow1"> Snow White White</h1>

      <img
        id="invisiblesugarcookie"
        src={invisiblesugarcookie}
        alt="invisiblesugarcookie"
      />
      <h1 id="invisRow1"> Invisible Night Icing</h1>

      <img id="chocolatecookie" src={chocolatecookie} alt="chocolatecookie" />
      <h1 id="chocolateRow2"> Beef</h1>

      <img id="redcookie" src={redcookie} alt="redcookie" />
      <h1 id="redRow2"> Mushroom</h1>

      <img id="matchacookie" src={matchacookie} alt="matchacookie" />
      <h1 id="matchaRow2"> Matcha Grass</h1>

      <img id="bluemacaron" src={bluemacaron} alt="bluemacaron" />
      <h1 id="blueRow3"> Blue.</h1>

      <img id="pinkmacaron" src={pinkmacaron} alt="pinkmacaron" />
      <h1 id="pinkRow3"> Pink Matcha</h1>

      <img id="yellowmacaron" src={yellowmacaron} alt="yellowmacaron" />
      <h1 id="yellowRow3"> Bannana Pepper</h1>

      <img id="obama" src={obama} alt="obama" />
      <h1 id="obamaRow4"> ObamaV1</h1>

      <img id="trump" src={trump} alt="trump" />
      <h1 id="trumpRow4"> ObamaV2</h1>

      <img id="biden" src={biden} alt="biden" />
      <h1 id="bidenRow4"> ObamaV3</h1>
    </div>
  );
}
