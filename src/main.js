import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const query = document.querySelector('[name="search-text"]');
const button = document.querySelector('button');

function showErrorMessage() {
  iziToast.show({
    message: `Please enter search image`,
    messageColor: '#ffffff',
    backgroundColor: '#fe5549',
    progressBar: false,
    position: 'center',
  });
}

button.addEventListener('click', event => {
  event.preventDefault();
  if(!query.value){
    showErrorMessage();
    return;
  }
 
  getImagesByQuery(query.value)
    // .then(showLoader())
    // .then(hideLoader())
    .then(result => createGallery(result.hits))
    .catch(error => console.log(error))

})