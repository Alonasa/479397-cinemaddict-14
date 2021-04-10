import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';

dayjs.extend(dayjsRandom);
import { getRandomArrItem, getRandomInteger } from './utils.js';
import { MAX_RANDOM } from './const.js';

const emojiesNames = ['angry', 'puke', 'sleeping', 'smile'];

const commentsList = [
  'Booooooooooring',
  'Interesting setting and a good cast',
  'Very very old. Meh',
  'Almost two hours? Seriously?',
];

let commentId = 0;

const generateCommentId = () => {
  return commentId++;
};

const generateComment = () => {
  return {
    id: generateCommentId(),
    author: 'John Doe',
    date: dayjs.between('2010-01-01', '2021-04-10').format('DD MMMM YYYY'),
    emotion: getRandomArrItem(emojiesNames),
    comment: getRandomArrItem(commentsList),
  };
};

const comments = [];

const generateRandomComments = () => {
  const commentsId = [];
  const random = getRandomInteger(0, MAX_RANDOM - 1);
  for (let i = 0; i <= random; i++) {
    comments.push(generateComment());
    commentsId.push(generateComment().id - 1);
  }
  return commentsId;
};

export { generateComment, generateRandomComments, comments };
