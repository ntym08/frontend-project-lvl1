import processGame from '../index.js';
import getRandomInt from '../random-integer.js';

const minNum = 1;
const maxNum = 100;
const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b > a) return getGCD(b, a);
  if (!b) return a;
  return getGCD(b, a % b);
};

const genQuestionAndAnswer = () => {
  const num1 = getRandomInt(minNum, maxNum);
  const num2 = getRandomInt(minNum, maxNum);
  const question = `${num1} ${num2}`;
  const answer = String(getGCD(num1, num2));
  const questionAndAnswer = [question, answer];
  return questionAndAnswer;
};

export default () => {
  processGame(description, genQuestionAndAnswer);
};
