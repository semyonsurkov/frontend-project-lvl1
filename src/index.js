import readlineSync from 'readline-sync';

const gameRounds = 3;

const run = (tasks, description) => {
	console.log('Welcome to the Brain Games!');
	const userName = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${userName}!`); // повторить урок по интерполяции
	console.log(description);

	for (let i = 0; i < gameRounds; i += 1) {
		const task = tasks[i];
		const question = task[0];
		const rightAnswer = task[1]; // вспомнить тему деструктуризации 
		console.log('Question:', question);

		const userAnswer = readlineSync.question('Your answer: ');
		if (rightAnswer !== userAnswer) {
			console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
			console.log(`Let's try again, ${userName}!`);
			return;
		}
			console.log('Correct!');
	}
	console.log(`Congratulations, ${userName}!`);
};

export default run;