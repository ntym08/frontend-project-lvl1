import processGame from '../index.js';
import getRandomInt from '../random-integer.js';

const minNum = 1;
const maxNum = 100;
const description = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const isEven = (number) => number % 2 === 0;

const genInteger = () => {
  const integer = getRandomInt(minNum, maxNum);
  return `${integer}`;
};

const checkEven = (number) => (isEven(Number(number)) ? 'yes' : 'no');

const genQuestion = genInteger;
const getExpectedAnswer = checkEven;

export default () => {
  processGame(description, genQuestion, getExpectedAnswer);
};
