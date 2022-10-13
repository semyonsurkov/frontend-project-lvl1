import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const minRange = 5;
const maxRange = 10;
const minStep = 1;
const maxStep = 5;
const minLength = 6;
const maxLength = 10;

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
  const start = getRandomNumber(minRange, maxRange);
  const step = getRandomNumber(minStep, maxStep);
  const length = getRandomNumber(minLength, maxLength);
  const progression = getProgression(start, step, length);
  const hiddenElementIndex = getRandomIndex(progression);
  const rightAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const runProgression = () => {
  run(generateRound, description);
};

export default runProgression;
