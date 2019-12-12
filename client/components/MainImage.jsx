import React from 'react';

const MainImage = props => {
  return (
    <button
      className="center"
      onClick={() => {
        props.showModal ? props.changePic(props.img) : props.toggleModal(props.img);
      }}
    >
      <div
        className={`image ${props.showModal ? 'modal-main-img' : 'main-img'}`}
        style={{ backgroundImage: `url(${props.img})` }}
        onClick={zoomHandler}
      ></div>
    </button>
  );
};

const zoomHandler = evt => {
  if ((evt.target.classList.contains('modal-main-img') && evt.target.style.transform === '') || evt.target.style.transform === 'scale(1)') {
    evt.target.style.transform = 'scale(1.3)';
    evt.target.style.cursor = 'all-scroll';
    evt.target.style.backgroundSize = 'cover';
  } else if (evt.target.classList.contains('modal-main-img') && evt.target.style.transform === 'scale(1.3)') {
    evt.target.style.transform = 'scale(1)';
    evt.target.style.cursor = 'zoom-in';
    evt.target.style.backgroundSize = 'contain';
  }
};

export default MainImage;
