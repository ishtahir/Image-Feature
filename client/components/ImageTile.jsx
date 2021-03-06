import React from 'react';

const ImageTile = props => {
  return (
    <li
      className={`item-tile ${props.main === props.src ? 'selected' : ''}`}
      onClick={() => {
        props.showModal ? props.changePic(props.src) : props.toggleModal(props.src);
      }}
    >
      <button className="btn-tile">
        <img src={`${props.src}`} data-src={props.src} className="img-tile" onMouseEnter={props.mouseEnterHandler} />
      </button>
    </li>
  );
};

export default ImageTile;
