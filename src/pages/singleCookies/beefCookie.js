import Header from "../../components/Header/header";
import chocolatecookie from "../../assets/chocolatechipcookie.png";
import "../singleCookies/singleCookies.css"

export default function beefCookie() {
  return (
    <div>
      <Header></Header>
      <img className="cookieImg" src={chocolatecookie} alt="beef" />
      <h1 id="beefCookieText">Beef</h1>
      <p className="description">Cookie made of Japan cow.</p>
    </div>
  );
}
