import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => ((y === 0) ? x : gcd(y, x % y));

const generateRound = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const question = `${number1} ${number2}`;
  const rightAnswer = gcd(number1, number2);
  return [question, rightAnswer.toString()];
};

const runGcd = () => {
  run(generateRound, description);
};

export default runGcd;
