import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img
        src="https://img.restaurantguru.com/r021-Restaurant-Las-Flores-Mariscos-Carnes-Antojitos-emblem-2022-08.jpg"
        alt="Logo de la empresa"
        className="logo"
      />
      <h1 className="title">RESTAURANTE FLORES</h1>
      <Link to="/panel" className="panel-link">
        <button className="panel-button">Ir al Panel</button>
      </Link>
    </header>
  );
}

export default Header;
