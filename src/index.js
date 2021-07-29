import readlineSync from 'readline-sync';

import greetUser from './cli.js';

const processGame = (description, genQuestion, getExpectedAnswer) => {
  const userName = greetUser();
  console.log(description);
  for (let i = 1; i < 4; i += 1) {
    const question = genQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const expectedAnswer = getExpectedAnswer(question);
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default processGame;
