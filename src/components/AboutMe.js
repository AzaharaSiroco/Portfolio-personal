import React from "react";
import { Link } from "react-router-dom";
import Foto from "../images/itsme.PNG";

function AboutMe() {
  return (
    <>
      <section className="aboutme">
        <h1 className="aboutme__h1">¿Quieres saber más sobre mi?</h1>
        <p className="aboutme__text">
          Soy publicista, fotógrafa, y me apasiona el diseño. Mi última
          aventura, la programación web, en los siguientes apartados podrás ver
          mis proyectos.
        </p>
        <div className="aboutme__links">
          <div>
            <span className="aboutme__title">Programación</span>
            <a>
              <img className="programacion_img" src={Foto}></img>
            </a>
          </div>
          <div>
            <span className="aboutme__title">Fotografía</span>
            <a>
              <img className="fotografia_img" src={Foto}></img>
            </a>
          </div>
          <div>
            <span className="aboutme__title">Diseño</span>
            <a>
              <img className="diseño_img" src={Foto}></img>{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
