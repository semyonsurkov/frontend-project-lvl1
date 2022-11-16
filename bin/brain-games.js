#!/usr/bin/env node
import readlineSync from 'readline-sync';
import runCalc from '../src/games/calc.js';
import runEven from '../src/games/even.js';
import runGcd from '../src/games/gcd.js';
import runPrime from '../src/games/prime.js';
import runProgression from '../src/games/progression.js';

console.log('1.calculator\n2.parity check\n3.greatest common divisor\n4.is it prime\n5.progression');
const userAnswer = readlineSync.question('Choose a game with a number: ');
if (userAnswer === '1') {
	runCalc();
}
if (userAnswer === '2') {
	runEven();
}
if (userAnswer === '3') {
	runGcd();
}
if (userAnswer === '4') {
	runPrime();
}
if (userAnswer === '5') {
	runProgression();
}
