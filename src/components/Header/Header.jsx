import React from "react";
import { Link } from "react-router-dom";
import { toggleMenu } from "utils/utils";

const Header = ({ active, setActive }) => {
  return (
    <header
      className={
        active ? "headerContainer headerContainerActive" : "headerContainer"
      }
    >
      <button className="btMenu" onClick={() => toggleMenu(active, setActive)}>
        <span>Menu</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
      <div className="logo">
        <Link to="/" className="logoLink">
          <img src="/assets/logoCarsPatShadowWhite.png" alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
