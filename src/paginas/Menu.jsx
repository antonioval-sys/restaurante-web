import { useState } from 'react';
import { Link } from "react-router-dom";
import Producto from "../componente/Producto";
import productos from '../data/productos.json';
import SeccionProductos from "../componente/Producto";

function Menu () {
   const [categoria, setCategoria] = useState(productos.aperitivos);
   
const [tituloActual, setTituloActual] = useState("Aperitivos");
const [activo, setActivo] = useState("Aperitivos");
return (
<section className="conten-menu">
  <div className="pag-menu-btn">
  <button
    type="button"
    className={`pag-btn-menu ${activo === "Aperitivos" ? "activo" : ""}`}
    onClick={() => {
      setCategoria(productos.aperitivos);
      setTituloActual("Aperitivos");
      setActivo("Aperitivos"); // Solo aquí cambiamos el estado del botón activo
    }}
  >
    <h2>Aperitivos</h2>
  </button>

  <button
    type="button"
    className={`pag-btn-menu ${activo === "Platos Principales" ? "activo" : ""}`}
    onClick={() => {
      setCategoria(productos.platosPrincipales);
      setTituloActual("Platos Principales");
      setActivo("Platos Principales");
    }}
  >
    <h2>Platos Principales</h2>
  </button>

  <button
    type="button"
    className={`pag-btn-menu ${activo === "Postres" ? "activo" : ""}`}
    onClick={() => {
      setCategoria(productos.postres);
      setTituloActual("Postres");
      setActivo("Postres");
    }}
  >
    <h2>Postres</h2>
  </button>

  <button
    type="button"
    className={`pag-btn-menu ${activo === "Bebidas" ? "activo" : ""}`}
    onClick={() => {
      setCategoria(productos.bebidas);
      setTituloActual("Bebidas");
      setActivo("Bebidas");
    }}
  >
    <h2>Bebidas</h2>
  </button>
</div>
    <div className="pag-menu">  {/* Pasas los "Aperitivos" como props */}
      <SeccionProductos 
        titulo={tituloActual} 
        lista={categoria} 
      /></div>
</section>

);
}

export default Menu;


