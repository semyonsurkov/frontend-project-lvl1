import run from "../index.js";
import { getRandomNumber } from "../utils.js";

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
	const operators = ['+', '-', '*'];
	return operators[Math.floor(Math.random() * operators.length)];
};

const calculateExpression = (n1, n2, operator) => {
	switch (operator) {
		case '+':
			return n1 + n2;
			break;
		case '-':
			return n1 - n2;
			break;
		case '*':
			return n1 * n2;
			break;
	}
};

const runCalc = () => {
	const tasks = [];
	let i = 0;
	while (i !== 3) {
		const n1 = getRandomNumber();
		const n2 = getRandomNumber();
		const operator = getRandomOperator();
		const question = `${n1} ${operator} ${n2}`;
		const rightAnswer = calculateExpression(n1, n2, operator);
		tasks.push([question, rightAnswer.toString()]);
		i += 1;
	}
	run(tasks, description);
};

export default runCalc;