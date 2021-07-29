import processGame from '../index.js';
import getRandomInt from '../random-integer.js';

const minFirstElement = 1;
const maxFirstElement = 50;
const minDiff = 1;
const maxDiff = 10;
const minElementsCount = 5;
const maxElementsCount = 11;
const minIndexMissingElement = 0;
const description = 'What number is missing in the progression?';

const makeProgression = () => {
  const firstElement = getRandomInt(minFirstElement, maxFirstElement);
  const diff = getRandomInt(minDiff, maxDiff);
  const elementsCount = getRandomInt(minElementsCount, maxElementsCount);
  const progression = [];
  for (let i = 0; i < elementsCount; i += 1) {
    progression.push(firstElement + i * diff);
  }
  return progression;
};

const stringifyProgression = (array) => array.join(' ');

const genQuestionAndAnswer = () => {
  const progression = makeProgression();
  const indexMissingElement = getRandomInt(minIndexMissingElement, progression.length);
  const answer = String(progression.splice(indexMissingElement, 1, '..'));
  const question = stringifyProgression(progression);
  const questionAndAnswer = [question, answer];
  return questionAndAnswer;
};

export default () => {
  processGame(description, genQuestionAndAnswer);
};
