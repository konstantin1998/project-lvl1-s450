import { cons } from 'hexlet-pairs';
import myRandom from '../utils';
import engine from '../engineFile';

const primeCheck = (arg) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(arg)) + 1; i += 1) {
    if ((arg % i) === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const questionFunc = () => {
  const randomNum = myRandom(1, 100);
  return cons(String(randomNum), primeCheck(randomNum));
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const prime = () => {
  engine(questionFunc, description);
};
export default prime;
