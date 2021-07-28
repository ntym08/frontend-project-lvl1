import processGame from '../index.js';

const minNum = 1;
const maxNum = 100;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getQuestion = () => {
  const num1 = getRandomNumber(minNum, maxNum);
  const num2 = getRandomNumber(minNum, maxNum);
  const question = `${num1} ${num2}`;
  return question;
};

const GCD = (a, b) => {
  if (b > a) return GCD(b, a);
  if (!b) return a;
  return GCD(b, a % b);
};

const getGreatestCommonDivisor = (string) => {
  const array = string.split(' ');
  const num1 = Number(array[0]);
  const num2 = Number(array[1]);
  const result = GCD(num1, num2);
  return String(result);
};

const descriptionMessage = 'Find the greatest common divisor of given numbers.';
const expression = getQuestion;
const game = getGreatestCommonDivisor;

export default () => {
  processGame(descriptionMessage, expression, game);
};
