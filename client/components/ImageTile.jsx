import React from 'react';

const ImageTile = props => {
  return (
    <li className={`item-tile ${props.selected === props.src ? 'selected' : ''}`}>
      <button className="btn-tile">
        <img src={`../images/${props.src}`} data-src={props.src} className="img-tile" onMouseEnter={props.mouseEnterHandler} />
      </button>
    </li>
  );
};

export default ImageTile;
