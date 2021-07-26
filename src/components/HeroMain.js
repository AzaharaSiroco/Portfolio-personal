import React from "react";
import HeroImg from "../images/HeroImg.jpg";
import { Link } from "react-router-dom";
function HeroMain() {
  return (
    <>
      <div className="HeroMain_container">
        <img id="Hero" className="Hero__image" src={HeroImg} alt="Hero image" />
      </div>
    </>
  );
}

export default HeroMain;
