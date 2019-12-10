import React from 'react';

const MainImage = props => {
  return (
    <button
      className="center"
      onClick={() => {
        props.showModal ? props.changePic(props.img) : props.toggleModal(props.img);
      }}
    >
      <img className={props.showModal ? 'modal-main-img' : 'main-img'} src={`${props.img}`} />
    </button>
  );
};

export default MainImage;
