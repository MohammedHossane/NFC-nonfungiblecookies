import Header from "../../components/Header/header";
import pinksugarcookie from "../../assets/pinksugarcookie.png";
import "../singleCookies/singleCookies.css"

export default function pinkSugar() {
  return (
    <div>
      <Header></Header>
      <img className="cookieImg" src={pinksugarcookie} alt="pinksugarcookie" />
      <h1 id="pinkSugarCookieText">Pink Unicorn Dust</h1>
      <p className="description">Sugar Cookie with icing made of a pink unicorn!</p>
    </div>
  );
}
