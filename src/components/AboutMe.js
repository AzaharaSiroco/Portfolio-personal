import React from "react";

const handleclick = () => {
  const isClicked = true;
  if (isClicked) {
    return (
      <>
        <p className="handleFrase"> Hola, hola </p>;
      </>
    );
  }
};

function AboutMe() {
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
console.log("handleclick", handleclick);
export default AboutMe;
