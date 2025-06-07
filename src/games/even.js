import runGame from '../index.js';
import { getRandomNumber } from '../helper.js';

const isEven = (num) => num % 2 === 0; 

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const getQuestionAndAnswer = () => {
    const question = getRandomNumber(1, 9);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer]
}

export default () => {
    runGame();
}
