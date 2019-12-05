import React from 'react';

const MainImage = props => {
  return (
    <button
      className="center"
      onClick={() => {
        props.showModal ? props.changePic(props.img) : props.toggleModal(props.img);
      }}
    >
      <img src={`../images/${props.img}`} />
    </button>
  );
};

export default MainImage;
