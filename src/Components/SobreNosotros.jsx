import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import "../Styles/EstilosInfo.css";
function SobreNosotros() {
  return (
    <div>
      <div
        className="Header2"
        style={{
          marginTop: "10%",
        }}
      >
        <Link to={"/"}>
          <button className="Buttoninfo">
            <BiHomeAlt2 />
          </button>
        </Link>
        <h1 className="H1info">Sobre Nosotros</h1>
      </div>
      <div className="parrafo">
        <p
          className="Pinfo"
          style={{
            marginTop: "10%",
          }}
        >
          Somos un emprendimiento dedicado a la confección de prendas de vestir,
          y nos esforzamos al máximo para brindarte la más alta calidad a
          precios sumamente competitivos.
        </p>
      </div>
    </div>
  );
}

export default SobreNosotros;
