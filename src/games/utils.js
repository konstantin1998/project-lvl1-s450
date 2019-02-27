import readlineSync from 'readline-sync';

export const greeting = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const userName = readlineSync.question('May I have your name? ');
  const hello = `Hello, ${userName}!`;
  console.log(hello);
  return userName;
};
export const myRandom = (min, max) => Math.floor(Math.random() * max) + min;
export const answerCheck = (answer, trueAnswer, userName) => {
  if (answer === trueAnswer) {
    const word = 'Correct!';
    console.log(word);
    return false;
  }
  const message = `${answer} is wrong answer ;(. Correct answer was ${trueAnswer}`;
  const str = `Let's try again, ${userName}!`;
  console.log(message);
  console.log(str);
  return true;
};
export const congratulate = (userName) => {
  const words = `Congratulations, ${userName}!`;
  console.log(words);
};
