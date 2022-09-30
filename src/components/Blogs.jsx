import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRoad,
  faMotorcycle,
  faFlagCheckered,
} from '@fortawesome/free-solid-svg-icons';
import { Blog } from './Blog.jsx';
import '../css/Blogs.css';

const Blogs = () => {
  const blogs = [
    {
      title: 'Carreras de motos deportivas',
      url_image: 'https://i.ibb.co/3sQ61zm/blog1.jpg',
      icon: faFlagCheckered,
    },
    {
      title: 'Competencias de motocross',
      url_image: 'https://i.ibb.co/xD5BXyF/blog2.jpg',
      icon: faMotorcycle,
    },
    {
      title: 'Mayor rendimiento en pista',
      url_image: 'https://i.ibb.co/Hq2c6dr/blog3.jpg',
      icon: faRoad,
    },
  ];

  return (
    <section className="Blogs-container">
      <div className="Blog-list">
        {blogs.map((item) => (
          <Blog
            key={item.title}
            title={item.title}
            url_image={item.url_image}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export { Blogs };
