import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faEye,
  faHistory,
  faBullseye,
  faStar,
  faBusinessTime,
} from '@fortawesome/free-solid-svg-icons';
import philosophy from '../assets/images/philosophy.png';
import business from '../assets/images/business.png';
import '../css/About.css';

const About = () => {
  return (
    <section className="About-container">
      <div className="we-box">
        <h2>
          <span>
            <FontAwesomeIcon icon={faUsers} />
          </span>
          ¿Quiénes somos?
        </h2>
        <p>
          Somos la compañía líder en movilidad sostenible en el país con el
          mayor nivel de innovación y la que tiene el portafolio más amplio en
          Colombia y Latinoamérica, que se destaca por llevar progreso a las
          personas a través de las mejores soluciones de movilidad.
        </p>
        <h2>
          <span>
            <FontAwesomeIcon icon={faEye} />
          </span>
          Visión
        </h2>
        <p>
          Auteco se consolida como una empresa líder en movilidad sostenible,
          con modelos de negocio y soluciones innovadoras y un equipo de clase
          mundial y gente feliz, reconocida por estar centrados en el cliente
          que obtiene crecimientos sobresalientes y alta rentabilidad.
        </p>
      </div>
      <div className="history-box">
        <h2>
          <span>
            <FontAwesomeIcon icon={faHistory} />
          </span>
          Nuestra historia
        </h2>
        <p>
          Somos una compañía 100% colombiana que hace parte del sector
          industrial de ensamble e importación de vehículos hace 80 años. La
          historia de Auteco comienza con un sueño que inició en una estación de
          gasolina y un pequeño almacén de repuestos en Medellín (Antioquia) en
          1941.
        </p>
        <p>
          A partir de este momento, y hasta el día de hoy, hemos sido siendo la
          compañía precursora de esta industria en el país así:
        </p>
        <p>
          En 1945 importamos las primeras motocicletas al país. En 1954
          comenzamos la comercialización de las tan populares Lambretta. En 1961
          recibimos la primera licencia de fabricación de motocicletas de
          Colombia y el Grupo Andino. En 1962 inauguramos nuestra fábrica en
          Itagüí, convirtiéndonos en la primera ensambladora de motos de dos y
          tres ruedas, marcando la historia industrial de nuestro país.
        </p>
        <p>
          Durante nuestra trayectoria, hemos realizando importantes alianzas con
          empresas y marcas de reconocimiento internacional, como Kawasaki
          (Japón), Kymco (Taiwan) o Piaggio (Italia), entre otras,
          posicionándonos como los pioneros en innovación y desarrollo del
          sector automotor nacional.
        </p>
      </div>
      <div className="philosophy-box">
        <div className="philosophy-description">
          <h2>
            <span>
              <FontAwesomeIcon icon={faBullseye} />
            </span>
            Nuestra filosofía
          </h2>
          <p>
            Tenemos una fórmula clara: Creer Crear = Crecer. Creer es confiar en
            nuestras ideas y en nuestras capacidades, que a su vez es el insumo
            más importante para crear, generar ideas y materializarlas en un
            ambiente que diseñamos para incentivar la innovación. La suma de
            estas dos variables nos da como resultado enseñanzas, aprendizajes y
            experiencias, que se traducen en crecimiento y conocimiento para
            ofrecer un mejor servicio a nuestros clientes.
          </p>
        </div>
        <img className="philosophy-image" src={philosophy} alt="philosophy" />
      </div>
      <div className="purpose-box">
        <h2>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          Nuestro propósito
        </h2>
        <p>
          En Auteco Mobility trabajamos para llevar progreso a las personas a
          través de las mejores soluciones de movilidad.
        </p>
      </div>
      <div className="business-box">
        <h2>
          <span>
            <FontAwesomeIcon icon={faBusinessTime} />
          </span>
          Modelo de negocio
        </h2>
        <img className="business-image" src={business} alt="business" />
      </div>
    </section>
  );
};

export { About };
