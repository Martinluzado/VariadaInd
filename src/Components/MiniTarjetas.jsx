import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/MiniTarjeta.css";
import Datos from "../Data/Datos";

function MiniTarjetas({ texto, infoRopa }) {
  const storedCategoria = localStorage.getItem("categoriaSeleccionada");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    storedCategoria || "Todo"
  );

  const string = texto;
  let regex = new RegExp(string, "gi");

  let filtradosPorCategoria =
    categoriaSeleccionada === "Todo"
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
    "Todo",
    "Remeras",
    "Pantalones",
    "Shorts",
    "Camperas",
    "Buzos",
    "Conjuntos",
    "Gorros",
    "Accesorios",
    "Perfumes",
    "Fitness",
    "Calzados",
    "Musculosas",
  ]; // Define tus categorías aquí

  useEffect(() => {
    // Guardar la categoría seleccionada en localStorage
    localStorage.setItem("categoriaSeleccionada", categoriaSeleccionada);
  }, [categoriaSeleccionada]);

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
            style={{ background: "#5c6370", color: "white", marginTop:"20px"}}
          >
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>
      </div>
          <p style={{color:"white",marginBottom:"2em",marginTop:"10px",width:"100%", textAlign:"center"}}>Por favor selecciona que deseeas ver</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5em",
        }}
      >
        {filtradosPorTexto.map((Dato) => (
          <Link
            key={Dato.ID}
            style={{ textDecoration: "none" }}
            to={`/${Dato.Nombre}`}
          >
            <div className="Tarjeta">
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
                    style={{
                      backgroundColor: `${Dato.ColorSecundario}`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MiniTarjetas;
