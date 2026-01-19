import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from "./componente/Navbar"
import Foot from "./componente/Footer"
import Nosotros from './paginas/Nosotros'
import Inicio from './paginas/Inicio'
import Servicios from './paginas/Servicios'
import Contacto from './paginas/Contacto'
import Menu from './paginas/Menu'
import './main.css'

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Foot />
    </>
  )
}

export default App