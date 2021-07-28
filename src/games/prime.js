import processGame from '../index.js';

const minNum = 1;
const maxNum = 1000;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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

const getQuestion = () => {
  const question = getRandomNumber(minNum, maxNum);
  return `${question}`;
};

const checkPrime = (number) => (isPrime(Number(number)) ? 'yes' : 'no');

const descriptionMessage = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";
const expression = getQuestion;
const game = checkPrime;

export default () => {
  processGame(descriptionMessage, expression, game);
};
