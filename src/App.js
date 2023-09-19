import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import SobreNosotros from './Components/SobreNosotros';
import MetodosDePagos from './Components/MetodosDePagos';
import MetodosDeEnvios from './Components/MetodosDeEnvios';
import TarjetaEntera from './Components/TarjetaEntera';
import ListaProductos from './Data/Datos'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route
            path='/:ProductosNombre'
            element={<TarjetaEntera infoRopa={ListaProductos}/>}>
            {" "}
          </Route>
          <Route path='/SobreNosotros' element={<SobreNosotros />}></Route>
          <Route path='/MetodosDePagos' element={<MetodosDePagos />}></Route>
          <Route path='/MetodosDeEnvios' element={<MetodosDeEnvios />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
