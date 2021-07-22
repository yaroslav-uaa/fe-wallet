import axios from 'axios';

function fetchInfo() {
  return axios
    .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(r => r.data);
}

// function fetchInfo() {
//   return fetch(
//     'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
//   ).then(r => r.data);
// }

export default fetchInfo;
