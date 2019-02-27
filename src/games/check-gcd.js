import readlineSync from 'readline-sync';
import {
  greeting, myRandom, answerCheck, congratulate,
} from './utils';

const gcdCount = (num1, num2) => {
  const [min, max] = [Math.min(num1, num2), Math.max(num1, num2)];
  let result = 0;
  if ((max % min === 0) || min === 1) {
    result = min;
  }
  for (let i = 0; i <= min / 2; i += 1) {
    if ((max % i) === 0 && (min % i) === 0 && i > result) {
      result = i;
    }
  }
  return String(result);
};
const times = 3;
const gcd = () => {
  const userName = greeting('Find the greatest common divisor of given numbers');
  for (let i = 0; i < times; i += 1) {
    const [randomNum1, randomNum2] = [myRandom(1, 100), myRandom(1, 100)];
    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const answer = readlineSync.question('Your answer: ');
    const trueAnswer = gcdCount(randomNum1, randomNum2);
    if (answerCheck(answer, trueAnswer, userName)) {
      return;
    }
  }
  congratulate(userName);
};
export default gcd;
