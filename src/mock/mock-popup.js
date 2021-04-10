import dayjs from 'dayjs';

const now = dayjs();
const formated = dayjs('2020/12/31 12:30').format('YYYY MMMM DD HH:mm');
now.diff(formated, 'days', +'ago');
//const lefted = now.diff(formated, 'days');
