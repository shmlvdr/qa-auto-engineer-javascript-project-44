import runGame from '../index.js'
import { getRandomNumber } from '../helper.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (number) => {
  if (number <= 1) return false
  if (number === 2) return true
  if (number % 2 === 0) return false

  const upperBound = Math.sqrt(number)

  for (let i = 3; i <= upperBound; i += 2) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

const getTask = () => {
  const number = getRandomNumber(1, 100)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [String(number), correctAnswer]
}

export default () => runGame(description, getTask)
