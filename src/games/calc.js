import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown state calculate: '${calculate}'!`);
  }
};

const runCalc = () => {
  const tasks = [];
  let i = 0;
  while (i !== 3) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const question = `${number1} ${operator} ${number2}`;
    const rightAnswer = calculate(number1, number2, operator);
    tasks.push([question, rightAnswer.toString()]);
    i += 1;
  }
  run(tasks, description);
};

export default runCalc;
