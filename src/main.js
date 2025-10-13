import { getImagesByQuery } from './js/pixabay-api';
import { makeRender, render } from './js/render-functions';

const query = document.querySelector('[name="search-text"]');
const button = document.querySelector('button');
const ul = document.querySelector('.list');

button.addEventListener('click', event => {
  event.preventDefault();
  //name();
  console.log(query.value);
  getImagesByQuery(query.value);
});


const markup = data.hits
  .map(el => {
    return `<li>
  <img src="${el.pageURL}" width='100px'></img><p><b>ID</b>: ${el.id}</p>
</li>`;
  })
  .join('');

ul.insertAdjacentHTML('beforeend', markup);
