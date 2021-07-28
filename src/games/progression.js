import processGame from '../index.js';

const minNum = 1;
const maxNum = 50;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getQuestion = () => {
  const firstElement = getRandomNumber(minNum, maxNum);
  const difference = getRandomNumber(1, 10);
  const quantityOfElements = getRandomNumber(5, 11);
  const indexHiddenElement = getRandomNumber(0, quantityOfElements);
  let question = '';
  for (let i = 0; i < quantityOfElements; i += 1) {
    if (i !== indexHiddenElement) {
      question = `${question} ${firstElement + i * difference}`;
    } else {
      question = `${question} ..`;
    }
  }
  return `${question}`.trim();
};

const getHiddenElement = (string) => {
  const array = string.split(' ');
  const indexHiddenElement = array.indexOf('..');
  let difference = 0;
  let result = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== '..' && array[i + 1] !== '..') {
      difference = array[i + 1] - array[i];
      break;
    }
  }
  if (indexHiddenElement !== 0) {
    result = Number(array[indexHiddenElement - 1]) + difference;
  } else {
    result = Number(array[indexHiddenElement + 1]) - difference;
  }
  return String(result);
};

const descriptionMessage = 'What number is missing in the progression?';
const expression = getQuestion;
const game = getHiddenElement;

export default () => {
  processGame(descriptionMessage, expression, game);
};
