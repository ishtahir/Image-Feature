import React, { Component } from 'react';
import ImageContainer from './ImageContainer.jsx';

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
        <button className="center">
          <img src={`../images/${this.state.main}`} />
        </button>
        <ImageContainer images={this.state.images} mouseEnterHandler={this.mouseEnterHandler.bind(this)} main={this.state.main} />
      </div>
    );
  }
}

export default App;
