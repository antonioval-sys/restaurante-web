


 function Inicio(){
return(
 <section>
      <div className="superior">
        <p className="ce">COMIDA EXQUISITA</p>
        <button className="ordena-ahora">ORDENA AHORA</button>
      </div>
      <div className="dis">
        <div className="trattoria">
          <img  alt="Trattoria" src="/restaurante-web/imagenes/trattoria.jpg"/>
        </div>
        <div className="nosotros-servicio">
          <div className="nosotros">
            <h2>Sobre Nosotros</h2>
            <p>En Trattoria Moderna fusionamos la tradición italiana con un toque contemporáneo, ofreciendo una
              experiencia
              culinaria auténtica, cálida y sofisticada.</p>
          </div>
          <div className="servicio">
            <h2>Nuestros Servicios</h2>
            <ul className="servicios-combinados">
              <li>
                
                  <img  alt="Banquete" src="/restaurante-web/imagenes/banquete.png"/>
                  <span>Banquete</span>
                
              </li>
              <li>
                
                  <img  alt="En Local" src="/restaurante-web/imagenes/local.png"/>
                  <span>Presencial</span>
                
              </li>
              <li>
                
                  <img  alt="Para Llevar" src="/restaurante-web/imagenes/llevar.png"/>
                  <span>Recoger</span>
               
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="des">
        <div className="especial-contacto">
          <h2>Especial</h2>
          <p>Descubre un espacio donde la tradición culinaria italiana se encuentra con la innovación. Nuestra Trattoria
            Moderna te invita a disfrutar de un rincón exclusivo, diseñado para celebrar la vida con sabores auténticos,
            ingredientes frescos y un ambiente que te hará sentir en casa.</p>

          <h2>Contacto</h2>
          <p>Permítanos asistirlo en la planificación de su velada perfecta. Para asegurar su mesa o consultar sobre un
            evento especial, no dude en contactarnos.</p>
          <ul>
            <li>
              <p><b>Dirección: </b>Calle Gral Rafael Buelna Tenorio 453, Primer Cuadro, 80000 Culiacán Rosales, Sin.</p>
            </li>
            <li>
              <p><b>Horario: </b>Abierto de lunes a domingo de 13:00 a 21:00.</p>
            </li>
            <li>
              <p><b>Teléfono: </b>667-05-**-**</p>
            </li>
          </ul>
        </div>
        <div className="img-filete">
          <img  alt="Filete" src="/restaurante-web/imagenes/filete.jpg"/>
        </div>
      </div>
    </section>

);

 }

 export default Inicio;
