import readlineSync from 'readline-sync';

const minNum = 1;
const maxNum = 100;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = (number) => number % 2 === 0;

const checkEven = (userName) => {
  const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(ruleMessage);
  for (let i = 1; i < 4; i += 1) {
    const randomNum = getRandomNumber(minNum, maxNum);
    const questionMessage = `Question: ${randomNum}`;
    console.log(questionMessage);
    const userAnswer = readlineSync.question('Your answer: ');
    const expectedAnswer = isEven(randomNum) ? 'yes' : 'no';
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 3) console.log(`Congratulations, ${userName}!`);
  }
};

export default checkEven;
