import React from "react";
import { Link } from "react-router-dom";
import Foto from "../images/itsme.PNG";

function AboutMe() {
  {
    /* const aboutme__button = () => {*/
  }

  return (
    <>
      <section className="aboutme" id="AboutMe">
        <h1 className="aboutme__h1">¿Quieres saber más sobre mi?</h1>
        <p className="aboutme__text">
          Soy publicista, fotógrafa, y me apasiona el diseño. Mi última
          aventura, la programación web, ¿Quieres saber más sobre mi? Pulsa el
          botón, y continúa averiguando.
        </p>
        <button className="aboutme__button">Enséñame más</button>
      </section>
    </>
  );
}

export default AboutMe;
