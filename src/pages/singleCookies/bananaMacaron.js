import Header from "../../components/Header/header";
import yellowmacaron from "../../assets/bananamacron.png";
import "../singleCookies/singleCookies.css"

export default function bananaMacaron() {
  return (
    <div>
      <Header></Header>
      <img className="cookieImg" src={yellowmacaron} alt="yellowmacaron" />
      <h1 id="bananaMacaron">Bannana Pepper</h1>
      <p className="description">Spicy Macarons made from a banana tree!</p>
    </div>
  );
}
