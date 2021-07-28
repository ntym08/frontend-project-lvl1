// eslint-disable-next-line object-curly-newline
import { getUserName, welcomeUser, greetUser, showGameDescription, askQuestion, getUserAnswer, replyToWrongAnswer, replyToCorrectAnswer, showCongrats } from './cli.js';

const processGame = (description, genQuestion, getExpectedAnswer) => {
  welcomeUser();
  const userName = getUserName();
  greetUser(userName);
  showGameDescription(description);
  for (let i = 1; i < 4; i += 1) {
    const question = genQuestion();
    askQuestion(question);
    const userAnswer = getUserAnswer();
    const expectedAnswer = getExpectedAnswer(question);
    if (userAnswer === expectedAnswer) {
      replyToCorrectAnswer();
    } else {
      replyToWrongAnswer(userAnswer, expectedAnswer, userName);
      break;
    }
    if (i === 3) {
      showCongrats(userName);
    }
  }
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export { getRandomInt, processGame as default };
