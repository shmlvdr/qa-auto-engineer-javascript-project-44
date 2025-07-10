import runGame from '../index.js'
import { getRandomNumber } from '../helper.js'

const description = 'Find the greatest common divisor of given numbers.'

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const getTask = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)

  const question = `${num1} ${num2}`
  const correctAnswer = gcd(num1, num2) // вычисление НОД

  return [question, String(correctAnswer)]
}

export default () => runGame(description, getTask)
