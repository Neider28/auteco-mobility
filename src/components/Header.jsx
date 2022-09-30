import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
  faMotorcycle,
  faCreditCard,
  faPhone,
  faCircleInfo,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../context/AppContext.js';
import '../css/Header.css';

const Header = () => {
  const [menu, setMenu] = React.useState(false);
  const { contact } = React.useContext(AppContext);
  const navigate = useNavigate();

  const handleMenu = () => {
    setMenu(!menu);
  };

  const scrollTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <header>
      <nav className="nav-bar-mobile">
        <button className="button-transparent" onClick={handleMenu}>
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </button>
        <button onClick={() => navigate('/credito')}>Crédito</button>
        {menu && (
          <div className="menu-opctions">
            <div className="close-container">
              <button className="button-transparent" onClick={handleMenu}>
                <FontAwesomeIcon icon={faXmark} className="close-icon" />
              </button>
            </div>
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon
                    icon={faMotorcycle}
                    className="option-icons"
                  />
                </span>
                Motos
                <span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="option-icons"
                  />
                </span>
                <ul>
                  <li
                    onClick={() => {
                      navigate('/motos/urbanas');
                      setMenu(!menu);
                    }}
                  >
                    Urbanas
                  </li>
                  <li
                    onClick={() => {
                      navigate('/motos/deportivas');
                      setMenu(!menu);
                    }}
                  >
                    Deportivas
                  </li>
                  <li
                    onClick={() => {
                      navigate('/motos/automaticas');
                      setMenu(!menu);
                    }}
                  >
                    Automáticas
                  </li>
                  <li
                    onClick={() => {
                      navigate('/motos/alta-gama');
                      setMenu(!menu);
                    }}
                  >
                    Alta Gama
                  </li>
                </ul>
              </li>
              <li
                onClick={() => {
                  navigate('/credito');
                  setMenu(!menu);
                }}
              >
                <span>
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    className="option-icons"
                  />
                </span>
                Crédito
                <span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="option-icons"
                  />
                </span>
              </li>
              <li
                onClick={() => {
                  scrollTo(contact);
                  setMenu(!menu);
                }}
              >
                <span>
                  <FontAwesomeIcon icon={faPhone} className="option-icons" />
                </span>
                Contacto
                <span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="option-icons"
                  />
                </span>
              </li>
              <li
                onClick={() => {
                  navigate('/sobre-nosotros');
                  setMenu(!menu);
                }}
              >
                <span>
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    className="option-icons"
                  />
                </span>
                Sobre Nosotros
                <span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="option-icons"
                  />
                </span>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <nav className="nav-bar-desktop">
        <ul>
          <li>
            <span>
              <FontAwesomeIcon icon={faMotorcycle} />
            </span>
            Motos
            <ul>
              <li onClick={() => navigate('/motos/urbanas')}>Urbanas</li>
              <li onClick={() => navigate('/motos/deportivas')}>Deportivas</li>
              <li onClick={() => navigate('/motos/automaticas')}>
                Automáticas
              </li>
              <li onClick={() => navigate('/motos/alta-gama')}>Alta Gama</li>
            </ul>
          </li>
          <li onClick={() => navigate('/credito')}>
            <span>
              <FontAwesomeIcon icon={faCreditCard} />
            </span>
            Crédito
          </li>
          <li onClick={() => scrollTo(contact)}>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            Contacto
          </li>
          <li onClick={() => navigate('/sobre-nosotros')}>
            <span>
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            Sobre Nosotros
          </li>
        </ul>
      </nav>
      <div className="header-logo--container">
        <span className="header-logo" onClick={() => navigate('/')}></span>
      </div>
    </header>
  );
};

export { Header };
