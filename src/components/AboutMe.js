import React, { useEffect } from "react";
import data from "../data/aboutme.json";

function AboutMe() {
  const handleclick = () => {
    const number = 0 + Math.floor(Math.random() * data.length);
    console.log(number);

    const random = data[number];
    console.log(random);

    const aboutme = data.map((aboutme) => {
      return <li key={aboutme.id} description={aboutme.description}></li>;
    });
    console.log(aboutme.description);
  };

  return (
    <>
      <section className="aboutme" id="AboutMe">
        <h1 className="aboutme__h1">¿Quieres saber más sobre mi?</h1>
        <p className="aboutme__text">
          Soy publicista, fotógrafa, y me apasiona el diseño. Mi última
          aventura, la programación web, ¿Quieres saber más sobre mi? Pulsa el
          botón, y continúa averiguando.
        </p>
        <button onClick={handleclick} className="aboutme__button">
          Enséñame más
        </button>
      </section>
    </>
  );
}

export default AboutMe;
