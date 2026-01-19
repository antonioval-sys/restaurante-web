 /*
 function Nav (){
 return(
 <nav>
      <div className="nav-container">
        <a href="index.html" className="logo">Trattoria Moderna</a>
        <button className="menu-btn">☰</button>
        <ul className="nav-links">
          <li><a href="index.html">Inicio</a></li>
          <li><a href="nosotros.html">Sobre Nosotros</a></li>
          <li><a href="menu.html">Menu</a></li>
          <li><a href="servicio.html">Servicio</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </div>
    </nav>
 )};
 export default Nav
 */
import React from 'react';
 import { Link } from "react-router-dom";

 import { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
    <nav>

      <div className="nav-container">
       <Link to="/inicio" className="logo">Trattoria Moderna</Link>

        <button
          className="menu-btn"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "X" : "☰"}
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
           <li><Link to="/inicio" onClick={closeMenu}>Inicio</Link></li>
            <li><Link to="/nosotros" onClick={closeMenu}>Sobre Nosotros</Link></li>
            <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
            <li><Link to="/servicios" onClick={closeMenu}>Servicios</Link></li>
            <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
    </header>
  );
}

export default Nav;

/* como estaba lon link que es incorrecto en react
   <li><a href="/" onClick={closeMenu}>Inicio</a></li>
          <li><a href="/nosotros" onClick={closeMenu}>Sobre Nosotros</a></li>
          <li><a href="/menu" onClick={closeMenu}>Menu</a></li>
          <li><a href="/servicio" onClick={closeMenu}>Servicio</a></li>
          <li><a href="/contacto" onClick={closeMenu}>Contacto</a></li>
*/
