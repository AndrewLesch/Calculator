import { operators } from "@/constants/calculatorConstants"

class Calculator {
  constructor() {
    this.history = []
  }

  executeCommand(command) {
    this.history.push(command)
    return command.execute()
  }

  isHistoryNotEmpty() {
    return this.history.length
  }
}

class AddCommand {
  constructor(firstValueToAdd, secondValueToAdd) {
    this.firstValueToAdd = firstValueToAdd
    this.secondValueToAdd = secondValueToAdd
  }

  execute() {
    return this.firstValueToAdd + this.secondValueToAdd
  }
}

class SubtractCommand {
  constructor(firstValueToSubtract, secondValueToSubtract) {
    this.firstValueToSubtract = firstValueToSubtract
    this.secondValueToSubtract = secondValueToSubtract
  }

  execute() {
    return this.firstValueToSubtract - this.secondValueToSubtract
  }
}

class MultiplyCommand {
  constructor(firstValueToMultiply, secondValueToMultiply) {
    this.firstValueToMultiply = firstValueToMultiply
    this.secondValueToMultiply = secondValueToMultiply
  }

  execute() {
    return this.firstValueToMultiply * this.secondValueToMultiply
  }
}

class DivideCommand {
  constructor(firstValueToDivide, secondValueToDivide) {
    this.firstValueToDivide = firstValueToDivide
    this.secondValueToDivide = secondValueToDivide
  }

  execute() {
    return this.firstValueToDivide / this.secondValueToDivide
  }
}

// Функция для преобразования выражения в польскую запись для дальнешей работы с ней.
const toPolishWriteback = statement => {
  const stack = []
  let expression = ''
  const result = []

  // operator: priority
  const operators = {
    '+': 0,
    '-': 0,
    '*': 1,
    '/': 1,
  }

  for (let i = 0; i < statement.length; ++i) {
    const char = statement.charAt(i)
    if ((['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "."]).indexOf(char) >= 0) {
      expression += char
    } else if (char === '(') {
      stack.push(char)
    } else if (char === ')') {
      if (expression !== "") {
        result.push(expression)
      }
      expression = ""
      let el = stack.pop()

      while (el && el !== '(') {
        expression = el
        el = stack.pop()
        result.push(expression)
      }
      expression = ""
    } else if (Object.keys(operators).indexOf(char) >= 0) {
      if (expression !== "") {
        result.push(expression)
      }
      expression = ""
      while (operators[stack.slice(-1)[0]] >= operators[char]) {
        expression = stack.pop()
        result.push(expression)
      }
      stack.push(char)
      expression = ""
    }
  }

  if (expression !== "") {
    result.push(expression)
  }

  let sym = ""
  expression = ""
  while ((sym = stack.pop())) {
    expression = sym
    result.push(expression)
  }
  return result
}


// Функция расчета выражения польской записи
const calculatePolishWriteback = polishWriteback => {
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
  return stack.pop()
}

export const toCalculator = value => +calculatePolishWriteback(toPolishWriteback(value)).toFixed(3)
