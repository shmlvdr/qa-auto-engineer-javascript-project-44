import runGame from '../index.js'
import { getRandomNumber } from '../helper.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (num) => {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }

  return true
}

const getTask = () => {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isPrime(question) ? 'yes' : 'no'

  return [question, correctAnswer]
}

export default () => runGame(description, getTask)
