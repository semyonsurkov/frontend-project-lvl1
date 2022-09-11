import run from "../index.js";
import { getRandomNumber } from "../utils.js";

const description = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (n1, n2) => {
	while (n2 !== 0) n2 = n1 % (n1 = n2);
	return n1;
};

const runGcd = () => {
	const tasks = [];
	let i = 0;
	while (i !== 3) {
		const n1 = getRandomNumber();
		const n2 = getRandomNumber();
		const question = `${n1} ${n2}`;
		const rightAnswer = calculateGcd(n1, n2);
		tasks.push([question, rightAnswer.toString()]);
		i += 1;
	}
	run(tasks, description);
};

export default runGcd;