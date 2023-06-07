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
          alt="${description}"
        />
      </a>
    </li>`;
};

const markUp = galleryItems.map(el => makeElem(el));

mainList.insertAdjacentHTML('afterbegin', markUp.join(' '));

mainList.addEventListener('click', openFullImg);

function openFullImg(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
