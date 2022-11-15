import Header from "../../components/Header/header";
import trump from "../../assets/obamaV2.png";
import "../singleCookies/singleCookies.css"

export default function trumpCookie() {
  return (
    <div>
      <Header></Header>
      <img className="cookieImg" src={trump} alt="trump" />
      <h1 id="trumpCookieText">ObamaV2</h1>
      <p className="description">Its almost as good as his hair.</p>
    </div>
  );
}
