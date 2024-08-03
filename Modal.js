// src/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ src, closeModal }) => {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content">
        <span className="close">&times;</span>
        <img src={src} alt="Modal" />
      </div>
    </div>
  );
};

export default Modal;
