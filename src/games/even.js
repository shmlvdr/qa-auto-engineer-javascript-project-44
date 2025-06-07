import runGame from '../index.js';
import { getRandomNumber } from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
    const number = getRandomNumber(1, 100);
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
    return [number, correctAnswer];
};

export default () => runGame(description, getQuestionAndAnswer);
