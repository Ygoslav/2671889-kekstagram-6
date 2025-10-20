const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min) + min;


const getRandomArrayElement = (array) =>
  array[getRandomInt(0, array.length - 1)];


export {getRandomInt, getRandomArrayElement};
