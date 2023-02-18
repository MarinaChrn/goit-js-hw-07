import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('ul.gallery');

const galleryItemsEl = galleryItems.map(({preview,original,description})=>{
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
}).join('');
galleryEl.insertAdjacentHTML('beforeend', galleryItemsEl);

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});