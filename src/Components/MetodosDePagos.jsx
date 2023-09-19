import React from 'react'
import { Link } from 'react-router-dom'
import { BiHomeAlt2 } from "react-icons/bi";
import '../Styles/EstilosInfo.css'
function MetodosDePagos() {
  return (
    <div>
    <div className="Header2"
      style={{
        marginTop: "10%",
      }}>
    <Link to={"/"}>
      <button className="Buttoninfo">
        <BiHomeAlt2 />
      </button>
    </Link>
    <h1 className="H1info">Pagos</h1>
    </div>
<div className="parrafo"
  >
    <ul className="Pinfo" style={{
    marginTop: "10%",
  }}>
      <li className="Li1">Giros</li>
      <li className="Li1">Transferencias</li>
      <li className="Li1">Depósitos</li>
      <li className="Li1">Efectivo</li>
    </ul>
    </div>
  </div>
  )
}

export default MetodosDePagos
