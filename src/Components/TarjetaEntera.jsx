import React, { useState } from "react";
import {useParams } from "react-router-dom";
import "../Styles/TarjetaEntera.css";
import Headers from "../Pages/Header"

const TarjetaEntera = ({ infoRopa }) => {
  const params = useParams();
  let Productos = infoRopa.filter(function (productos) {
    return productos.Nombre === params.ProductosNombre;
  })[0];

  // Verificar si hay talles disponibles
  const tallesDisponibles = Productos.Talle && Productos.Talle.length > 0;
  const [imagenAgrandada, setImagenAgrandada] = useState(false);
  const toggleImagenAgrandada = () => {
    setImagenAgrandada(!imagenAgrandada);
  };
  return (
    <div>
        <Headers/>
      <div className="Back2">
        <div className="Tarjeta2" key={Productos.ID}>
          <p className="ID2">${Productos.Precio}</p>
          <p className="ID3">ITEM:{Productos.id}</p>
          <img
            className={`ImagenChica2 ${imagenAgrandada ? "Agrandada" : ""}`}
            src={Productos.Img}
            alt=""
            onClick={toggleImagenAgrandada}
          />
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
      <div className="comoComprar">
        <h1 className="hComoComprar">Como comprar?</h1>
        <p className="pComoComprar">
          Para comprar envianos un mensaje con el Item del producto, el
          cual se encuentra en la parte superior derecha de la tarjeta.
        </p>
        <p className="pComoComprar">
          Decir el talle deseado a comprar y la cantidad que se desee.
        </p>
      </div>
    </div>
  );
};

export default TarjetaEntera;
