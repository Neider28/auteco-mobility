import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { AppContext } from '../context/AppContext.js';
import '../css/Footer.css';

const Footer = () => {
  const { contact } = React.useContext(AppContext);

  return (
    <footer ref={contact}>
      <div className="Information-container">
        <section className="Contact-container">
          <h2>Contáctanos</h2>
          <h3>Línea de atención gratuita</h3>
          <p>01 8000 520 090</p>
          <h3>Correo electrónico</h3>
          <p>servicio@auteco.com.co</p>
          <h3>Linea ética</h3>
          <p>01 8007 522 222</p>
        </section>
        <section className="Social-container">
          <h2>Encuéntranos en</h2>
          <div className="Social-icons">
            <a href="https://www.facebook.com/autecomotos/" target="_blank">
              <span>
                <FontAwesomeIcon icon={faFacebook} />
              </span>
            </a>
            <a href="https://twitter.com/autecomotos" target="_blank">
              <span>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </a>
            <a
              href="https://www.youtube.com/user/AutecoMotocicletas"
              target="_blank"
            >
              <span>
                <FontAwesomeIcon icon={faYoutube} />
              </span>
            </a>
          </div>
        </section>
      </div>
      <section className="Signature-container">
        <h3>2022 Auteco SAS, Colombia. Todos los derechos reservados.</h3>
      </section>
    </footer>
  );
};

export { Footer };
