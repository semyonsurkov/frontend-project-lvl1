import readlineSync from "readline-sync";

const getRandomNumber = () => {
	return Math.floor(Math.random() * 100);
}

const evenGame = () => {
	console.log("Welcome to the Brain Games!");
	const userName = readlineSync.question('May I have your name? ');
	console.log(`${'Hello'}, ${userName}${'!'}`);
	console.log('Answer "yes" if the number is even, otherwise answer "no".');

	for (let i = 0; i < 3; i += 1) {
		const randomNumber = getRandomNumber(2, 100);
		console.log('Question:', randomNumber);
		const getUserAnswer = readlineSync.question('Your answer: ');
		const rightAnswer = (randomNumber % 2 === 0 ? 'yes' : 'no'); 

		if (rightAnswer === getUserAnswer) {
			console.log('Correct!');
		} else {
			console.log(`'${getUserAnswer}' is wrong answer ;\(. Correct answer was '${rightAnswer}'. \n Let's try again, ${userName}!`);
			return;
		}
		
	}
	console.log(`Congratulations, ${userName}!`);

};
export default evenGame; 
