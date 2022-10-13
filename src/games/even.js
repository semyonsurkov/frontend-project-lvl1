import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 10;

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const question = getRandomNumber(minRange, maxRange).toString();
  const rightAnswer = isEven(question);
  return [question, rightAnswer];
};

const runEven = () => {
  run(generateRound, description);
};

export default runEven;
