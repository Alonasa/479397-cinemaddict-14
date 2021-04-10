import { mainMenu, itemsSorting, filters } from './view/menu.js';
import { createFilmCard } from './view/film-card.js';
import { showMore } from './view/show-more.js';
import { userRank } from './view/user-rank.js';
//import { popup } from './view/popup-film-descripition.js';
import { generateFilmCard } from './mock/film.js';

const RENDER_QUANTITY = 5;
const FILMS_COUNT = 20;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const mainElement = document.querySelector('.main');
const navigationElement = mainElement.querySelector('.main-navigation');
const filtersElement = mainElement.querySelector('.statistic__filters');
const sortingElement = mainElement.querySelector('.sort');
const filmsElement = mainElement.querySelector('.films-list__container');
const headerElement = document.querySelector('.header');

render(navigationElement, mainMenu(), 'beforeend');
render(filtersElement, filters(), 'beforeend');
render(sortingElement, itemsSorting(), 'beforeend');

const films = new Array(FILMS_COUNT).fill().map(generateFilmCard);

for (let i = 0; i < RENDER_QUANTITY; i++) {
  render(filmsElement, createFilmCard(films[i]), 'beforeend');
}
render(filmsElement, showMore(), 'beforeend');

render(headerElement, userRank(), 'beforeend');

//render(filmsElement, popup(), 'beforeend');

console.log(films);
