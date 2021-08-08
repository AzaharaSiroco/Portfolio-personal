import React from "react";
import { Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import HeroMain from "./HeroMain";

function Header() {
  return (
    <header className="header_container">
      <nav className="nav__header">
        <ul className="header__list">
          <li className="header__list__item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="header__list__item">
            <Link to="/AboutMe"> About Me</Link>
          </li>
          <li className="header__list__item">
            <Link to="Work"> Work</Link>
          </li>
          <li target="_blank" className="header__list__item">
            <Link to={"/Contact"}> Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
