import run from '../index.js';
import getRandomNumber from '../utils.js';

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

const runProgression = () => {
  const tasks = [];
  let i = 0;
  while (i !== 3) {
    const startValue = getRandomNumber(5, 10);
    const stepValue = getRandomNumber(1, 5);
    const lengthValue = getRandomNumber(6, 10);
    const progression = getProgression(startValue, stepValue, lengthValue);
    const indexOfHiddenElement = getRandomNumber(0, getProgression.length);
    const rightAnswer = progression[indexOfHiddenElement].toString();
    progression[indexOfHiddenElement] = '..';
    const question = progression.join(' ');
    tasks.push([question, rightAnswer]);
    i += 1;
  }
  run(tasks, description);
};

export default runProgression;
