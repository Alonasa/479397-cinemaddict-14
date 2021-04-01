import { mainMenu, itemsSorting, filters } from './view/menu.js';
import { filmCard } from './view/film-card.js';
import { showMore } from './view/show-more.js';
import { userRank } from './view/user-rank.js';
import { popup } from './view/popup-film-descripition.js';

const RENDER_QUANTITY = 5;

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

for (let i = 0; i < RENDER_QUANTITY; i++) {
  render(filmsElement, filmCard(), 'beforeend');
}
render(filmsElement, showMore(), 'beforeend');

render(headerElement, userRank(), 'beforeend');

render(filmsElement, popup(), 'beforeend');
