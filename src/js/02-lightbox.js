import { galleryItems } from './gallery-items.js';
// Change code below this line

//1//
const listRef = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemMarkup(galleryItems);

listRef.insertAdjacentHTML('afterbegin', itemsMarkup);

console.log(createGalleryItemMarkup(galleryItems));

function createGalleryItemMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      
    />
  </a>
`
}) 
.join('');
}

console.log(galleryItems);

//3, 4//

new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt"});