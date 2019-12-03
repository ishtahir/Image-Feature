import React, { Component } from 'react';

const Modal = props => {
  if (!props.showModal) {
    return null;
  } else {
    return <h1>Hello from modal</h1>;
  }
};

export default Modal;
