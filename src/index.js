import readlineSync from 'readline-sync';

const question = () => {
  const userName = readlineSync.question('May I have your name? ');
  const message = `Hello ${userName}!`;
  console.log(message);
};

export default question;
