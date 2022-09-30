import React from 'react';
import { Event } from './Event.jsx';
import '../css/Events.css';

const Events = () => {
  const events = [
    {
      title: 'Mega Experience 2022',
      city: 'Cartagena',
      date: 'Sábado 30 de Abril',
      place: 'Centro comercial Los Ejecutivos',
      hour: '9:00 a.m.',
      url_image: 'https://i.ibb.co/71qFKHS/evento.jpg',
    },
  ];

  return (
    <section className="Events-container">
      <h1>CONOCE LOS PRÓXIMOS EVENTOS</h1>
      <div className="Event-list">
        {events.map((item) => (
          <Event
            key={item.title}
            title={item.title}
            city={item.city}
            date={item.date}
            place={item.place}
            hour={item.hour}
            url_image={item.url_image}
          />
        ))}
      </div>
    </section>
  );
};

export { Events };
