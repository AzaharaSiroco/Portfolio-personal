import React from "react";

function Phrases(props) {
  return (
    <>
      <div className="phrases">
        <ul className="phrases__list" key={props.id}>
          <li className="phrasesita"> {props.description} </li>
        </ul>
      </div>
    </>
  );
}

export default Phrases;
