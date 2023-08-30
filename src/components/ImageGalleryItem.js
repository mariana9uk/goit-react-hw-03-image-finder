import React, { Component } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');
export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  handleOpenModal = () => {
    this.setState({
      showModal: true,
    });
  };
  handleCloseModal=()=> {
    this.setState({ showModal: false });
  }
  render() {
    const { image } = this.props;
    const { showModal } = this.state;
    return (
      <div>
        <li className="ImageGalleryItem">
          <img
            src={image.webformatURL}
            alt={image.tags}
            className="ImageGalleryItem-image"
            onClick={this.handleOpenModal}
          />
        </li>
        <Modal
          onRequestClose={this.handleCloseModal}
          isOpen={showModal}
          image={image}
        >
          <div className="Overlay" onClick={this.handleCloseModal}>
            <div className="Modal">
              <img src={image.largeImageURL} alt={image.tags} />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
