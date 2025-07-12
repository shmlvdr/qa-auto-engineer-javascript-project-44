import runGame from '../index.js'
import { getRandomNumber } from '../helper.js'

const description = 'Find the greatest common divisor of given numbers.'

const gcd = (a, b) => {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}

const getTask = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
  const question = `${num1} ${num2}`
  const correctAnswer = gcd(num1, num2)
  return [question, String(correctAnswer)]
}

export default () => runGame(description, getTask)
