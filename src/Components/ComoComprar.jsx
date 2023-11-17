import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Comocomprar.css";
function ComoComprar() {
  return (
    <div>
      <h1 className="H1Comprar">Como Comprar</h1>
      <p className="pComprar1">Para comprar solamente debes decirnos la cantidad,talle e</p>
      <p className="pComprar2">ITEM</p>
      <p className="pComprar3">del producto que desee</p>
        <header className="headerComprar">
      <img className="IMGCOMPRAR" src="Images/Comocomprar.jpg" alt="COMOCOMPRAR" />
      </header>
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

export default ComoComprar;
