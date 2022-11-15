import Header from "../../components/Header/header";
import bluemacaron from "../../assets/bluemacaron.png";
import "../singleCookies/singleCookies.css"

export default function blueMacaron() {
  return (
    <div>
      <Header></Header>
      <img className="cookieImg" src={bluemacaron} alt="bluemacraron" />
      <h1 id="blueMacaronText">Blue.</h1>
      <p className="description">Blue.</p>
    </div>
  );
}
