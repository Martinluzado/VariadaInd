import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import SobreNosotros from './Components/SobreNosotros';
import MetodosDePagos from './Components/MetodosDePagos';
import MetodosDeEnvios from './Components/MetodosDeEnvios';
import Contactanos from './Components/Contactanos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/SobreNosotros' element={<SobreNosotros />}></Route>
          <Route path='/MetodosDePagos' element={<MetodosDePagos />}></Route>
          <Route path='/MetodosDeEnvios' element={<MetodosDeEnvios />}></Route>
          <Route path='/Contactanos' element={<Contactanos />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
