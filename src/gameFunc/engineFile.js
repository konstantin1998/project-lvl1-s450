import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { greeting, congratulate } from './utils';


const engine = (gameFunc, description) => {
  const times = 3;
  const userName = greeting(description);
  for (let i = 0; i < times; i += 1) {
    const pair = gameFunc();
    const question = `Question: ${car(pair)}`;
    const trueAnswer = cdr(pair);
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      const message = `${answer} is wrong answer ;(. Correct answer was ${trueAnswer}`;
      const str = `Let's try again, ${userName}!`;
      console.log(message);
      console.log(str);
      return;
    }
  }
  congratulate(userName);
};
export default engine;
