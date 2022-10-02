import React from 'react';
import { Motorcycle } from '../components/Motorcycle.jsx';
import { Modal } from '../components/Modal.jsx';
import { AppContext } from '../context/AppContext.js';
import data from '../data.js';
import '../css/Motorcycles.css';

const UrbanMotorcycles = () => {
  const { openModal } = React.useContext(AppContext);

  const urban = data.UrbanMotorcycles;

  return (
    <section className="Motos-container">
      <h1>Motos Urbanas</h1>
      <div className="motos-list">
        {urban.map((item) => (
          <Motorcycle
            key={item.name}
            line={item.line}
            description={item.description}
            url_image={item.url_image}
            name={item.name}
            price={item.price}
            motor={item.engine}
            cil={item.cylinder}
            pm={item.maximum_power}
            refg={item.refrigeration}
            trns={item.transmission}
            comb={item.gas}
            bk_b={item.back_brake}
            bk_f={item.front_brake}
            wgh={item.weight}
            img1={item.img1}
            img2={item.img2}
          />
        ))}
      </div>
      {openModal && <Modal></Modal>}
    </section>
  );
};

export { UrbanMotorcycles };
