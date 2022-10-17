import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const minRange = 1;
const maxRange = 10;

const gcd = (x, y) => ((y === 0) ? x : gcd(y, x % y));

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const question = `${number1} ${number2}`.toString();
  const rightAnswer = gcd(number1, number2).toString();
  return [question, rightAnswer];
};

const runGcd = () => {
  run(generateRound, description);
};

export default runGcd;
