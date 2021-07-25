import React from "react";
import HeroImg from "../images/HeroImg.jpg";

function HeroMain() {
  return (
    <>
      <div className="HeroMain_container">
        <img className="Hero__image" src={HeroImg} alt="Hero image" />
      </div>
    </>
  );
}

export default HeroMain;
