import './styles/style.scss';
import logo from './assets/logo.svg';
import getLikes from './modules/getlikes.js';
import { getMovies, API_URL, SEARCH_API } from './modules/getMovies.js';

getMovies(API_URL);
getLikes();
const logoIcon = document.getElementById('logo');

logoIcon.src = logo;

const form = document.getElementById('form');
const search = document.getElementById('search');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    document.querySelector('#popular-section').innerHTML = '';
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});