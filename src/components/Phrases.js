import React from "react";

function Phrases(props) {
  return (
    <>
      <div className="phrases">
        <ul className="phrases__list" key={props.aboutme.id}>
          <li className="phrasesita"> {props.aboutme.description} </li>
        </ul>
      </div>
    </>
  );
}

export default Phrases;
