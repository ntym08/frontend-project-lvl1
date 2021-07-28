import processGame, { getRandomInt } from '../index.js';

const minNum = 1;
const maxNum = 100;

const getGCD = (a, b) => {
  if (b > a) return getGCD(b, a);
  if (!b) return a;
  return getGCD(b, a % b);
};

const genPairOfInteger = () => {
  const num1 = getRandomInt(minNum, maxNum);
  const num2 = getRandomInt(minNum, maxNum);
  const pairOfInteger = `${num1} ${num2}`;
  return pairOfInteger;
};

const getGreatestCommonDivisor = (string) => {
  const array = string.split(' ');
  const num1 = Number(array[0]);
  const num2 = Number(array[1]);
  const result = getGCD(num1, num2);
  return String(result);
};

const description = 'Find the greatest common divisor of given numbers.';
const genQuestion = genPairOfInteger;
const getExpectedAnswer = getGreatestCommonDivisor;

export default () => {
  processGame(description, genQuestion, getExpectedAnswer);
};
