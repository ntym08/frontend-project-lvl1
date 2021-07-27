import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
};

export const greetUser = (name) => {
  console.log(`Hello, ${name}!`);
};

export const outputGameDescription = (description) => {
  console.log(description);
};

export const askQuestion = (expression) => {
  console.log(`Question: ${expression}`);
};

export const replyToWrongAnswer = (wrongAnswer, correctAnswer, name) => {
  console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

export const replyToCorrectAnswer = () => {
  console.log('Correct!');
};

export const outputCongrats = (name) => {
  console.log(`Congratulations, ${name}!`);
};
