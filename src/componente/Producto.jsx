/*import productos from '../data/productos.json'

function Producto () {
    return (

         <section>
      <h2>Aperitivos</h2> <p>iteams</p>
      <div className="aperitivos-menu">
          <img
        src={productos.imagen}
        alt={productos.name}/>
        <p>{productos.descripcion}</p>
      </div>
    </section>
    );
}

export default Producto;*/

/*import productos from '../data/productos.json';

function Producto() {
  const aperitivos = productos.aperitivos;   // Accedemos al array de aperitivos//
  return (
    <section className='conten-product'>
      <div className="titulo-seccion"> 
      <h2>Aperitivos</h2>
      <p><strong>Total de Aperitivos: </strong>{aperitivos.length}</p>
      </div>
      <div className="aperitivos-menu">
        {aperitivos.map((producto) => (
          <div key={producto.id} className="producto-item">
            <img
              src={producto.imagen}
              alt={producto.name}
              className="producto-imagen"
            />
            <h3>{producto.name}</h3>
            <p>{producto.descripcion}</p>
            <p><strong>Precio: </strong>${producto.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Producto;*/

function SeccionProductos({ titulo, lista }) { 
  return (
    <section className='conten-product'>
      <div className="titulo-seccion"> 
        <h3>{titulo}</h3>
        <p><strong>Total: </strong>{lista.length}</p>
      </div>
      <div className="general-menu">
        {lista.map((producto) => (
          <div key={producto.id} className="producto-item">
            <img src={producto.imagen} alt={producto.name} className="producto-imagen" />
            <h3>{producto.name}</h3>
            <p>{producto.descripcion}</p>
            <p><strong>Precio: </strong>${producto.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SeccionProductos;