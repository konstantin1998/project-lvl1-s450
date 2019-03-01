import { cons } from 'hexlet-pairs';
import myRandom from '../utils';
import engine from '../engineFile';

const isEven = num => ((num % 2) === 0);
const questionFunc = () => {
  const randomNum = myRandom(1, 100);
  const trueAnswer = isEven(randomNum) ? 'yes' : 'no';
  return cons(String(randomNum), trueAnswer);
};
const description = 'Answer "yes" if number even otherwise answer "no".';
const even = () => {
  engine(questionFunc, description);
};

export default even;
