import processGame from '../index.js';
import getRandomInt from '../random-integer.js';

const minNum = 1;
const maxNum = 100;
const description = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const isEven = (number) => number % 2 === 0;

const genQuestionAndAnswer = () => {
  const question = getRandomInt(minNum, maxNum);
  const answer = isEven(question) ? 'yes' : 'no';
  const questionAndAnswer = [question, answer];
  return questionAndAnswer;
};

export default () => {
  processGame(description, genQuestionAndAnswer);
};
