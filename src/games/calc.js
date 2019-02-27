
import { cons } from 'hexlet-pairs';
import {
  myRandom, engine,
} from './utils';

const times = 3;
const expression = () => {
  const [arg1, arg2] = [myRandom(1, 20), myRandom(1, 20)];
  const num = myRandom(0, 3);
  let result = 0;
  let operation = ' ';
  if (num === 0) {
    result = arg1 + arg2;
    operation = '+';
  } else if (num === 1) {
    result = arg1 * arg2;
    operation = '*';
  } else {
    result = arg1 - arg2;
    operation = '-';
  }
  const corrAnswer = String(result);
  const question = `Question: ${arg1} ${operation} ${arg2}`;
  return cons(question, corrAnswer);
};
const brainCalc = () => {
  const description = 'What is the result of the expression?';
  engine(expression, description, times);
};

export default brainCalc;
