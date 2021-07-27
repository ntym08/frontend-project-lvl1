import processGame from '../index.js';

const minNum = 1;
const maxNum = 50;
const operators = ['+', '-', '*'];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getQuestion = () => {
  const num1 = getRandomNumber(minNum, maxNum);
  const num2 = getRandomNumber(minNum, maxNum);
  const operator = operators[getRandomNumber(0, operators.length)];
  const question = `${num1} ${operator} ${num2}`;
  return question;
};

const getCalc = (string) => {
  const array = string.split(' ');
  const num1 = Number(array[0]);
  const num2 = Number(array[2]);
  const operator = array[1];
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return String(result);
};

const descriptionMessage = 'What is the result of the expression?';
const expression = getQuestion;
const game = getCalc;

export default () => {
  processGame(descriptionMessage, expression, game);
};
