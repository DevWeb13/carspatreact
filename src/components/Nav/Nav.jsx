import React from "react";
import { NavLink } from "react-router-dom";
import { toggleMenu } from "utils/utils";

function Nav({ active, setActive }) {
  return (
    <nav className={active ? "nav navActive" : "nav"}>
      <ul>
        <li>
          <NavLink
            to="/"
            onClick={() => toggleMenu(active, setActive)}
            className={(nav) => (nav.isActive ? "activLink" : "link")}
            tabIndex={active ? 0 : -1}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => toggleMenu(active, setActive)}
            className={(nav) => (nav.isActive ? "activLink" : "link")}
            tabIndex={active ? 0 : -1}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => toggleMenu(active, setActive)}
            className={(nav) => (nav.isActive ? "activLink" : "link")}
            tabIndex={active ? 0 : -1}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
