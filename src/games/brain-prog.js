import readlineSync from 'readline-sync';
import {
  greeting, myRandom, answerCheck, congratulate,
} from './utils';

const times = 10;
const progression = () => {
  const userName = greeting('What number is missing in the progression?');
  const numbers = [];
  const startNum = 5;
  const step = 2;
  const missingIndex = myRandom(0, 9);
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
  if (answerCheck(answer, trueAnswer, userName) === 0) {
    congratulate(userName);
  }
};
export default progression;
