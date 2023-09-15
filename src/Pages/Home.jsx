import React, { useState } from 'react'
import Header from './Header'
import {Datos} from '../Data/Datos'
import MiniTarjetas from '../Components/MiniTarjetas';
import '../Styles/Home.css'

function Home() {
    const [infoRopa, SetInfoRopa] = useState(Datos);
    const [texto, setTexto] = useState("");
    const manejarInput = (e) => {
      
      setTexto(e.target.value);
    };
  return (
    <div>
      <Header/>
      <nav>
         <div className='PascalSearch'>
          <input
            autoFocus="none"
            className='Imputheader'
            type='text' 
            placeholder='Buscar'
            onChange={manejarInput}
          />
        </div>
      </nav>
      <div>
        <MiniTarjetas texto={texto} infoRopa={infoRopa} />
      </div>  
    </div>
  )
}

export default Home
