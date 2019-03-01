import { cons } from 'hexlet-pairs';
import myRandom from '../utils';
import engine from '../engineFile';

const expression = () => {
  const [arg1, arg2] = [myRandom(1, 20), myRandom(1, 20)];
  const operationNum = myRandom(0, 3);
  let result = 0;
  let operation = ' ';
  switch (operationNum) {
    case 0:
      result = arg1 + arg2;
      operation = '+';
      break;
    case 1:
      result = arg1 * arg2;
      operation = '*';
      break;
    default:
      result = arg1 - arg2;
      operation = '-';
      break;
  }
  const corrAnswer = String(result);
  const question = `${arg1} ${operation} ${arg2}`;
  return cons(question, corrAnswer);
};
const description = 'What is the result of the expression?';
const brainCalc = () => {
  engine(expression, description);
};

export default brainCalc;
