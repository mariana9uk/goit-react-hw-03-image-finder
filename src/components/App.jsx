import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Component } from 'react';
import { Button } from './Button';
import { FetchImages } from './api';
import { Loader } from './Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
  };

  changeQuery = newQuery => {
    this.setState({ query: `${Date.now()}/${newQuery}`, images: [], page: 1 });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page 
    ) {
      this.setState({loading:true})
      const fetchedImages = await FetchImages(
        this.state.query,
        this.state.page
      );
         this.setState({ images: fetchedImages.hits,
      loading: false });
    }
  }
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.changeQuery} />

        {this.state.loading ? ( <Loader />) :
          (  <ImageGallery images={this.state.images} />)
        }
    
        <Button images={this.state.images} onClick={this.handleLoadMore} />
      </div>
    );
  }
}
