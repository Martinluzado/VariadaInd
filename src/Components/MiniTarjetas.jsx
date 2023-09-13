import React, { useState } from "react";
import "../Styles/MiniTarjeta.css";

function MiniTarjetas({ texto, infoRopa }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  const string = texto;
  let regex = new RegExp(string, "gi");

  let filtradosPorCategoria =
    categoriaSeleccionada === "Todas"
      ? infoRopa
      : infoRopa.filter((Dato) => Dato.Categoria === categoriaSeleccionada);

  let filtradosPorTexto = filtradosPorCategoria.filter((Dato) =>
    Dato.Nombre.match(regex)
  );

  // Ordenar por precio de menor a mayor
  filtradosPorTexto.sort((a, b) => a.Precio - b.Precio);

  const categorias = ["Todas", "Remeras", "Pantalones", "Shorts", "Camperas", "Buzos", "Conjuntos"]; // Define tus categorías aquí



  return (
    <div className="Back">
      <div className="General">
     {/* Botones de selección de categoría */}
     <div>
            <label className="Label" htmlFor="categoria" style={{color:"white"}}></label>
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
        {filtradosPorTexto.map((Dato) => (
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
        <p className="genero">TALLES : {Dato.Talle}</p>
        {Dato.Detalle ? (
          <p className="genero" style={ {color:"red",fontWeight:"bolder"}}>{Dato.Detalle}</p>
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
  ))}
</div>

  );
}

export default MiniTarjetas;
