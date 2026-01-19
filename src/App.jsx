import { useState } from 'react'
import './main.css'
import { BrowserRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
import Nav from "./componente/Navbar"
import Foot from "./componente/Footer"
import Nosotros from './paginas/Nosotros';  
import Inicio from './paginas/Inicio';
import Servicios from './paginas/Servicios';
import Contacto from './paginas/Contacto';
import Menu from './paginas/Menu'
import productos from './data/productos.json';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Router>  {/* Envolvemos toda la app en Router */}
      <Nav />
      <Routes>
          <Route path="/" element={<Inicio />} /> {/* Esta será la página principal */}
         <Route path="/inicio" element={<Inicio />} /> {/* Esta será la página principal */}
          <Route path="/menu" element={<Menu />} /> {/* Esta será la página principal */}
        <Route path="/nosotros" element={<Nosotros />} />{/* Otras rutas */}
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Foot />
    </Router>
    </>
  )

}

export default App
