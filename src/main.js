import { getImagesByQuery } from './js/pixabay-api';
import { makeRender, render } from './js/render-functions';

const query = document.querySelector('[name="search-text"]');
const button = document.querySelector('button');
const ul = document.querySelector('.list');

button.addEventListener('click', async event => {
  event.preventDefault();

  try {
    const data = await getImagesByQuery(query.value);
    const markup = data.hits
      .map(el => {
        return `<li>
                  <img src="${el.webformatURL}" width='100px' alt="Image ID ${el.id}">
                  <p><b>ID</b>: ${el.id}</p>
                </li>`;
      })
      .join('');

    ul.innerHTML = ''; // clear previous results
    ul.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.error('Error fetching images:', error);
  }
});
