import Header from "../../components/Header/header";
import "../Home/home.css";
import anothercookipic2 from "../../assets/anothercookipic2.png";
import React from "react";

export default function Home() {
  return (
    <div className="border">
      <Header></Header>
      <img
        style={{
          width: 1288,
          height: 756,
          left: 112,
          top: 155,
          borderRadius: 15,
          position: "absolute",
        }}
        src={anothercookipic2}
        alt="bigcookiepic"
      />
    </div>
  );
}
