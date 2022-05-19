import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallaryContainerRef = document.querySelector('.gallery');
const gallaryitemsMarkup = createGalleryItemMarkup(galleryItems);

gallaryContainerRef.insertAdjacentHTML('afterbegin', gallaryitemsMarkup);
gallaryContainerRef.addEventListener('click', onGalleryCardsClick);
// console.log(createGalleryItemMarkup(galleryItems));
function createGalleryItemMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" onclick = "event.preventDefault()">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}) 
.join('');
}
 
function onGalleryCardsClick(event) {
//  event.preventDefault(); 
 if (!event.target.classList.contains('gallery__image')) { 
 return;}
 else {
      const instance = basicLightbox.create(`
       <img
          src="${event.target.dataset.source}"/>
      `);
      instance.show();
     }
console.log(event.target);
}





