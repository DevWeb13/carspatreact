import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import toggleMenu from '../../utils/utils';
import Nav from '../Nav/Nav';

function Header({ active, setActive }) {
  return (
    <header
      className={
        active ? 'headerContainer headerContainerActive' : 'headerContainer'
      }
    >
      <button
        type="button"
        className="btMenu"
        onClick={() => toggleMenu(active, setActive)}
      >
        <span>Menu</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </button>
      <div className="logo">
        <Link to="/" className="logoLink">
          <img src="/assets/logoCarsPatShadowWhite.png" alt="logo" />
        </Link>
      </div>
      <Nav active={active} setActive={setActive} />
    </header>
  );
}

Header.propTypes = {
  active: propTypes.bool.isRequired,
  setActive: propTypes.func.isRequired,
};

export default Header;
