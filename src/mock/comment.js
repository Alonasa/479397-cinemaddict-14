import dayjs from 'dayjs';
import { getRandomArrItem, getRandomInteger } from './utils.js';

const emojiesNames = ['angry', 'puke', 'sleeping', 'smile'];

const commentsList = [
  'Booooooooooring',
  'Interesting setting and a good cast',
  'Very very old. Meh',
  'Almost two hours? Seriously?',
];

const generateDate = () => {
  const maxDaysGap = 100;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  return dayjs().add(daysGap, 'day').toDate();
};

const comment = () => {
  return {
    author: 'John Doe',
    date: dayjs(generateDate()).format('YYYY-MM-DD HH:mm'),
    emotion: './images/emoji/' + getRandomArrItem(emojiesNames) + '.png',
    comment: getRandomArrItem(commentsList),
  };
};

export { comment };
