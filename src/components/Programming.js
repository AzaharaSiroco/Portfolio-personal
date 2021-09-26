import React from "react";

import Pgr1 from "../images/progrmacion/Rick.jpg";
import Pgr2 from "../images/progrmacion/blanket.jpg";
import Pgr3 from "../images/progrmacion/buscador.jpg";
import Pgr4 from "../images/progrmacion/Colmena.jpg";

function Programming() {
  return (
    <>
      <section className="programming_container">
        <div>
          <span className="program__title">
            Buscador intergaláctico de Rick & Morty
          </span>
          <a href="https://azaharasiroco.github.io/RickAndMorty/#/">
            <img
              alt="programming"
              className="programacion_img"
              src={Pgr1}
            ></img>
          </a>
        </div>
        <div>
          <span className="program__title">
            Crea tus propias tarjetas de visita
          </span>
          <a href="https://azaharasiroco.github.io/BlanketFy/">
            <img
              alt="programming"
              className="programacion_img"
              src={Pgr2}
            ></img>
          </a>
        </div>
        <div>
          <span className="program__title">Buscador de series de TV</span>
          <a href="https://azaharasiroco.github.io/Buscador-de-series/">
            <img
              alt="programming"
              className="programacion_img"
              src={Pgr3}
            ></img>
          </a>
        </div>
        <div>
          <span className="program__title">Maquetación</span>
          <a href="https://azaharasiroco.github.io/La-colmena/">
            <img
              alt="programming"
              className="programacion_img"
              src={Pgr4}
            ></img>
          </a>
        </div>
      </section>
    </>
  );
}

export default Programming;
