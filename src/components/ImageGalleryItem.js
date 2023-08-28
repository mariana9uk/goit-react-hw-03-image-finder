
export const ImageGalleryItem =({image, openModal })=>
{
  return(
<li className="ImageGalleryItem" >
  <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" onClick={openModal}/>
</li>

)}