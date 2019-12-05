import React from 'react';
import ImageTile from './ImageTile.jsx';

const ImageContainer = props => {
  return (
    <ul className="img-container">
      {props.images.map(image => (
        <ImageTile
          key={image}
          src={image}
          mouseEnterHandler={props.mouseEnterHandler}
          main={props.main}
          toggleModal={props.toggleModal}
          changePic={props.changePic}
          showModal={props.showModal}
        />
      ))}
    </ul>
  );
};

export default ImageContainer;
