import readlineSync from 'readline-sync';
import {
  greeting, myRandom, answerCheck, congratulate,
} from './utils';

const times = 3;
const isEven = num => ((num % 2) === 0);
const even = () => {
  const userName = greeting('Answer "yes" if number even otherwise answer "no".');
  for (let i = 0; i < times; i += 1) {
    const question = myRandom(1, 100);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const trueAnswer = isEven(question) ? 'yes' : 'no';
    if (answerCheck(answer, trueAnswer, userName)) {
      return;
    }
  }

  congratulate(userName);
};

export default even;
