
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#0f0f0f'}}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="./imagens/LogoNucleaNavbar.png" alt="Comunidade Nuclea" width="40" height="38" className="d-inline-block align-text-top" />
        </Link>
        <span className="navbar-brand mb-0 h1">Comunidade Nuclea</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">INÍCIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quemsomos">QUEM SOMOS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ministerios">MINISTÉRIOS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cultos">CULTOS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dizimoseofertas">DÍZIMOS E OFERTAS</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
