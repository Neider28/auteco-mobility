import React from 'react';
import '../css/Modal.css';

const Modal = ({ children }) => {
  return <div className="Modal-container">{children}</div>;
};

export { Modal };
