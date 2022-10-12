import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progressionItems = [];
  let element = start;
  for (let i = 1; i < length; i += 1) {
    progressionItems.push(element);
    element += step;
  }
  return progressionItems;
};

const generateRound = () => {
  const startValue = getRandomNumber(5, 10);
  const stepValue = getRandomNumber(1, 5);
  const lengthValue = getRandomNumber(6, 10);
  const progression = getProgression(startValue, stepValue, lengthValue);
  const indexOfHiddenElement = getRandomIndex(getProgression);
  const rightAnswer = progression[indexOfHiddenElement].toString();
  progression[indexOfHiddenElement] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const runProgression = () => {
  run(generateRound, description);
};

export default runProgression;
