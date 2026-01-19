 import { Link } from "react-router-dom";


function Servicios() {
 return(
<section className="serviciop">
      <div className="servicio-info">
        <h1>Servicio</h1>
        <p>En Trattoria Moderna, nos enorgullece ofrecer un servicio excepcional que complementa nuestra exquisita
          cocina italiana. Nuestro equipo de profesionales está dedicado a crear una experiencia culinaria inolvidable
          para cada uno de nuestros clientes.</p>
        <p>Nuestro personal altamente capacitado y atento está siempre dispuesto a asistirle con una sonrisa,
          asegurándose de que cada detalle de su visita sea perfecto. Ya sea que esté celebrando una ocasión especial o
          simplemente disfrutando de una comida casual, estamos aquí para hacer que su experiencia sea memorable.</p>
        <p>Además, ofrecemos servicios personalizados para eventos privados, adaptándonos a sus necesidades y
          preferencias para garantizar que su celebración sea única y especial.</p>
        <p>Visítenos y descubra cómo nuestro compromiso con la excelencia en el servicio puede transformar su comida en
          una experiencia verdaderamente excepcional.</p>
      </div>
      <img src="/imagenes/servicio.jpg" alt="Servicio"/>

      <div className="cita">
        <h2>Cita romántica</h2>
        <h3>Reserva tu mesa</h3>
        <p>Vive una velada inolvidable en nuestra mesa VIP con vista a la terraza, ideal para una ocasión especial.</p>
        <p>Para reservar una mesa, llámanos al 667-05-**-** o envíanos un correo electrónico a <a href="mailto:reservas@trattoriamoderna.com">reservas@trattoriamoderna.com</a>.</p>
      </div>
      <img src="/imagenes/cita.jpg" alt="Cita romántica"/>

      <div className="sala">
        <h2>Sala de eventos</h2>
        <h3>Espacio para tus celebraciones</h3>
        <p>Nuestra sala de eventos es el lugar perfecto para celebrar bodas, cumpleaños y reuniones corporativas. Con
          capacidad para hasta 50 personas, ofrecemos un ambiente elegante y acogedor.</p>
      </div>
      <img src="/imagenes/sala.jpg" alt="Sala de eventos"/>
      <div className="ambiente">
        <h2>Ambiente acogedor</h2>
        <h3>Disfruta de nuestro espacio</h3>
        <p>En Trattoria Moderna, hemos creado un ambiente cálido y acogedor que invita a nuestros clientes a relajarse y
          disfrutar de su comida. Nuestra decoración combina elementos tradicionales italianos con un toque moderno,
          creando un espacio único y encantador.</p>
        <p>Ya sea que elija sentarse en nuestra terraza al aire libre o en el interior junto a la chimenea, encontrará
          un entorno perfecto para cualquier ocasión, desde una cena íntima hasta una reunión familiar.</p>
      </div>
      <img src="/imagenes/ambiente.jpg" alt="Ambiente acogedor"/>

      <div className="evento">
        <h2>Eventos especiales</h2>
        <h3>Haz de tu evento algo único</h3>

        <p>En Trattoria Moderna, nos especializamos en la organización de eventos especiales que se adaptan a sus
          necesidades y deseos. Ya sea una boda, un cumpleaños, una reunión corporativa o cualquier otra celebración,
          nuestro equipo está aquí para ayudarle a planificar y ejecutar un evento inolvidable.</p>
        <p>Ofrecemos menús personalizados, decoración temática y un servicio excepcional para garantizar que su evento sea único y memorable. Contáctenos para discutir sus ideas y comenzar a planificar su próxima celebración con nosotros.</p>
      </div>  
      <img src="/imagenes/evento.jpg" alt="Eventos especiales"/>

    </section>
 );
}
export default Servicios;
