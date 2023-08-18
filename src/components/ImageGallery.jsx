import React, { useState } from 'react';
import './ImageGallery.css'; // Estilos CSS para la galería
import { FaAngleLeft } from "react-icons/fa"
import { FaAngleRight } from "react-icons/fa"

const ImageGallery = ({ images, albumeTitle }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openImageModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
    <h2>{albumeTitle}</h2>
    <p>{images.length} imagenes</p>
    <div className="image-gallery">
      {images.map((image, index) => (
          <div key={image.id} className="thumbnail">
          <img
          src={image.url}
          alt={image.name}
          onClick={() => openImageModal(index)}
        />
          </div>
      ))}

      {selectedImageIndex !== null && (
        <div className="image-modal">
          <span className="close-button" onClick={closeImageModal}>
            &times;
          </span>
          <div className='modal-img-container'>
          <img
            src={images[selectedImageIndex].url}
            alt={images[selectedImageIndex].name}
            className="modal-image"
          />
          </div>
          <div className='buttons-actions'>
          <button className="prev-button" onClick={showPreviousImage}>
          <FaAngleLeft />
          </button>
          <p className='image-num'>{`${selectedImageIndex + 1}`}</p>
          <button className="next-button" onClick={showNextImage}>
            <FaAngleRight />
          </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ImageGallery;
