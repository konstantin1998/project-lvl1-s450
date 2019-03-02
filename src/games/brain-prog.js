import { cons } from 'hexlet-pairs';
import myRandom from '../utils';
import engine from '../engine';

const quantity = 10;
const questionFunc = () => {
  const startNum = myRandom(0, 10);
  const step = myRandom(1, 6);
  const hiddenElementIndex = myRandom(0, quantity - 1);
  const trueAnswer = String(startNum + step * hiddenElementIndex);
  let question = '';
  for (let i = 0; i < quantity; i += 1) {
    if (i !== hiddenElementIndex) {
      const element = startNum + step * i;
      question += `${element} `;
    } else {
      question += '.. ';
    }
  }
  question = question.trim();
  return cons(question, trueAnswer);
};

const description = 'What number is missing in the progression?';

export default () => engine(questionFunc, description);
