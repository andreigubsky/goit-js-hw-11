// getImagesByQuery(query).
// Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком),
// здійснювати HTTP-запит
// і повертати значення властивості data з отриманої відповіді.
import axios from 'axios';

const proxyUrl = 'https://corsproxy.io/?url=';

const url = 'https://pixabay.com/api';
const KEY = '52704159-1137319808f91d343a45c96fe';
const imageType = 'photo';
const orientation = 'horizontal';
const safesearch = true;

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};


export function getImagesByQuery(query) {
  const requestURL = `${url}/?key=${KEY}&q=${query}&image_type=${imageType}&orientation=${orientation}&safesearch=${safesearch}`;


  return axios(`${proxyUrl}${requestURL}`, options)
    .then(response => {
      if (!response.data) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.data;
    })
    .catch(error => {
      console.log('Помилка запиту:', error);
    });
}


























// function name() {
//     fetch("https://jsonplaceholder.typicode.com/users", options)
//         .then(response => {
//             // Response handling
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//             console.log(response)
//         })
//         .then(data => {
//             // Data handling
//             console.log("Отримані дані:", data);
//         })
//         .catch(error => {
//             // Error handling
//             console.log("Помилка запиту:", error);
//         });
// }
