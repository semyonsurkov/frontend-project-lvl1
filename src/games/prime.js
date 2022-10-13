import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const minRange = 2;
const maxRange = 10;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(minRange, maxRange);
  const rightAnswer = isPrime(question) === true ? 'yes' : 'no';
  return [question, rightAnswer];
};

const runPrime = () => {
  run(generateRound, description);
};

export default runPrime;
