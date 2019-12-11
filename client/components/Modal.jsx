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
            <button
              className={props.modalMain === props.images[0] ? 'disabled' : ''}
              onClick={() => {
                props.modalImageButtonScroll('l');
              }}
            >
              <i className={`fas fa-chevron-left ${props.modalMain === props.images[0] ? 'disabled' : ''}`}></i>
            </button>
            <div className="modal-main-container">
              <MainImage
                img={props.modalMain}
                showModal={props.showModal}
                changePic={props.changePic}
                zoomed={props.zoomed}
                toggleZoom={props.toggleZoom}
              />
            </div>
            <button
              className={props.modalMain === props.images[props.images.length - 1] ? 'disabled' : ''}
              onClick={() => {
                props.modalImageButtonScroll('r');
              }}
            >
              <i className={`fas fa-chevron-right ${props.modalMain === props.images[props.images.length - 1] ? 'disabled' : ''}`}></i>
            </button>
          </div>
          <ImageContainer images={props.images} changePic={props.changePic} showModal={props.showModal} main={props.modalMain} />
        </div>
      </div>
    );
  }
};

export default Modal;
