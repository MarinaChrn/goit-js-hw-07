import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
//  1. Створення і рендер розмітки на підставі масиву даних galleryItems 
// і наданого шаблону елемента галереї.
//  2. Реалізація делегування на div.gallery і отримання url великого зображення.
//  3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані 
// (.min) файли бібліотеки.
//  4. Відкриття модального вікна по кліку на елементі галереї. 
// Для цього ознайомся з документацією і прикладами.
//  5.Заміна значення атрибута src елемента <img> в модальному вікні 
// перед відкриттям. Використовуй готову розмітку модального вікна із 
// зображенням з прикладів бібліотеки basicLightbox.

const galleryEl = document.querySelector('div.gallery');

const galleryItemsEl = galleryItems.map(({preview,original,description})=>{
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
}).join('');
galleryEl.insertAdjacentHTML('beforeend', galleryItemsEl);
galleryEl.addEventListener('click', ImgClick)

function ImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  
  const currentImgUrl = e.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${currentImgUrl}" width="1280" height="auto"/>`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', EscPress);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', EscPress);
      },
    }
  );
  instance.show();

  function EscPress(e) {
    const isEscKey = e.code === 'Escape';
    if (!isEscKey) return;
    instance.close();
  }
}
