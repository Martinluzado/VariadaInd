import React from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/TarjetaEntera.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const TarjetaEntera = ({ infoRopa }) => {
  const params = useParams();
  let Productos = infoRopa.filter(function (productos) {
    return productos.Nombre === params.ProductosNombre;
  })[0];

  // Verificar si hay talles disponibles
  const tallesDisponibles = Productos.Talle && Productos.Talle.length > 0;

  return (
    <div>
      <div className="Back2">
        <div className="Tarjeta2" key={Productos.ID}>
          <p className="ID2">${Productos.Precio}</p>
          <p className="ID3">ITEM:{Productos.id}</p>
          <img className="ImagenChica2" src={Productos.Img} alt="" />
          <div
            style={{
              textAlign: "left",
              alignItems: "left",
              marginLeft: "10px",
            }}
          >
            <p className="nombre2">{Productos.Nombre}</p>

            {/* Mostrar el elemento "TALLES" solo si hay talles disponibles */}
            {tallesDisponibles && (
              <p className="genero2">TALLES : {Productos.Talle}</p>
            )}

            {Productos.Detalle ? (
              <p
                className="genero2"
                style={{ color: "red", fontWeight: "bolder" }}
              >
                {Productos.Detalle}
              </p>
            ) : (
              <br /> // Mostrar <br> si Dato.Detalle está vacío
            )}
            <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
              <div className="colores1.1"></div>
              <div className="colores2.2"></div>
            </div>
          </div>
        </div>
      </div>
      <footer className="Footer2">
        <Link to="/">
          <button className="Flecha">
            <BiHomeAlt2 />
          </button>
        </Link>
        <button className="Flecha2">
          <a
            href="https://api.whatsapp.com/send?phone=+598099662554"
            style={{ textDecoration: "none", color: "white" }}
          >
            <AiOutlineWhatsApp />
          </a>
        </button>
      </footer>
      <br />
      <div className="comoComprar">
        <h1 className="hComoComprar">Como comprar!</h1>
        <p className="pComoComprar">
          Para poder comprar envianos un mensaje con el Item del producto, el
          cual se encuentra en la parte superiro derecha de la tarjeta del
          producto.
        </p>
        <p className="pComoComprar">
          Decir el talle deseado a comprar y la cantidad que se deseean.
        </p>
        <br />
        <p className="pComoComprar"
        style={{textDecoration:"underLine"}}>
          ¡GRACIAS!
        </p>
      </div>
    </div>
  );
};

export default TarjetaEntera;
