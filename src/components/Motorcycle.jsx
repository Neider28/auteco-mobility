import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../context/AppContext.js';
import '../css/Motorcycle.css';

const Motorcycle = ({
  line,
  url_image,
  name,
  price,
  motor,
  cil,
  pm,
  refg,
  trns,
  comb,
  bk_b,
  bk_f,
  wgh,
  img1,
  img2,
}) => {
  const { setShowDetail } = React.useContext(AppContext);
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate('/motos/detalle-moto');
    setShowDetail({
      name: name,
      price: price,
      motor: motor,
      cil: cil,
      pm: pm,
      refg: refg,
      trns: trns,
      comb: comb,
      bk_b: bk_b,
      bk_f: bk_f,
      wgh: wgh,
      img1: img1,
      img2: img2,
    });
  };

  return (
    <article className="Moto-card">
      <div className="moto-card--top">
        <span className={line}>{line}</span>
        <img src={url_image} alt={name} />
      </div>
      <div className="moto-card--bottom">
        <h2>{name}</h2>
        <p>$ {price}</p>
        <button onClick={handleDetail}>
          Conocer más
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </article>
  );
};

export { Motorcycle };
