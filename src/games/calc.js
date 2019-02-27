import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import {
  greeting, myRandom, answerCheck, congratulate,
} from './utils';

const times = 3;
const value = (pair) => {
  const arg1 = car(cdr(pair));
  const arg2 = cdr(cdr(pair));
  const num = car(pair);
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
  const expression = `${arg1} ${operation} ${arg2}`;
  return cons(corrAnswer, expression);
};
const brainCalc = () => {
  const userName = greeting('What is the result of the expression?');
  for (let i = 0; i < times; i += 1) {
    const [arg1, arg2] = [myRandom(1, 20), myRandom(1, 20)];
    const randomNum = myRandom(0, 3);
    const argPair = cons(arg1, arg2);
    const pair = cons(randomNum, argPair);
    const corrAnswer = car(value(pair));
    const expression = cdr(value(pair));
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answerCheck(answer, corrAnswer, userName)) {
      return;
    }
  }


  congratulate(userName);
};

export default brainCalc;
