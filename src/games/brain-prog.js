
import { cons } from 'hexlet-pairs';
import {
  myRandom, engine,
} from './utils';

const times = 1;
const sequence = () => {
  const quantity = 10;
  const numbers = [];
  const startNum = 5;
  const step = 2;
  const missingIndex = myRandom(0, 9);
  const trueAnswer = String(startNum + step * missingIndex);
  let questionString = '';
  for (let i = 0; i < quantity; i += 1) {
    if (i !== missingIndex) {
      numbers[i] = startNum + step * i;
      questionString += `${String(numbers[i])} `;
    } else {
      questionString += '.. ';
    }
  }
  return cons(`Question: ${questionString}`, trueAnswer);
};
const progression = () => {
  const description = 'What number is missing in the progression?';
  engine(sequence, description, times);
};
export default progression;
