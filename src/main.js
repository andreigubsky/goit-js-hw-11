import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const query = document.querySelector('[name="search-text"]');
const button = document.querySelector('button');

function showRejected(delay) {
  iziToast.show({
    message: `❌ Rejected promise in ${delay}ms`,
    messageColor: '#ffffff',
    backgroundColor: '#fe5549',
    progressBar: false,
    timeout: 5000,
    position: 'topRight',
  });
}

function showFulfilled(delay) {
  iziToast.show({
    message: `✅ Fulfilled promise in ${delay}ms`,
    messageColor: '#ffffff',
    backgroundColor: '#31c581',
    progressBar: false,
    timeout: 5000,
    position: 'topRight',
  });
}


button.addEventListener('click', event => {
  event.preventDefault();
  // const imagePromises = imageUrls.map(url => loadImage(url));
  // Promise.all(imagePromises)
  //   .then((loadedImages) => {
  //     // All images have loaded successfully
  //     loadedImages.forEach(img => document.body.appendChild(img));
  //   })
  //   .catch((error) => {
  //     // Handle any errors that occurred
  //     console.error('An error occurred:', error);
  //   });
  // clearGallery()
  //   .then(showLoader())
  //   .then(hideLoader())
  // .then()
  getImagesByQuery(query.value)
    .then(result => createGallery(result.hits))
    .catch(error => console.log(error))

})