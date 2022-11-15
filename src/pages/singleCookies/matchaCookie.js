import Header from "../../components/Header/header";
import matchacookie from "../../assets/matchacookie.png";
import "../singleCookies/singleCookies.css"

export default function matchaCookie() {
  return (
    <div>
      <Header></Header>
      <img className="cookieImg" src={matchacookie} alt="matchacookie" />
      <h1 id="matchaCookieText">Matcha Grass</h1>
      <p className="description">Cookie made of matcha grass found in a 139mph wind speed field.</p>
    </div>
  );
}
