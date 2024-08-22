import React from "react";
import logo from "../assets/FATEC_ZONA_LESTE.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={logo} className='logo' alt='Logo Fatec Zona Leste' />
      <h1>Exercício 2-React</h1>
    </header>
  );
}

export default Header;
