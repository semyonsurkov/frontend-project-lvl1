import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progressionItems = [];
  for (let i = start; i < length; i += step) {
    progressionItems.push(i);
  }
  return [progressionItems.join(' ')];
};

const runProgression = () => {
  const tasks = [];
  let i = 0;
  while (i !== 3) {
    const start1 = getRandomNumber(1, 10);
    const step1 = getRandomNumber(1, 10);
    const length1 = getRandomNumber(5, 10);
    const question = getProgression(start1, step1, length1).toString();
    const rightAnswer = getRandomNumber();
    tasks.push([question, rightAnswer]);
    i += 1;
  }
  run(tasks, description);
};

export default runProgression;
