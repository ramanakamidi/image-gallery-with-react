// src/Image.js
import React from 'react';
import './Image.css';

const Image = ({ src, openModal }) => {
  return (
    <div className="image" onClick={() => openModal(src)}>
      <img src={src} alt="Gallery" />
    </div>
  );
};

export default Image;
