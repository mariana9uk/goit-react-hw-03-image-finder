import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Component } from 'react';
import { Button } from './Button';
import{FetchImages} from './api'

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  changeQuery = newQuery => {
    this.setState({ query: `${Date.now()}/${newQuery}` , images: [], page: 1 });
  };
  async componentDidUpdate(prevProps, prevState){
    if (prevState.query!==this.state.query || prevState.page!==this.state.page) {const fetchedImages = await FetchImages(this.state.query, this.state.page)
      console.log(fetchedImages)
      console.log(this.state.page)
      this.setState({images: fetchedImages.hits})
    }
  }
  handleLoadMore=()=>{
    this.setState(prevState=>({page: prevState.page+1}))
  }
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery images={this.state.images} />
        <Button images={this.state.images} onClick={this.handleLoadMore} />
      </div>
    );
  }
}
