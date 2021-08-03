import playGame from '../index.js';
import generateRandomNumber from '../random-number.js';

const minFirstElement = 1;
const maxFirstElement = 50;
const minDiff = 1;
const maxDiff = 10;
const minElementsCount = 5;
const maxElementsCount = 11;
const minIndexMissingElement = 0;
const description = 'What number is missing in the progression?';

const makeProgression = (firstElement, diff, elementsCount) => {
  const progression = [];
  for (let i = 0; i < elementsCount; i += 1) {
    progression.push(firstElement + i * diff);
  }
  return progression;
};

const hideElementInProgression = (progression, index) => progression.splice(index, 1, '..');

const genQuestionAndAnswer = () => {
  const firstElement = generateRandomNumber(minFirstElement, maxFirstElement);
  const diff = generateRandomNumber(minDiff, maxDiff);
  const elementsCount = generateRandomNumber(minElementsCount, maxElementsCount);
  const progression = makeProgression(firstElement, diff, elementsCount);
  const indexMissingElement = generateRandomNumber(minIndexMissingElement, progression.length);
  const answer = String(hideElementInProgression(progression, indexMissingElement));
  const question = progression.join(' ');
  const questionAndAnswer = [question, answer];
  return questionAndAnswer;
};

export default () => {
  playGame(description, genQuestionAndAnswer);
};
