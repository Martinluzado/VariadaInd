import React from 'react'
import { Link } from 'react-router-dom'
import { BiHomeAlt2 } from "react-icons/bi";
import '../Styles/EstilosInfo.css'
function MetodosDeEnvios() {
  return (
    <div>
    <div className="Header2" style={{
    marginTop: "10%",
  }}>
    <Link to={"/"}>
      <button className="Buttoninfo">
        <BiHomeAlt2 />
      </button>
    </Link>
    <h1 className="H1info">Envios</h1>
    </div>
<div className="parrafo">
    <p className="Pinfo" style={{
    marginTop: "10%",
  }}>
      El envío se realiza a partir de coordinar con el comprador.
    </p>
    </div>
  </div>
  )
}

export default MetodosDeEnvios
