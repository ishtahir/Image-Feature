import React, { Component } from 'react';
import MainImage from './MainImage.jsx';
import ImageContainer from './ImageContainer.jsx';
import Modal from './Modal.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      main: 'img1.jpg',
      images: ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'],
      showModal: false,
      modalMain: ''
    };
  }

  mouseEnterHandler(evt) {
    this.setState({ main: evt.target.dataset.src, modalMain: evt.target.dataset.src });
  }

  toggleModal(img) {
    this.setState({ showModal: !this.state.showModal, modalMain: img });
  }

  changePic(src) {
    this.setState({ modalMain: src });
  }

  render() {
    return (
      <div className="container">
        <MainImage
          img={this.state.main}
          toggleModal={this.toggleModal.bind(this)}
          changePic={this.changePic.bind(this)}
          showModal={this.state.showModal}
        />
        <ImageContainer
          images={this.state.images}
          mouseEnterHandler={this.mouseEnterHandler.bind(this)}
          main={this.state.main}
          toggleModal={this.toggleModal.bind(this)}
        />
        <Modal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal.bind(this)}
          images={this.state.images}
          changePic={this.changePic.bind(this)}
          modalMain={this.state.modalMain}
        />
      </div>
    );
  }
}

export default App;
