import Header from "../../components/Header/header";
import biden from "../../assets/obamaV3.png";
import "../singleCookies/singleCookies.css"

export default function bidenCookie() {
  return (
    <div>
      <Header></Header>
      <img className="cookieImg" src={biden} alt="biden" />
      <h1 id="ObamaV3CookieText">ObamaV3</h1>
      <p className="description">Sugar cookie that ObamaV3 made.</p>
    </div>
  );
}
