import { cons } from 'hexlet-pairs';
import myRandom from '../utils';
import engine from '../engine';

const expression = () => {
  const [arg1, arg2] = [myRandom(1, 20), myRandom(1, 20)];
  const operationNum = myRandom(0, 3);
  let trueAnswer = 0;
  let operation = ' ';
  switch (operationNum) {
    case 0:
      trueAnswer = arg1 + arg2;
      operation = '+';
      break;
    case 1:
      trueAnswer = arg1 * arg2;
      operation = '*';
      break;
    default:
      trueAnswer = arg1 - arg2;
      operation = '-';
      break;
  }
  trueAnswer = String(trueAnswer);
  const question = `${arg1} ${operation} ${arg2}`;
  return cons(question, trueAnswer);
};

const description = 'What is the result of the expression?';

export default () => engine(expression, description);
