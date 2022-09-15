import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const checkPrimeNumber = (num) => {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return 'no';
		}
	}
	return 'yes';
}

const runPrime = () => {
  const tasks = [];
  let i = 0;
  while (i !== 3) {
    const question = getRandomNumber(2, 10);
	 const rightAnswer = checkPrimeNumber(question);
    tasks.push([question, rightAnswer]);
    i += 1;
  }
  run(tasks, description);
};

export default runPrime;
