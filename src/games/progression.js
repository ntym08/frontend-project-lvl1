import processGame from '../index.js';
import generateRandomNumber from '../random-number.js';

const minFirstElement = 1;
const maxFirstElement = 50;
const minDiff = 1;
const maxDiff = 10;
const minElementsCount = 5;
const maxElementsCount = 11;
const minIndexMissingElement = 0;
const description = 'What number is missing in the progression?';

const makeProgression = () => {
  const firstElement = generateRandomNumber(minFirstElement, maxFirstElement);
  const diff = generateRandomNumber(minDiff, maxDiff);
  const elementsCount = generateRandomNumber(minElementsCount, maxElementsCount);
  const progression = [];
  for (let i = 0; i < elementsCount; i += 1) {
    progression.push(firstElement + i * diff);
  }
  return progression;
};

const hideElementInProgression = (array, index) => array.splice(index, 1, '..');

const stringifyProgression = (array) => array.join(' ');

const genQuestionAndAnswer = () => {
  const progression = makeProgression();
  const indexMissingElement = generateRandomNumber(minIndexMissingElement, progression.length);
  const answer = String(hideElementInProgression(progression, indexMissingElement));
  const question = stringifyProgression(progression);
  const questionAndAnswer = [question, answer];
  return questionAndAnswer;
};

export default () => {
  processGame(description, genQuestionAndAnswer);
};
