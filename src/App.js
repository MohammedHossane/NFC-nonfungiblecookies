import "./App.css";
import Home from "./pages/Home/home";
import CookiePage from "./pages/allCookies/allCookies";
import PinkSugar from "./pages/singleCookies/pinkSugar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cookies" element={<CookiePage />}></Route>
        <Route path="*" element={<Home />}></Route>
        <Route path="/pinkSugarCookie" element={<PinkSugar />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
