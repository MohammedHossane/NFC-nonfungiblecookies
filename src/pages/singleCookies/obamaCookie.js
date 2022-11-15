import Header from "../../components/Header/header";
import obama from "../../assets/obama.png";
import "../singleCookies/singleCookies.css"

export default function obamaCookie() {
  return (
    <div>
      <Header></Header>
      <img className="cookieImg" src={obama} alt="obama" />
      <h1 id="obamaCookieText">ObamaV1</h1>
      <p className="description">ObamaV1, first Obama line up cookie.</p>
    </div>
  );
}
