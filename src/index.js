import readlineSync from 'readline-sync';

const countRound = 3;

export default () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < countRound; i++) {
        const number = Math.floor(Math.random() * 100); // случайное число от 0 до 99
        const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

        console.log(`Question: ${number}`);

        let userAnswer = readlineSync.question('Your answer: ');
        userAnswer = userAnswer.trim().toLowerCase();
        
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};
