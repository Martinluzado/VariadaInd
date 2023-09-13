import React from 'react'
import { Link } from 'react-router-dom'
import { BiHomeAlt2 } from "react-icons/bi";
import '../Styles/EstilosInfo.css'
function MetodosDePagos() {
  return (
    <div>
    <div className="Header2">
    <Link to={"/"}>
      <button className="Buttoninfo">
        <BiHomeAlt2 />
      </button>
    </Link>
    <h1 className="H1info">Pagos</h1>
    </div>
<div className="parrafo">
    <p className="Pinfo">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
      repellendus, veritatis sunt, ipsum exercitationem delectus commodi id
      officia ad aspernatur corporis maxime, recusandae quas error eligendi
      dolore. Doloribus, ratione dolores?
    </p>
    </div>
  </div>
  )
}

export default MetodosDePagos
