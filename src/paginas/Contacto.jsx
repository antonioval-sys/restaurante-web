import { Link } from "react-router-dom";

function Contacto() {

  return (
    <section className="contacto">
      <div className="contacto-info">
        <h1>Contacto</h1>
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2004.8762092982138!2d-107.40516703416218!3d24.78499995440414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcd18a09af31f3%3A0x22c1d208d9660df8!2sL&#39;Osteria%20di%20Alfredo%20Nuevo%20Culiac%C3%A1n!5e0!3m2!1ses-419!2smx!4v1756692948221!5m2!1ses-419!2smx"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">

      </iframe>
      <form action="#" method="post">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" placeholder="Escribe tu nombre" id="nombre" name="nombre" required />

        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Escribe tu email" id="email" name="email" required />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>

    </section>

  );
}

export default Contacto;