import React from "react";
import { Link } from "react-router-dom";
import Foto from "../images/itsme.PNG";

function AboutMe() {
  return (
    <>
      <section className="aboutme" id="AboutMe">
        <h1 className="aboutme__h1">¿Quieres saber más sobre mi?</h1>
        <p className="aboutme__text">
          Soy publicista, fotógrafa, y me apasiona el diseño. Mi última
          aventura, la programación web, en los siguientes apartados podrás ver
          mis proyectos.
        </p>
      </section>
    </>
  );
}

export default AboutMe;
