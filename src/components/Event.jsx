import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faLocationDot,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import '../css/Event.css';

const Event = ({ title, city, date, place, hour, url_image }) => {
  return (
    <article className="Event-card">
      <div className="Event-card__description">
        <h2>{title}</h2>
        <h3>{city}</h3>
        <p>
          <span>
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
          {date}
        </p>
        <p>
          <span>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          {place}
        </p>
        <p>
          <span>
            <FontAwesomeIcon icon={faClock} />
          </span>
          {hour}
        </p>
      </div>
      <img src={url_image} alt={title} />
    </article>
  );
};

export { Event };
