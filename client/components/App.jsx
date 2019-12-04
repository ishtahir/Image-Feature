import React, { Component } from 'react';
import MainImage from './MainImage.jsx';
import ImageContainer from './ImageContainer.jsx';
import Modal from './Modal.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      main: 'img1.jpg',
      images: ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg']
    };
  }

  mouseEnterHandler(evt) {
    this.setState({ main: evt.target.dataset.src });
  }

  render() {
    return (
      <div className="container">
        <MainImage img={this.state.main} />
        <ImageContainer images={this.state.images} mouseEnterHandler={this.mouseEnterHandler.bind(this)} main={this.state.main} />
      </div>
    );
  }
}

export default App;
