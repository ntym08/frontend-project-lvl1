import playGame from '../index.js';
import generateRandomNumber from '../random-number.js';

const minNum = 1;
const maxNum = 100;
const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b > a) return getGCD(b, a);
  if (!b) return a;
  return getGCD(b, a % b);
};

const genQuestionAndAnswer = () => {
  const num1 = generateRandomNumber(minNum, maxNum);
  const num2 = generateRandomNumber(minNum, maxNum);
  const question = `${num1} ${num2}`;
  const answer = String(getGCD(num1, num2));
  const questionAndAnswer = [question, answer];
  return questionAndAnswer;
};

export default () => {
  playGame(description, genQuestionAndAnswer);
};
