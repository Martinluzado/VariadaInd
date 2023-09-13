import React from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="HeaderGeneral">
      <img
        src="Images/Logo.png"
        alt="Variada indumentaria logo"
        className="titulo"
      />
      <div className="assideHeader">
        <Link to={"/SobreNosotros"}>
          <button className="bHeader">Sobre Nosotros</button>
        </Link>
        <Link to={"/MetodosDeEnvios"}>
          <button className="bHeader">Metodos de envio</button>
        </Link>
        <Link to={"/MetodosDePagos"}>
          <button className="bHeader">Metodos de pagos</button>
        </Link>
        <Link to={"/Contactanos"}>
          <button className="bHeader">Contactanos</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
