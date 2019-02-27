
import {
  cons,
} from 'hexlet-pairs';
import {
  myRandom, engine,
} from './utils';

const gcdCount = () => {
  const [num1, num2] = [myRandom(1, 100), myRandom(1, 100)];
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
  const question = `Question: ${num1} ${num2}`;
  const pair = cons(question, String(result));
  return pair;
};
const times = 3;
const gcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  engine(gcdCount, description, times);
};
export default gcd;
