import React from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/TarjetaEntera.css";
import { BiHomeAlt2 } from "react-icons/bi";

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
              <div
                className="colores1.1"
                style={{ backgroundColor: `${Productos.Color}` }}
              ></div>
              <div
                className="colores2.2"
                style={{ backgroundColor: `${Productos.ColorSecundario}` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <footer className="Footer2">
        <Link to="/">
          <button className="Flecha"><BiHomeAlt2/></button>
        </Link>
      </footer>
    </div>
  );
};

export default TarjetaEntera;

