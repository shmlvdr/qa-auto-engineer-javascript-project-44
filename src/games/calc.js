import runGame from '../index.js'
import { getRandomNumber } from '../helper.js'

const description = 'What is the result of the expression?'

const calculateExpression = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2
    case '-':
      return number1 - number2
    case '*':
      return number1 * number2
    default:
      throw new Error(`Unsupported operator: ${operator}`)
  }
}

const getTask = () => {
  const firstNumber = getRandomNumber(1, 10)
  const secondNumber = getRandomNumber(1, 10)
  const operators = ['+', '-', '*']
  const operator = operators[getRandomNumber(0, operators.length - 1)]
  const correctAnswer = calculateExpression(firstNumber, secondNumber, operator)
  const question = `${firstNumber} ${operator} ${secondNumber}`
  return [question, String(correctAnswer)]
}

export default () => runGame(description, getTask)
