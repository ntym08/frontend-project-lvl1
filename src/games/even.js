import playGame from '../index.js';
import generateRandomNumber from '../random-number.js';

const minNum = 1;
const maxNum = 100;
const description = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const isEven = (number) => number % 2 === 0;

const genQuestionAndAnswer = () => {
  const question = generateRandomNumber(minNum, maxNum);
  const answer = isEven(question) ? 'yes' : 'no';
  const questionAndAnswer = [question, answer];
  return questionAndAnswer;
};

export default () => {
  playGame(description, genQuestionAndAnswer);
};
