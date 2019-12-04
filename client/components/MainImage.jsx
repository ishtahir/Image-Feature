import React from 'react';

const MainImage = props => {
  return (
    <button className="center">
      <img src={`../images/${props.img}`} />
    </button>
  );
};

export default MainImage;
