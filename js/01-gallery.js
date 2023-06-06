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
          width="340px"
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

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" />`
  );

  instance.show();

  document.addEventListener('keydown', (event, openFullImg) => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
