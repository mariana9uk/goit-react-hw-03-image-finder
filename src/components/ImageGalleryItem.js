
export const ImageGalleryItem =({image, openModal })=>
{
  return(
    <div>
<li className="ImageGalleryItem" >
  <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" onClick={openModal}/>
</li>

</div>
)}