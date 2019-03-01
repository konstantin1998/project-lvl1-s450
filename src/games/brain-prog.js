import { cons } from 'hexlet-pairs';
import myRandom from '../utils';
import engine from '../engineFile';

const quantity = 10;
const sequence = () => {
  const numbers = [];
  const startNum = myRandom(0, 10);
  const step = myRandom(1, 6);
  const hiddenElementIndex = myRandom(0, quantity - 1);
  const trueAnswer = String(startNum + step * hiddenElementIndex);
  let questionString = '';
  for (let i = 0; i < quantity; i += 1) {
    if (i !== hiddenElementIndex) {
      numbers[i] = startNum + step * i;
      questionString += `${String(numbers[i])} `;
    } else {
      questionString += '.. ';
    }
  }
  questionString = questionString.trim();
  return cons(`${questionString}`, trueAnswer);
};
const description = 'What number is missing in the progression?';
const progression = () => {
  engine(sequence, description);
};
export default progression;
