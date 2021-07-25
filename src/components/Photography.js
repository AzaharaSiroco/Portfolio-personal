import React from "react";
import catimage from "../images/gato.png";
import { Link } from "react-router-dom";

function Photography() {
  return (
    <section className="photography_container">
      <h1>FOTOGRAFIA</h1>
      <img src={catimage}></img>
    </section>
  );
}

export default Photography;
