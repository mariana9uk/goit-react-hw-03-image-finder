import { ImageGalleryItem } from './ImageGalleryItem';
export const ImageGallery = ({ images }) => {
  const imageListItems = images.map(image => (
    <ImageGalleryItem image={image} key={image.id} />
  ));
  return <ul>{imageListItems}</ul>;
};
