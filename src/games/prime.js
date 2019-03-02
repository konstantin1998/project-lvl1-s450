import { cons } from 'hexlet-pairs';
import myRandom from '../utils';
import engine from '../engine';

const isPrime = (arg) => {
  if (arg < 2) {
    return false;
  }
  if (arg === 2) {
    return true;
  }
  const limit = Math.floor(Math.sqrt(arg)) + 1;
  for (let i = 2; i <= limit; i += 1) {
    if ((arg % i) === 0) {
      return false;
    }
  }
  return true;
};

const questionFunc = () => {
  const randomNum = myRandom(2, 100);
  const trueAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const question = String(randomNum);
  return cons(question, trueAnswer);
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => engine(questionFunc, description);
