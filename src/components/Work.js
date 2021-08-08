import React from "react";
import { Link } from "react-router-dom";
import foto_foto from "../images/fotografia.jpg";
import foto_design from "../images/diseño.jpg";
import foto_progra from "../images/programacion.jpg";

function Work() {
  return (
    <>
      <section className="work_container">
        <h1 className="work_title">Proyectos</h1>
        <div className="work__links">
          <div>
            <span className="aboutme__title">Programación</span>
            <a>
              <img className="programacion_img" src={foto_progra}></img>
            </a>
          </div>
          <div>
            <span className="aboutme__title">Fotografía</span>
            <a>
              <img className="fotografia_img" src={foto_foto}></img>
            </a>
          </div>
          <div>
            <span className="aboutme__title">Diseño</span>
            <a>
              <img className="diseño_img" src={foto_design}></img>{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
