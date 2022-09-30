import React from 'react';
import { Motorcycle } from '../components/Motorcycle.jsx';
import '../css/Motorcycles.css';

const AutomaticMotorcycles = () => {
  const automatic = [
    {
      line: 'VICTORY',
      url_image: 'https://i.ibb.co/BqR6Yvb/automatica1.png',
      name: 'LIFE',
      price: '6.199.000',
      description:
        'Llegó la scooter full equipo con más espacio, que te empodera para que puedas vivir más y mejores experiencias de vida alcanzando tus sueños.',
    },
    {
      line: 'VICTORY',
      url_image: 'https://i.ibb.co/vmj2mT5/automatica2.png',
      name: 'BOLD',
      price: '7.199.000',
      description:
        'Una scooter con luces asimétricas, robusta y más altura que las demás, la hace ideal para tus necesidades.',
    },
    {
      line: 'VICTORY',
      url_image: 'https://i.ibb.co/3djL6jS/automatica3.png',
      name: 'BOLD PRO',
      price: '7.499.000',
      description:
        'Una scooter con luces asimétricas, robusta y más altura que las demás, la hace ideal para tus necesidades.',
    },
    {
      line: 'KYMCO',
      url_image: 'https://i.ibb.co/k34FS6j/automatica4.png',
      name: 'AGILITY FUSION',
      price: '8.499.000',
      description:
        'La scooter deportiva con la maniobralidad ideal para que recorras la ciudad con total confianza y seguridad.',
    },
    {
      line: 'KYMCO',
      url_image: 'https://i.ibb.co/wNVqP51/automatica5.png',
      name: 'AGILITY ALL NEW PRO',
      price: '9.999.000',
      description:
        'El icónico modelo de la marca Kymco, se renovó para traerte todo un universo diferente y un estilo mejorado.',
    },
    {
      line: 'KYMCO',
      url_image: 'https://i.ibb.co/NWF3v1d/automatica6.png',
      name: 'SUPER 8',
      price: '13.499.000',
      description:
        'Ilumina tu camino y llega de manera ágil a donde quieras, la nueva KYMCO SUPER 8 es para aquellos que el día a día no los deja descansar.',
    },
  ];

  return (
    <section className="Motos-container">
      <h1>Motos Automáticas</h1>
      <div className="motos-list">
        {automatic.map((item) => (
          <Motorcycle
            key={item.name}
            line={item.line}
            url_image={item.url_image}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export { AutomaticMotorcycles };
