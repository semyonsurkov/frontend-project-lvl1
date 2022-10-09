import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return calculateGcd(y, x % y);
};

const generateRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const rightAnswer = calculateGcd(number1, number2);
  return [question, rightAnswer.toString()];
};

const runGcd = () => {
  const tasks = [];
  let i = 0;
  while (i !== 3) {
    tasks.push(generateRound());
    i += 1;
  }
  run(tasks, description);
};

export default runGcd;
