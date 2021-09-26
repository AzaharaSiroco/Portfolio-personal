import React from "react";

import foto1 from "../images/fotografias/PRISMA-3-6.jpg";
import foto2 from "../images/fotografias/SEBASTIANMALASPINA_AZAHARASIROCO-1-15.jpg";
import foto3 from "../images/fotografias/SEBASTIANMALASPINA_AZAHARASIROCO-1-20.jpg";
import foto4 from "../images/fotografias/SEBASTIANMALASPINA_AZAHARASIROCO-1-25.jpg";
import foto5 from "../images/fotografias/SEBASTIANMALASPINA_AZAHARASIROCO-1-30copia.jpg";
import foto6 from "../images/fotografias/SEBASTIANMALASPINA_AZAHARASIROCO-1-38.jpg";

function Photography() {
  return (
    <>
      <section className="photography_container">
        <div className="fotografias">
          <img alt="foto" className="foto_img" src={foto1}></img>
        </div>
        <div className="fotografias">
          <img alt="foto" className="foto_img" src={foto2}></img>
        </div>
        <div className="fotografias">
          <img alt="foto" className="foto_img" src={foto3}></img>
        </div>
        <div className="fotografias">
          <img alt="foto" className="foto_img" src={foto4}></img>
        </div>
        <div className="fotografias">
          <img alt="foto" className="foto_img" src={foto5}></img>
        </div>
        <div className="fotografias">
          <img alt="foto" className="foto_img" src={foto6}></img>
        </div>
      </section>
    </>
  );
}

export default Photography;
