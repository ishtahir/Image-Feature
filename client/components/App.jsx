import React, { Component } from 'react';
import ImageContainer from './ImageContainer.jsx';
import Modal from './Modal.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      main: 'img1.jpg',
      images: ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'],
      selected: '',
      showModal: false
    };
  }

  mouseEnterHandler(evt) {
    this.setState({ selected: evt.target.dataset.src, main: evt.target.dataset.src });
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div className="container">
        <button className="center" onClick={this.toggleModal.bind(this)}>
          <img src={`../images/${this.state.main}`} />
        </button>
        <ImageContainer images={this.state.images} mouseEnterHandler={this.mouseEnterHandler.bind(this)} selected={this.state.selected} />
        <Modal showModal={this.state.showModal} toggleModal={this.toggleModal.bind(this)} />
      </div>
    );
  }
}

export default App;
