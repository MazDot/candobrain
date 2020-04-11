import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BackStyles = styled.nav`
 .navbar {
   background-color: #202020;
 }
`;

function Navbar() {
  return (
    <BackStyles>
    <nav className="navbar navbar-expand-lg ">
      <a className="navbar-brand ml-5" href="/">
        <img src={logo} alt="logo" style={{ width: '40px' }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars" style={{ color: '#fff' }} />
        </span>
      </button>
      

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase ml-5" to="/">
              Home&nbsp;
              <i className="fas fa-home" />
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase ml-5" to="/braingames">
              Games&nbsp;
              <i className="fas fa-home" />
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="/About"
            >
              about
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </BackStyles>
  );
}

export default Navbar;
