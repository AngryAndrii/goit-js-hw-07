import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const mainList = document.querySelector('.gallery');

const makeElem = ({ preview, original, description }) => {
  return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
};

const markUp = galleryItems.map(el => makeElem(el));
console.log(markUp);

mainList.insertAdjacentHTML('afterbegin', markUp.join(' '));
