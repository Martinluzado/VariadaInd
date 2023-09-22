import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/MiniTarjeta.css";
import Datos from "../Data/Datos";

function MiniTarjetas({ texto, infoRopa }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    "Seleccionar Categoria"
  );
  const [productosAMostrar, setProductosAMostrar] = useState(10); // Cambia este valor según tus necesidades
  const cargarMasProductos = () => {
    // Aumenta la cantidad de productos a mostrar
    setProductosAMostrar(productosAMostrar + 10);
  };

  const string = texto;
  let regex = new RegExp(string, "gi");

  let filtradosPorCategoria =
    categoriaSeleccionada === "Seleccionar Categoria"
      ? infoRopa
      : infoRopa.filter((Dato) => Dato.Categoria === categoriaSeleccionada);

  let filtradosPorTexto = filtradosPorCategoria.filter((Dato) =>
    Dato.Nombre.match(regex)
  );

  // Verificar si hay talles disponibles
  const tallesDisponibles = Datos.Talle && Datos.Talle.length > 0;

  // Ordenar por precio de menor a mayor
  filtradosPorTexto.sort((a, b) => a.Precio - b.Precio);

  const categorias = [
    "Seleccionar Categoria",
    "Remeras",
    "Pantalones",
    "Shorts",
    "Camperas",
    "Buzos",
    "Conjuntos",
    "Gorros",
    "Accesorios",
    "Perfumes",
  ]; // Define tus categorías aquí

  return (
    <div className="Back">
      <div className="General">
        {/* Botones de selección de categoría */}
        <div>
          <label
            className="Label"
            htmlFor="categoria"
            style={{ color: "white" }}
          ></label>
          <select
            id="categoria"
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            value={categoriaSeleccionada}
          >
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>
      </div>
      {filtradosPorTexto.slice(0, productosAMostrar).map((Dato) => (
        <Link style={{ textDecoration: "none" }} to={`/${Dato.Nombre}`}>
          <div className="Tarjeta" key={Dato.ID}>
            <p className="ID">${Dato.Precio}</p>
            <img className="ImagenChica" src={Dato.Img} alt="" />
            <div
              style={{
                textAlign: "left",
                alignItems: "left",
                marginLeft: "10px",
              }}
            >
              <p className="nombre">{Dato.Nombre}</p>
              {/* Mostrar el elemento "TALLES" solo si hay talles disponibles */}
              {tallesDisponibles && (
                <p className="genero2">TALLES : {Dato.Talle}</p>
              )}

              {Dato.Detalle ? (
                <p
                  className="genero"
                  style={{ color: "red", fontWeight: "bolder" }}
                >
                  {Dato.Detalle}
                </p>
              ) : (
                <br /> // Mostrar <br> si Dato.Detalle está vacío
              )}
              <div
                style={{ display: "flex", flexDirection: "row", gap: "5px" }}
              >
                <div
                  className="colores1"
                  style={{ backgroundColor: `${Dato.Color}` }}
                ></div>
                <div
                  className="colores2"
                  style={{ backgroundColor: `${Dato.ColorSecundario}` }}
                ></div>
              </div>
            </div>
            
          </div>
        </Link>
        
      ))}
       {/* Botón "Ver más productos" */}
       {productosAMostrar < filtradosPorTexto.length && (
        <button onClick={cargarMasProductos}>Ver más productos</button>
      )}
    </div>
  );
}

export default MiniTarjetas;
