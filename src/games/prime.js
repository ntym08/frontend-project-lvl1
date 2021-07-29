import processGame from '../index.js';
import getRandomInt from '../random-integer.js';

const minNum = 1;
const maxNum = 1000;
const description = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const genInteger = () => {
  const integer = getRandomInt(minNum, maxNum);
  return `${integer}`;
};

const checkPrime = (number) => (isPrime(Number(number)) ? 'yes' : 'no');

const genQuestion = genInteger;
const getExpectedAnswer = checkPrime;

export default () => {
  processGame(description, genQuestion, getExpectedAnswer);
};
