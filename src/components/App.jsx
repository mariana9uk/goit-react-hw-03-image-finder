import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Component } from 'react';
import { Button } from './Button';
import { FetchImages } from './api';
import { Loader } from './Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Modal } from './Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
  };

  changeQuery = newQuery => {
    this.setState({ query: `${Date.now()}/${newQuery}`, images: [], page: 1 });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      try {const fetchedImages = await FetchImages(
        this.state.query,
        this.state.page
      );
      this.setState({ images: fetchedImages.hits, loading: false });
    }
        catch (error) {
          console.log(error)
        toast.error('Error', {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        })}
      }
      
  }
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  notify = () =>
    toast.warn('Please, type something!', {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 2000,
    });
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.changeQuery} Error={this.notify} />
        <ToastContainer />
        {this.state.loading ? (
          <Loader />
        ) : (
          <ImageGallery images={this.state.images} openModal={this.handleOpenModal} />
        )}
{/* <Modal isOpen={this.state.showModal}/> */}
        <Button images={this.state.images} onClick={this.handleLoadMore} />
      </div>
    );
  }
}
