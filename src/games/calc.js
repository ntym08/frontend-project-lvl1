import processGame from '../index.js';
import getRandomInt from '../random-integer.js';

const minOperand = 1;
const maxOperand = 50;
const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const genExpression = () => {
  const num1 = getRandomInt(minOperand, maxOperand);
  const num2 = getRandomInt(minOperand, maxOperand);
  const operator = operators[getRandomInt(0, operators.length)];
  const expression = `${num1} ${operator} ${num2}`;
  return expression;
};

const calcExpression = (string) => {
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

const genQuestion = genExpression;
const getExpectedAnswer = calcExpression;

export default () => {
  processGame(description, genQuestion, getExpectedAnswer);
};
