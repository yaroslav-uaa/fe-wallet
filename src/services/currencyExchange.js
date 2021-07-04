import axios from 'axios';

export function fetchInfo() {
  return axios
    .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(r => r.data);
}
