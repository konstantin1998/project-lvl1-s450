import readlineSync from 'readline-sync';

const times = 10;
const progression = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression?');
  const userName = readlineSync.question('May I have your name? ');
  const hello = `Hello, ${userName}!`;
  console.log(hello);
  const numbers = [];
  const startNum = 5;
  const step = 2;
  const missingIndex = Math.floor(Math.random() * 9);
  const trueAnswer = String(startNum + step * missingIndex);
  let questionString = '';
  for (let i = 0; i < times; i += 1) {
    if (i !== missingIndex) {
      numbers[i] = startNum + step * i;
      questionString += `${String(numbers[i])} `;
    } else {
      questionString += '.. ';
    }
  }
  console.log(`Question: ${questionString}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === trueAnswer) {
    console.log('Correct');
    console.log(`Congratulations, ${userName}!`);
  } else {
    const message = `${answer} is wrong answer ;(. Correct answer was ${trueAnswer}`;
    const words = `Let's try again, ${userName}!`;
    console.log(message);
    console.log(words);
  }
};
export default progression;
