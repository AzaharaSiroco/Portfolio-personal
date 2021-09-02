import React from "react";
import OneDesign from "./OneDesign";
import designdata from "../data/designdata.json";

function Design() {
  const allDesign = designdata.map((poster) => {
    const keyDesign = poster.id.toString();

    return (
      <li key={keyDesign}>
        <OneDesign poster={poster} />
      </li>
    );
  });

  return (
    <>
      <section className="design_container">
        <ul className="desigList">{allDesign}</ul>
      </section>
    </>
  );
}

export default Design;
