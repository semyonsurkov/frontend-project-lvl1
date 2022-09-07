import run from "../index.js";
import { getRandomNumber } from "../utils.js";

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const runEven = () => {
	const tasks = [];
	let i = 0;
	/// ... решение
	while (i !== 3) {
		const question = getRandomNumber(1, 10);
		const rightAnswer = (question % 2 === 0 ? 'yes' : 'no');
		tasks.push([question, rightAnswer]);
		i += 1;
	}
	run(tasks, description);
};
// вызов функции, которая соберет список массивов [[вопрос1, ответ1], [вопрос2, ответ2], [вопрос3, ответ3]]
// не усложнять именование переменных, например startTheGame = run, не увеличивать запись
export default runEven; 
