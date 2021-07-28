import processGame, { getRandomInt } from '../index.js';

const minFirstElement = 1;
const maxFirstElement = 50;
const minDiff = 1;
const maxDiff = 10;
const minElementsCount = 5;
const maxElementsCount = 11;
const minIndexMissingElement = 0;

const genProgression = () => {
  const firstElement = getRandomInt(minFirstElement, maxFirstElement);
  const diff = getRandomInt(minDiff, maxDiff);
  const elementsCount = getRandomInt(minElementsCount, maxElementsCount);
  const indexMissingElement = getRandomInt(minIndexMissingElement, elementsCount);
  let progression = '';
  for (let i = 0; i < elementsCount; i += 1) {
    if (i !== indexMissingElement) {
      progression = `${progression} ${firstElement + i * diff}`;
    } else {
      progression = `${progression} ..`;
    }
  }
  return `${progression}`.trim();
};

const getMissingElement = (string) => {
  const array = string.split(' ');
  const indexMissingElement = array.indexOf('..');
  let diff = 0;
  let result = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== '..' && array[i + 1] !== '..') {
      diff = array[i + 1] - array[i];
      break;
    }
  }
  if (indexMissingElement !== 0) {
    result = Number(array[indexMissingElement - 1]) + diff;
  } else {
    result = Number(array[indexMissingElement + 1]) - diff;
  }
  return String(result);
};

const description = 'What number is missing in the progression?';
const genQuestion = genProgression;
const getExpectedAnswer = getMissingElement;

export default () => {
  processGame(description, genQuestion, getExpectedAnswer);
};
