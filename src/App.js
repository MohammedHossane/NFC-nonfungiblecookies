import "./App.css";
import Home from "./pages/Home/home";
import CookiePage from "./pages/allCookies/allCookies";
import PinkSugar from "./pages/singleCookies/pinkSugar";
import WhiteSugar from "./pages/singleCookies/whiteSugar";
import InvisSugar from "./pages/singleCookies/invisibleSugar";
import BeefCookie from "./pages/singleCookies/beefCookie";
import MushroomCookie from "./pages/singleCookies/mushroomCookie";
import MatchaCookie from "./pages/singleCookies/matchaCookie";
import BlueMacaron from "./pages/singleCookies/blueMacaron";
import PinkMacaron from "./pages/singleCookies/pinkMacaron";
import YellowMacaron from "./pages/singleCookies/bananaMacaron";
import Obama from "./pages/singleCookies/obamaCookie";
import Trump from "./pages/singleCookies/trumpCookie";
import Biden from "./pages/singleCookies/bidenCookie";
import Shop from "./pages/shop/shop"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cookies" element={<CookiePage />}></Route>
        <Route path="*" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/pinkSugarCookie" element={<PinkSugar />}></Route>
        <Route path="/whiteSugarCookie" element={<WhiteSugar />}></Route>
        <Route path="/invisSugarCookie" element={<InvisSugar />}></Route>
        <Route path="/beefCookie" element={<BeefCookie />}></Route>
        <Route path="/mushroomCookie" element={<MushroomCookie />}></Route>
        <Route path="/matchaCookie" element={<MatchaCookie />}></Route>
        <Route path="/blueMacaron" element={<BlueMacaron />}></Route>
        <Route path="/pinkMacaron" element={<PinkMacaron />}></Route>
        <Route path="/yellowMacaron" element={<YellowMacaron />}></Route>
        <Route path="/obama" element={<Obama />}></Route>
        <Route path="/trump" element={<Trump />}></Route>
        <Route path="/biden" element={<Biden />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
