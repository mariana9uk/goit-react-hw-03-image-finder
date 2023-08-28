import { ImageGalleryItem } from './ImageGalleryItem';
export const ImageGallery = ({ images, openModal }) => {
  const imageListItems = images.map(image => (
    <ImageGalleryItem image={image} key={image.id} openModal={openModal}/>
  ));
  return <ul className='ImageGallery'>{imageListItems}</ul>;
};
