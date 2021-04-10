import { mainMenu, itemsSorting, filters } from './view/menu.js';
import { createFilmCard } from './view/film-card.js';
import { showMore } from './view/show-more.js';
import { userRank } from './view/user-rank.js';
//import { popup } from './view/popup-film-descripition.js';
import { generateFilmCard } from './mock/mock-film.js';

import { RENDER_QUANTITY, FILMS_COUNT } from './const.js';

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

// const comments = new Array(getRandomInteger(0, RENDER_QUANTITY - 1))
//   .fill()
//   .map(generateComment);

render(filmsElement, showMore(), 'beforeend');

render(headerElement, userRank(), 'beforeend');

//render(filmsElement, popup(), 'beforeend');
