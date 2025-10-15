import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '/css/animations.css';

const gallery = document.querySelector('ul.gallery');
const main = document.querySelector('main');
const loader = document.createElement('div');
loader.classList.add('loader');
console.log(loader)

export function createGallery(data) {
  // console.log(data)
  showLoader();
  const markup = data
    .map(
      el => {
        return `<li class="gallery-item">
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

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {    
    loader.classList.add('is-shown');
    main.append(loader);
  console.log(gallery)
  console.log(loader)
}

export function hideLoader() {
    setTimeout(()=>{
      loader.classList.remove('is-shown');
      console.log(1)
    },2000);
    //gallery.classList.add('is-shown');
}