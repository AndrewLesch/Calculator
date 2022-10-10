import { operators } from '@/constants/calculator'
import { AddCommand, Calculator, DivideCommand, MultiplyCommand, SubtractCommand } from './CalculatorClass'

// Function for calculating the expression of the Polish notation
export const calculatePolishWriteback = polishWriteback => {
  const myCalculator = new Calculator()
  let firstNumber, secondNumber, result
  const stack = []

  for (let i = 0; i < polishWriteback.length; i++) {
    if ((operators).indexOf(polishWriteback[i]) < 0) {
      stack.push(+polishWriteback[i])
    } else {
      secondNumber = stack.pop()
      firstNumber = stack.pop()
      switch (polishWriteback[i]) {
        case '+': result = myCalculator.executeCommand(new AddCommand(firstNumber, secondNumber)); break
        case '-': result = myCalculator.executeCommand(new SubtractCommand(firstNumber, secondNumber)); break
        case '*': result = myCalculator.executeCommand(new MultiplyCommand(firstNumber, secondNumber)); break
        case '/': result = myCalculator.executeCommand(new DivideCommand(firstNumber, secondNumber)); break
      }
      stack.push(result)
    }
  }
  return +stack.pop().toFixed(3)
}