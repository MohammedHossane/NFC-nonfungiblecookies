import Header from "../../components/Header/header";
import whitesugarcookie from "../../assets/whitesugarcookie.png";
import "../singleCookies/singleCookies.css"

export default function whiteSugar() {
  return (
    <div>
      <Header></Header>
      <img className="cookieImg" src={whitesugarcookie} alt="whitesugarcookie" />
      <h1 id="pinkSugarCookieText">Snow White White</h1>
      <p className="description">Sugar Cookie with icing made of snow white white!</p>
    </div>
  );
}
