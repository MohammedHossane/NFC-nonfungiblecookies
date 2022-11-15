import Header from "../../components/Header/header";
import invisiblesugarcookie from "../../assets/invisiblesugarcookie.png";
import "../singleCookies/singleCookies.css"

export default function invisibleSugar() {
  return (
    <div>
      <Header></Header>
      <img className="cookieImg" src={invisiblesugarcookie} alt="invisiblesugarcookie" />
      <h1 id="invisSugarCookieText">Invisible Night Icing</h1>
      <p className="description">Litteraly just icing.</p>
    </div>
  );
}
