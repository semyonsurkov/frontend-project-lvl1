import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 10;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(minRange, maxRange);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  const question = number.toString();
  return [question, rightAnswer];
};

const runEven = () => {
  run(generateRound, description);
};

export default runEven;
