import React, { Component } from 'react';

const Modal = props => {
  if (!props.showModal) {
    return null;
  } else {
    return (
      <div className="modal-bg">
        <div className="modal-content">
          <div className="close-btn">×</div>
          <h1>Testing Modal</h1>
          <button>
            <i class="fas fa-chevron-left"></i>
          </button>
          <div className="text-container">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni beatae libero, quaerat praesentium nulla magnam quae consectetur?
              Perferendis, voluptates.
            </span>
          </div>
          <button>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    );
  }
};

export default Modal;
