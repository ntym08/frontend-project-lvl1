import processGame from '../index.js';

const minNum = 1;
const maxNum = 100;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = (number) => number % 2 === 0;

const getQuestion = () => {
  const question = getRandomNumber(minNum, maxNum);
  return `${question}`;
};

const checkEven = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const descriptionMessage = "Answer 'yes' if the number is even, otherwise answer 'no'.";
const expression = getQuestion;
const game = checkEven;

export default () => {
  processGame(descriptionMessage, expression, game);
};
