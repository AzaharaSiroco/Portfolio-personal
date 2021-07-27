import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header_container">
      <nav className="nav__header">
        <ul className="header__list">
          <Link to="/">
            <a href="#Hero" className="header__list__item">
              {" "}
              Home{" "}
            </a>
          </Link>
          <Link to="/AboutMe">
            <li className="header__list__item"> About Me </li>
          </Link>
          <Link to="/Work">
            <li className="header__list__item"> Work </li>
          </Link>
          <Link to="/Contact">
            <a
              href="#contactPage"
              target="_blank"
              className="header__list__item"
            >
              {" "}
              Contact{" "}
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
