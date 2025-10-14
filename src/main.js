import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const query = document.querySelector('[name="search-text"]');
const button = document.querySelector('button');

button.addEventListener('click', event => {
  event.preventDefault();
  clearGallery();
  showLoader();
  hideLoader();


  // 
  //   .then((result) => showLoader(result))
  //   .then(() => hideLoader())


  getImagesByQuery(query.value)
    .then(result => createGallery(result.hits))
    .catch(error => console.log(error))

})