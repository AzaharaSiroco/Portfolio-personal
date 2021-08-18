import React from "react";
import { Link } from "react-router-dom";
import foto_foto from "../images/fotografia.jpg";
import foto_design from "../images/diseño.jpg";
import foto_progra from "../images/programacion.jpg";
import Programming from "../components/Programming";

function Work() {
  return (
    <>
      <section className="work_container">
        <h1 className="work_title">Proyectos</h1>
        <div className="work__links">
          <div onClick>
            <span className="work__title">Programación</span>
            <a>
              <Link to="Programming">
                <img className="programacion_img" src={foto_progra}></img>
              </Link>
            </a>
          </div>
          <div>
            <span className="work__title">Fotografía</span>
            <a>
              <Link to="Photography">
                <img className="fotografia_img" src={foto_foto}></img>
              </Link>
            </a>
          </div>
          <div>
            <span className="work__title">Diseño</span>
            <a>
              <Link to="Design">
                <img className="diseño_img" src={foto_design}></img>{" "}
              </Link>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
