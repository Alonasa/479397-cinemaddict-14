import dayjs from 'dayjs';
import { comment } from './comment.js';

const duration = require('dayjs/plugin/duration');
dayjs.extend(duration);

const now = dayjs();
const formated = dayjs('2020/12/31 12:30').format('YYYY MMMM DD HH:mm');
now.diff(formated, 'days', +'ago');
const lefted = now.diff(formated, 'days');
