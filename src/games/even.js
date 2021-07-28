import processGame, { getRandomInt } from '../index.js';

const minNum = 1;
const maxNum = 100;

const isEven = (number) => number % 2 === 0;

const genInteger = () => {
  const integer = getRandomInt(minNum, maxNum);
  return `${integer}`;
};

const checkEven = (number) => (isEven(Number(number)) ? 'yes' : 'no');

const description = "Answer 'yes' if the number is even, otherwise answer 'no'.";
const genQuestion = genInteger;
const getExpectedAnswer = checkEven;

export default () => {
  processGame(description, genQuestion, getExpectedAnswer);
};
