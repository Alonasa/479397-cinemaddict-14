import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';

dayjs.extend(dayjsRandom);

import './mock-popup.js';
import { generateRandomComments } from './mock-comment.js';
//prettier-ignore
import {
  getRandomArrItem,
  getRandomInteger,
  getRandomNumber
} from './utils.js';
import { MAX_RANDOM, FILMS_GENRES, FILMS_NAMES } from './const.js';

let filmId = 0;

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.',
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const ACTORS = [
  'Morgan Freeman',
  'Judi Dench',
  'Robert De Niro',
  'Leonardo DiCaprio',
  'Al Pacino',
  'Tom Cruise',
  'Jessica Chastain',
  'Brie Larson',
  'Ryan Gosling',
  'Kate Winslet',
];

const COUNTRIES = [
  'Russia',
  'United Kingdom',
  'United States',
  'France',
  'Netherlands',
  'Poland',
  'Japan',
  'Germany',
  'Italy',
];

const generateRandomDescription = () => {
  let str = '';
  const random = getRandomInteger(0, MAX_RANDOM - 1);
  for (let i = 0; i <= random; i++) {
    str += `${generateDescription()} `;
  }
  return str;
};

const generateRandomList = (arr) => {
  const list = [];
  const random = getRandomInteger(0, arr.length - 1);
  for (let i = 0; i <= random; i++) {
    list.push(arr[i]);
  }
  return list;
};

const shortDescription = (description) => {
  if (description.length > 140) {
    return description.slice(0, 139) + '...';
  } else {
    return description;
  }
};

function insert_dash(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 -]/, '')
    .replace(/\s/g, '-');
}

const generateId = () => {
  return filmId++;
};

const generateFilmCard = () => {
  const randomFilm = getRandomArrItem(FILMS_NAMES);
  const nameChecking = () => {
    if (
      randomFilm === 'Made for each other' ||
      randomFilm === 'Popeye meets sinbad'
    ) {
      return '.png';
    } else {
      return '.jpg';
    }
  };
  return {
    film: {
      id: generateId(filmId),
      name: randomFilm,
      alternativeName: randomFilm,
      rating: getRandomNumber(1, 10, 1),
      poster: './images/posters/' + insert_dash(randomFilm) + nameChecking(),
      ageRating: getRandomInteger(0, 18),
      director: getRandomArrItem(ACTORS),
      writers: generateRandomList(ACTORS),
      actors: generateRandomList(ACTORS),
      release: {
        date: dayjs.between('1925-01-01', '2021-04-10').format('DD MMMM YYYY'),
        releaseCountry: getRandomArrItem(COUNTRIES),
      },
      runtime: getRandomInteger(40, 200),
      genre: [getRandomArrItem(FILMS_GENRES)],
      description: shortDescription(generateRandomDescription()),
      comments: generateRandomComments(),
    },

    user: {
      isInWatchList: Boolean(getRandomInteger(0, 1)),
      isWatched: Boolean(getRandomInteger(0, 1)),
      isFavorite: Boolean(getRandomInteger(0, 1)),
      watchingDate: dayjs
        .between('2010-01-01', '2021-04-10')
        .format('DD MMMM YYYY'),
    },
  };
};

export { generateFilmCard };
