import React from 'react';
import { Motorcycle } from '../components/Motorcycle.jsx';
import { Modal } from '../components/Modal.jsx';
import { AppContext } from '../context/AppContext.js';
import '../css/Motorcycles.css';

const SportMotorcycles = () => {
  const { openModal } = React.useContext(AppContext);

  const sport = [
    {
      line: 'VICTORY',
      url_image: 'https://i.ibb.co/k4NVjy6/urbana6.png',
      name: 'SWITCH 150',
      price: '6.799.000',
    },
    {
      line: 'BENELLI',
      url_image: ' https://i.ibb.co/vPwRyfy/deportiva2.png',
      name: 'BENELLI 180S',
      price: '10.299.000',
    },
    {
      line: 'BENELLI',
      url_image: 'https://i.ibb.co/GvjpsPx/deportiva3.png',
      name: 'BENELLI 180S PRO X',
      price: '10.799.000',
    },
    {
      line: 'KAWASAKI',
      url_image: 'https://i.ibb.co/2KvbR6m/deportiva4.png',
      name: 'NINJA 400',
      price: '31.990.000',
    },
    {
      line: 'BENELLI',
      url_image: 'https://i.ibb.co/yFqnCc1/deportiva5.png',
      name: 'BENELLI TNT 25N',
      price: '12.499.000',
    },
    {
      line: 'VICTORY',
      url_image: 'https://i.ibb.co/VNSR9pH/deportiva6.png',
      name: 'VENOM 400',
      price: '19.490.000',
    },
  ];

  return (
    <section className="Motos-container">
      <h1>Motos Deportivas</h1>
      <div className="motos-list">
        {sport.map((item) => (
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

export { SportMotorcycles };
