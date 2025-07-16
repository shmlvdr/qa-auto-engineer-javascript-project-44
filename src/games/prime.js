import runGame from '../index.js'
import { getRandomNum } from '../helper.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (num) => {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  const upperBound = Math.sqrt(num)

  for (let i = 3; i <= upperBound; i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const getTask = () => {
  const num = getRandomNum(1, 100)
  const correctAnswer = isPrime(num) ? 'yes' : 'no'
  return [String(num), correctAnswer]
}

export default () => runGame(description, getTask)
