import runGame from '../index.js'
import { getRandomNum } from '../helper.js'

const description = 'What number is missing in the progression?'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const getTask = () => {
  const length = getRandomNum(5, 10)
  const start = getRandomNum(1, 50)
  const step = getRandomNum(1, 10)
  const progression = generateProgression(start, step, length)
  const hiddenElementIndex = getRandomNum(0, progression.length - 1)
  const correctAnswer = progression[hiddenElementIndex]
  progression[hiddenElementIndex] = '..'
  const question = progression.join(' ')
  return [question, String(correctAnswer)]
}

export default () => runGame(description, getTask)
