import React from 'react';
import { AppContext } from '../context/AppContext.js';
import '../css/Detail.css';

const Detail = ({
  name,
  price,
  description,
  motor,
  cil,
  pm,
  refg,
  trns,
  comb,
  bk_b,
  bk_f,
  wgh,
}) => {
  const { openModal, setOpenModal } = React.useContext(AppContext);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="Detail-container">
      <div className="Detail-general">
        <h2>{name}</h2>
        <p>{description}</p>
        <span>$ {price}</span>
        <button>Calcula tu cuota de crédito aquí</button>
      </div>
      <div className="Detail-especific">
        <h3>Ficha técnica</h3>
        <div>
          <p>
            Motor: <span>{motor}</span>
          </p>
          <p>
            Cilindraje: <span>{cil}</span>
          </p>
          <p>
            Potencia máxima: <span>{pm}</span>
          </p>
          <p>
            Refrigeración: <span>{refg}</span>
          </p>
          <p>
            Transmisión: <span>{trns}</span>
          </p>
          <p>
            Combustible: <span>{comb}</span>
          </p>
          <p>
            Freno delantero: <span>{bk_b}</span>
          </p>
          <p>
            Freno trasero: <span>{bk_f}</span>
          </p>
          <p>
            Peso: <span>{wgh}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export { Detail };
