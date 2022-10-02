import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.js';
import '../css/Detail.css';

const Detail = () => {
  const { showDetail } = React.useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="Detail-container">
      {showDetail.img1 != null && (
        <figure className="Moto-img1">
          <img src={showDetail.img1} alt={showDetail.name} />
          <div></div>
        </figure>
      )}
      <div className="Detail-general">
        <img src={showDetail.url_image} alt={showDetail.name} />
        <h2>{showDetail.name}</h2>
        <p>{showDetail.description}</p>
        <span>$ {showDetail.price}</span>
        <button
          onClick={() => {
            navigate('/credito');
            window.scrollTo(0, 0);
          }}
        >
          Calcula tu cuota de crédito aquí
        </button>
      </div>
      {showDetail.img2 != null && (
        <figure className="Moto-img2">
          <div></div>
          <img src={showDetail.img2} alt={showDetail.name} />
        </figure>
      )}
      <div className="Detail-especific">
        <h3>Ficha técnica</h3>
        <div>
          <p>
            Motor: <span>{showDetail.motor}</span>
          </p>
          <p>
            Cilindraje: <span>{showDetail.cil}</span>
          </p>
          <p>
            Potencia máxima: <span>{showDetail.pm}</span>
          </p>
          <p>
            Refrigeración: <span>{showDetail.refg}</span>
          </p>
          <p>
            Transmisión: <span>{showDetail.trns}</span>
          </p>
          <p>
            Combustible: <span>{showDetail.comb}</span>
          </p>
          <p>
            Freno delantero: <span>{showDetail.bk_b}</span>
          </p>
          <p>
            Freno trasero: <span>{showDetail.bk_f}</span>
          </p>
          <p>
            Peso: <span>{showDetail.wgh}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export { Detail };
