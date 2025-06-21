import runGame from '../index.js'
import { getRandomNumber } from '../helper.js'

const description = 'What number is missing in the progression?'

const getQuestionAndAnswer = () => {
  const progressionLength = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 50)
  const step = getRandomNumber(1, 10)

  const progression = []
  for (let i = 0; i < progressionLength; i++) {
    progression.push(start + i * step)
  }

  const hiddenElementIndex = getRandomNumber(0, progressionLength - 1)
  const correctAnswer = progression[hiddenElementIndex]

  progression[hiddenElementIndex] = '..'

  const question = progression.join(' ')

  return [question, String(correctAnswer)]
}

export default () => runGame(description, getQuestionAndAnswer)
