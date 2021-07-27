// eslint-disable-next-line object-curly-newline
import { getUserName, welcomeUser, greetUser, outputGameDescription, askQuestion, getUserAnswer, replyToWrongAnswer, replyToCorrectAnswer, outputCongrats } from './cli.js';

const processGame = (description, expression, game) => {
  welcomeUser();
  const userName = getUserName();
  greetUser(userName);
  outputGameDescription(description);
  for (let i = 1; i < 4; i += 1) {
    const question = expression();
    askQuestion(question);
    const userAnswer = getUserAnswer();
    const expectedAnswer = game(question);
    if (userAnswer === expectedAnswer) {
      replyToCorrectAnswer();
    } else {
      replyToWrongAnswer(userAnswer, expectedAnswer, userName);
      break;
    }
    if (i === 3) {
      outputCongrats(userName);
    }
  }
};

export default processGame;
