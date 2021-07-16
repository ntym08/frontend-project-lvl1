import readlineSync from 'readline-sync';

export const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  if (userName !== '') {
    console.log(`Hello, ${userName}!`);
  }
};
