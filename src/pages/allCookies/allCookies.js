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
      <Link to="/whiteSugarCookie" id="snowRow1"> Snow White White</Link>

      <img
        id="invisiblesugarcookie"
        src={invisiblesugarcookie}
        alt="invisiblesugarcookie"
      />
      <Link to="/invisSugarCookie" id="invisRow1"> Invisible Night Icing</Link>

      <img id="chocolatecookie" src={chocolatecookie} alt="chocolatecookie" />
      <Link to="/beefCookie" id="chocolateRow2"> Beef</Link>

      <img id="redcookie" src={redcookie} alt="redcookie" />
      <Link to="/mushroomCookie" id="redRow2"> Mushroom</Link>

      <img id="matchacookie" src={matchacookie} alt="matchacookie" />
      <Link to="/matchaCookie" id="matchaRow2"> Matcha Grass</Link>

      <img id="bluemacaron" src={bluemacaron} alt="bluemacaron" />
      <Link to="/blueMacaron" id="blueRow3"> Blue.</Link>

      <img id="pinkmacaron" src={pinkmacaron} alt="pinkmacaron" />
      <Link to="/pinkMacaron" id="pinkRow3"> Pink Matcha</Link>

      <img id="yellowmacaron" src={yellowmacaron} alt="yellowmacaron" />
      <Link to="/yellowMacaron" id="yellowRow3"> Bannana Pepper</Link>

      <img id="obama" src={obama} alt="obama" />
      <Link to="/obama" id="obamaRow4"> ObamaV1</Link>

      <img id="trump" src={trump} alt="trump" />
      <Link to="/trump" id="trumpRow4"> ObamaV2</Link>

      <img id="biden" src={biden} alt="biden" />
      <Link to="/biden" id="bidenRow4"> ObamaV3</Link>
    </div>
  );
}
