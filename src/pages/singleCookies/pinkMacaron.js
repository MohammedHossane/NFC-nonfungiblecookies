import Header from "../../components/Header/header";
import pinkmacaron from "../../assets/pinkmacaron.png";
import "../singleCookies/singleCookies.css"

export default function pinkMacaron() {
  return (
    <div>
      <Header></Header>
      <img className="cookieImg" src={pinkmacaron} alt="pinkmacaron" />
      <h1 id="pinkMacaronText">Pink Matcha</h1>
      <p className="description">Matcha Macaron but pink!</p>
    </div>
  );
}
