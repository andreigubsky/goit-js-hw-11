// У файлі render-functions.js створи екземпляр SimpleLightbox
// для роботи з модальним вікном та зберігай функції
// для відображення елементів інтерфейсу:

// createGallery(images). Ця функція повинна приймати масив images,
// створювати HTML-розмітку для галереї, додавати її в контейнер
// галереї та викликати метод екземпляра SimpleLightbox refresh().
// Нічого не повертає.

// clearGallery(). Ця функція нічого не приймає та
// повинна очищати вміст контейнера галереї.
// Нічого не повертає.

// showLoader(). Ця функція нічого не приймає,
// повинна додавати клас для відображення лоадера.
// Нічого не повертає.

// hideLoader(). Ця функція нічого не приймає, повинна
// прибирати клас для відображення лоадера.
// Нічого не повертає.

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import '../css/animations.css';

const gallery = document.querySelector('ul.gallery');
const spiner = document.querySelector('.spinner');
/* #region  createGallery(images) */

export function createGallery(data) {
  // console.log(data)
  const markup = data
    .map(
      el => {
        return `<li class="loader">
                <div class="spinner"></div>
                <a class="gallery-link" href="${el.largeImageURL}">
                  <img class="gallery-image" src="${el.webformatURL}" width='100px' alt="${el.tags.split(",").slice(0, 3)}">
                  <ul class="image-params">
                    <li><b>Likes</b>:<br> ${el.likes}</li>
                    <li><b>Views</b>:<br> ${el.views}</li>
                    <li><b>Comments</b>:<br> ${el.comments}</li>
                    <li><b>Downloads</b>:<br> ${el.downloads}</li>
                  </ul>
                </a>
              </li>`;
      })
    .join('');

  gallery.insertAdjacentHTML('afterbegin', markup);

  const newGallery = new SimpleLightbox('.gallery li a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    nav: true,
    captionDelay: 250,
  });
  newGallery.refresh();
}

/* #endregion */

export function clearGallery() {
  return new Promise((resolve, reject) => {
    gallery.innerHTML = "";
  });
}

export function showLoader() {
  spiner.style.display = "block";
}

export function hideLoader() {
  spiner.style.display = "none";
}