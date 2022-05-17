import { galleryItems } from './gallery-items.js';
// Change code below this line

const listRef = document.querySelector('.gallery');

listRef.insertAdjacentHTML('afterbegin', galleryItems
    .map(galleryItem => `
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>`)
  .join(''));

// listRef.style.display = 'flex';
// listRef.style.listStyle = "none";
// listRef.style.justifyContent = "space-between";
// listRef.querySelector("li").style.marginRight = "10 px";
// listRef.querySelector("img").style.height = "400 px";
// listRef.querySelector("img").style.objectFit = "cover";
// console.log(listRef);


console.log(galleryItems);
