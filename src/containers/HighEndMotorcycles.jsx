import React from 'react';
import { Motorcycle } from '../components/Motorcycle.jsx';
import { Modal } from '../components/Modal.jsx';
import { AppContext } from '../context/AppContext.js';
import '../css/Motorcycles.css';

const HighEndMotorcycles = () => {
  const { openModal } = React.useContext(AppContext);

  const highEnd = [
    {
      line: 'BENELLI',
      url_image: 'https://i.ibb.co/xg7chcY/altagama1.png',
      name: 'BENELLI TRK 251',
      price: '18.499.000',
    },
    {
      line: 'VICTORY',
      url_image: 'https://i.ibb.co/VNSR9pH/deportiva6.png',
      name: 'VENOM 400',
      price: '19.490.000',
    },
    {
      line: 'BENELLI',
      url_image: 'https://i.ibb.co/xqfqnGF/altagama3.png',
      name: 'BENELLI IMPERIALE 400',
      price: '20.990.000',
    },
    {
      line: 'BENELLI',
      url_image: 'https://i.ibb.co/p4D5CF4/altagama4.png',
      name: 'BENELLI LEONCINO 500',
      price: '31.499.0000',
    },
    {
      line: 'KAWASAKI',
      url_image: 'https://i.ibb.co/2KvbR6m/deportiva4.png',
      name: 'NINJA 400',
      price: '31.990.000',
    },
    {
      line: 'KAWASAKI',
      url_image: 'https://i.ibb.co/vBbqQd0/altagama6.png',
      name: 'Z400',
      price: '31.990.000',
    },
  ];

  return (
    <section className="Motos-container">
      <h1>Motos de Alta Gama</h1>
      <div className="motos-list">
        {highEnd.map((item) => (
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

export { HighEndMotorcycles };
