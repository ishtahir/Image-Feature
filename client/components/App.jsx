import React, { Component } from 'react';
import ImageContainer from './ImageContainer.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      main: 'img1.jpg',
      images: ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'],
      selected: ''
    };
  }

  mouseEnterHandler(evt) {
    this.setState({ selected: evt.target.dataset.src, main: evt.target.dataset.src });
  }

  mouseLeaveHandler(evt) {
    this.setState({ selected: '' });
  }

  render() {
    return (
      <div className="container">
        <button className="center">
          <img src={`../images/${this.state.main}`} />
        </button>
        <ImageContainer
          images={this.state.images}
          mouseEnterHandler={this.mouseEnterHandler.bind(this)}
          mouseLeaveHandler={this.mouseLeaveHandler.bind(this)}
          selected={this.state.selected}
        />
      </div>
    );
  }
}

export default App;
