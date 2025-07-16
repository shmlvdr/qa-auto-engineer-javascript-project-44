import runGame from '../index.js'
import { getRandomNum } from '../helper.js'

const description = 'What is the result of the expression?'
const operators = ['+', '-', '*']

const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unsupported operator: ${operator}`)
  }
}

const getTask = () => {
  const num1 = getRandomNum(1, 10)
  const num2 = getRandomNum(1, 10)
  const operator = operators[getRandomNum(0, operators.length - 1)]
  const correctAnswer = calculateExpression(num1, num2, operator)
  const question = `${num1} ${operator} ${num2}`
  return [question, String(correctAnswer)]
}

export default () => runGame(description, getTask)
