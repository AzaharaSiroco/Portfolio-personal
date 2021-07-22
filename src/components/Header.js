import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header_container">
      <div>
        <ul className="header__list">
          <Link to="/">
            <li className="header__list__item"> Home </li>
          </Link>
          <Link to="/AboutMe">
            <li className="header__list__item"> Azahara </li>
          </Link>
          <Link to="/Work">
            <li className="header__list__item"> Work </li>
          </Link>
          <Link to="/Contact">
            <li className="header__list__item"> Contact </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
