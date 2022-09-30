import React from 'react';
import { Motorcycle } from '../components/Motorcycle.jsx';
import { Modal } from '../components/Modal.jsx';
import { AppContext } from '../context/AppContext.js';
import '../css/Motorcycles.css';

const UrbanMotorcycles = () => {
  const { openModal } = React.useContext(AppContext);

  const urban = [
    {
      line: 'VICTORY',
      url_image: 'https://i.ibb.co/DDmc1s2/urbana1.png',
      name: 'ONE ST 110',
      price: '4.399.000',
    },
    {
      line: 'VICTORY',
      url_image: 'https://i.ibb.co/pvPTyT5/urbana2.png',
      name: 'BOMBER 125',
      price: '4.999.000',
    },
    {
      line: 'VICTORY',
      url_image: 'https://i.ibb.co/fr0JY7r/urbana3.png',
      name: 'BOMBER 125 SPORT',
      price: '5.349.000',
    },
    {
      line: 'VICTORY',
      url_image: 'https://i.ibb.co/d48hdXG/urbana4.png',
      name: 'BOMBER 150',
      price: '5.999.000',
    },
    {
      line: 'VICTORY',
      url_image: 'https://i.ibb.co/WGpmDZD/urbana5.png',
      name: 'NITRO 125 PRO',
      price: '6.399.000',
    },
    {
      line: 'VICTORY',
      url_image: 'https://i.ibb.co/k4NVjy6/urbana6.png',
      name: 'SWITCH 150',
      price: '6.799.000',
    },
  ];

  return (
    <section className="Motos-container">
      <h1>Motos Urbanas</h1>
      <div className="motos-list">
        {urban.map((item) => (
          <Motorcycle
            key={item.name}
            line={item.line}
            url_image={item.url_image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
      {openModal && <Modal></Modal>}
    </section>
  );
};

export { UrbanMotorcycles };
