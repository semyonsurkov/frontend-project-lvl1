import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandomNumber(1, 10);
  const rightAnswer = (question % 2 === 0 ? 'yes' : 'no');
  return [question, rightAnswer];
};

const runEven = () => {
  run(generateRound, description);
};

export default runEven;
