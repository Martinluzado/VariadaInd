import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import "../Styles/Estilos1.css";
function SobreNosotros() {
  return (
    <div>
      <div
        className="Header2"
        style={{
          marginTop: "10%",
        }}
      >
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
      <div className="CenterButton">
      <Link to={"/"}>
            <button className="Buttoninfo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                />
                <path
                  fill="currentColor"
                  d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                />
              </svg>
            </button>
          </Link>
          </div>
    </div>
  );
}

export default SobreNosotros;
