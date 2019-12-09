import React from 'react';

const MainImage = props => {
  return (
    <button
      className="center"
      onClick={() => {
        props.showModal ? props.changePic(props.img) : props.toggleModal(props.img);
      }}
    >
      <img src={`${props.img}`} width="500" height="500" />
    </button>
  );
};

export default MainImage;
