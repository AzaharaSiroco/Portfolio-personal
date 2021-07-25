import React from "react";
import { Link } from "react-router-dom";
import Foto from "../images/itsme.PNG";

function AboutMe() {
  return (
    <>
      <section className="about-me">
        <img alt="ASAJARA" src={Foto}></img>
        <h1>Azahara</h1>
      </section>
    </>
  );
}

export default AboutMe;
