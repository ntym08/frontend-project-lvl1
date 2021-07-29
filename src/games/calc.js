import processGame from '../index.js';
import getRandomInt from '../random-integer.js';

const minOperand = 1;
const maxOperand = 50;
const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const calcExpression = (num1, num2, operator) => {
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
  return result;
};

const genQuestionAndAnswer = () => {
  const num1 = getRandomInt(minOperand, maxOperand);
  const num2 = getRandomInt(minOperand, maxOperand);
  const operator = operators[getRandomInt(0, operators.length)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calcExpression(num1, num2, operator));
  const questionAndAnswer = [question, answer];
  return questionAndAnswer;
};

export default () => {
  processGame(description, genQuestionAndAnswer);
};
