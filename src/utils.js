const getRandomNumber = (min = 1, max = 10) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomIndex = (data) => data[Math.floor(Math.random() * data.length)];

export { getRandomNumber, getRandomIndex };
