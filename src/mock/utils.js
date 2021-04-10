const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomNumber = function (min, max, decimalPoints) {
  const findRandom = Math.random() * (max - min) + min;
  return +findRandom.toFixed(decimalPoints);
};

const getRandomArrItem = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);
  return arr[randomIndex];
};

const timeConvert = (min) => {
  const num = min;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  if (num < 60) {
    return rminutes + 'm';
  } else {
    return rhours + 'h ' + rminutes + 'm';
  }
};

export { getRandomNumber, getRandomInteger, getRandomArrItem, timeConvert };
