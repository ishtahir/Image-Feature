import React, { Component } from 'react';
import MainImage from './MainImage.jsx';
import ImageContainer from './ImageContainer.jsx';

const Modal = props => {
  if (!props.showModal) {
    document.body.style.overflow = 'auto';
    return null;
  } else {
    document.body.style.overflow = 'hidden';
    return (
      <div className="modal-bg">
        <div className="modal-content">
          <div className="close-btn" onClick={props.toggleModal}>
            ×
          </div>
          <div className="modal-img-container">
            <button>
              <i className="fas fa-chevron-left"></i>
            </button>
            <MainImage img={props.modalMain} />
            <button>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <ImageContainer images={props.images} changePic={props.changePic} showModal={props.showModal} />
        </div>
      </div>
    );
  }
};

export default Modal;
