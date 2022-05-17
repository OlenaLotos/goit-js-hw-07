import { galleryItems } from './gallery-items.js';
// Change code below this line

//1//
const listRef = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemMarkup(galleryItems);

listRef.insertAdjacentHTML('afterbegin', itemsMarkup);

console.log(createGalleryItemMarkup(galleryItems));

function createGalleryItemMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
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
  

//2//
listRef.addEventListener('click', onGalleryCardsClick);

function onGalleryCardsClick(event) {
 event.preventDefault(); 

 if (!event.target.classList.contains('gallery__image')) { 
 return;
} 
console.log(event.target.dataset.description);
}

//   
//   
  // const target = event.target;
  // if (target.nodeName !== 'IMG') {
  //   return;
  // }
  // const image = target.dataset.source;
  // const imageRef = document.querySelector('.big-image');
  // imageRef.src = image;
  // imageRef.alt = target.alt;
  // imageRef.style.display = 'block';
// }