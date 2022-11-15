import Header from "../../components/Header/header";
import redcookie from "../../assets/redvelvetcookie.png";
import "../singleCookies/singleCookies.css"

export default function mushroomCookie() {
  return (
    <div>
      <Header></Header>
      <img className="cookieImg" src={redcookie} alt="mushroom" />
      <h1 id="mushroomCookieText">Mushroom</h1>
      <p className="description">Cookie made of a poisonous mushroom.</p>
    </div>
  );
}
