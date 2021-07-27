import processGame from '../index.js';

const minNum = 1;
const maxNum = 100;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = (number) => number % 2 === 0;

export const getQuestion = () => {
  const question = getRandomNumber(minNum, maxNum);
  return `${question}`;
};

export const checkEven = (num) => {
  const expectedAnswer = isEven(num) ? 'yes' : 'no';
  return expectedAnswer;
};

const descriptionMessage = "Answer 'yes' if the number is even, otherwise answer 'no'.";
const expression = getQuestion;
const game = checkEven;

export default () => {
  processGame(descriptionMessage, expression, game);
};
