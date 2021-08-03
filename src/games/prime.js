import playGame from '../index.js';
import generateRandomNumber from '../random-number.js';

const minNum = 1;
const maxNum = 1000;
const description = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const genQuestionAndAnswer = () => {
  const question = generateRandomNumber(minNum, maxNum);
  const answer = isPrime(question) ? 'yes' : 'no';
  const questionAndAnswer = [question, answer];
  return questionAndAnswer;
};

export default () => {
  playGame(description, genQuestionAndAnswer);
};
