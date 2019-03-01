import { cons } from 'hexlet-pairs';
import myRandom from '../utils';
import engine from '../engineFile';

const gcdCount = (arg1, arg2) => {
  const min = Math.min(arg1, arg2);
  const max = Math.max(arg1, arg2);
  let result = 0;
  if ((max % min === 0) || min === 1) {
    result = min;
  }
  for (let i = 0; i <= min / 2; i += 1) {
    if ((max % i) === 0 && (min % i) === 0 && i > result) {
      result = i;
    }
  }
  return result;
};
const questionFunc = () => {
  const [num1, num2] = [myRandom(1, 100), myRandom(1, 100)];
  const result = gcdCount(num1, num2);
  const question = `${num1} ${num2}`;
  const pair = cons(question, String(result));
  return pair;
};

const description = 'Find the greatest common divisor of given numbers.';
const gcd = () => {
  engine(questionFunc, description);
};
export default gcd;
