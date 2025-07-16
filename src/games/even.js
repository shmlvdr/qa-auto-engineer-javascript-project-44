import runGame from '../index.js'
import { getRandomNum } from '../helper.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = num => num % 2 === 0

const getTask = () => {
  const num = getRandomNum(1, 100)
  const correctAnswer = isEven(num) ? 'yes' : 'no'
  return [String(num), correctAnswer]
}

export default () => runGame(description, getTask)
