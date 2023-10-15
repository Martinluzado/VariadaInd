// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SobreNosotros from "./Components/SobreNosotros";
import MetodosDePagos from "./Components/MetodosDePagos";
import MetodosDeEnvios from "./Components/MetodosDeEnvios";
import TarjetaEntera from "./Components/TarjetaEntera";
import ListaProductos from "./Data/Datos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/:ProductosNombre"
            element={<TarjetaEntera infoRopa={ListaProductos} />}
          ></Route>
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/MetodosDePagos" element={<MetodosDePagos />} />
          <Route path="/MetodosDeEnvios" element={<MetodosDeEnvios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;







