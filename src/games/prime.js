import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const checkPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRound = () => {
  const question = getRandomNumber(2, 10);
  const rightAnswer = checkPrimeNumber(question);
  return [question, rightAnswer];
};

const runPrime = () => {
  run(generateRound, description);
};

export default runPrime;
