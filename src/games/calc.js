import runGame from '../index.js';
import { getRandomNumber } from '../helper.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNumber(0, operators.length - 1)];

    let correctAnswer;
    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;

        default:
            throw new Error(`Unsupported operator: ${operator}`);
    }

    const question = `${num1} ${operator} ${num2}`;
    return [question, String(correctAnswer)];
};

export default () => runGame(description, getQuestionAndAnswer);