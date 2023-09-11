import React from "react";
import "../Styles/Header.css";

function Header() {
  return (
    <div className="HeaderGeneral">
      <img src="Images/Logo.png" alt="Variada indumentaria logo" className="titulo"/>
      <div className="assideHeader">
        <button className="bHeader">Sobre Nosotros</button>
        <button className="bHeader">Metodos de envio</button>
        <button className="bHeader">Metodos de pagos</button>
        <button className="bHeader">Contactanos</button>
      </div>
    </div>
  );
}

export default Header;
