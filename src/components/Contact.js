import React from "react";

function Contact() {
  return (
    <>
      <section id="contactPage" className="contact">
        <h2 className="contact__title">Contacto</h2>
        <p className="contact__text">
          Si te ha gustado mi portfolio, y crees que podríamos trabajar junt@s,
          no dudes en contatar conmigo.
        </p>
        <p className="contact__text">Mediante e-mail:</p>
        <a className="contact__link" href="mailto:azahara1359@gmail.com">
          azahara1359@gmail.com
        </a>
        <p className="contact__text">O rellenando este formulario:</p>
        <div className="containerform">
          <form
            className="containerform__form"
            action="https://getform.io/f/50572065-131e-42d8-a9db-1066cbd26b14"
            method="POST"
          >
            <label className="containerform__label" htmlFor="fname">
              Nombre
            </label>
            <input
              className="containerform__input"
              type="text"
              id="fname"
              name="firstname"
              placeholder="Tu nombre.."
            />

            <label className="containerform__label" htmlFor="lname">
              Apellido
            </label>
            <input
              className="containerform__input"
              type="text"
              id="lname"
              name="lastname"
              placeholder="Apellido.."
            />
            <label htmlFor="email" className="containerform__label">
              Email
            </label>
            <input
              className="containerform__input"
              type="mail"
              id="email"
              name="email"
              placeholder="tuemail@email.com"
            />

            <label htmlFor="subject" className="containerform__label">
              Mensaje
            </label>
            <textarea
              className="containerform__textarea"
              id="subject"
              name="subject"
              placeholder="Escribe tu texto.."
            />

            <input
              className="containerform__submit"
              type="submit"
              value="Enviar"
            />
          </form>
        </div>
      </section>
    </>
  );
}
export default Contact;
