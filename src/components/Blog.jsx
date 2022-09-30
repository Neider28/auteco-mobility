import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../css/Blog.css';

const Blog = ({ title, url_image, icon }) => {
  return (
    <article className="Blog-card">
      <div className="Blog-card__image">
        <img src={url_image} alt={title} />
      </div>
      <div className="Blog-card__description">
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
        <h3>{title}</h3>
        <button>
          Conoce más
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </article>
  );
};

export { Blog };
