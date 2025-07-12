import runGame from '../index.js'
import { getRandomNumber } from '../helper.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0

const getTask = () => {
  const number = getRandomNumber(1, 100)
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [String(number), correctAnswer]
}

export default () => runGame(description, getTask)
