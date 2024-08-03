import React, { useState } from 'react';
import './ImageGallery.css';
import Image from './Image';
import Modal from './Modal';

const images = [
  'https://bestwhatsappdponline.wordpress.com/wp-content/uploads/2018/03/cropped-whatsapp-dp-banner-1.jpg',
  'https://res.cloudinary.com/dte7upwcr/image/upload/v1661782212/blog/blog2/whatsapp-status-quotes/whatsapp_status_quotes.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFw1y1d-_wiN-hwyAIFmBI6nnIN01em1DXw&s'
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <Image key={index} src={image} openModal={openModal} />
      ))}
      {selectedImage && <Modal src={selectedImage} closeModal={closeModal} />}
    </div>
  );
};

export default ImageGallery;
