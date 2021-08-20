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
            <span className="work__title">Programación</span>
            <a href="Work/Programming">
              <Link to="Programming">
                <img
                  alt="programming"
                  className="programacion_img"
                  src={foto_progra}
                ></img>
              </Link>
            </a>
          </div>
          <div>
            <span className="work__title">Fotografía</span>
            <a href="Work/Photography">
              <Link to="Photography">
                <img
                  alt="photography"
                  className="fotografia_img"
                  src={foto_foto}
                ></img>
              </Link>
            </a>
          </div>
          <div>
            <span className="work__title">Diseño</span>
            <a href="Work/Design">
              <Link to="Design">
                <img
                  alt="design"
                  className="diseño_img"
                  src={foto_design}
                ></img>{" "}
              </Link>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
