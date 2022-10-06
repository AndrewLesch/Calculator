class Calculator {
  constructor() {
    this.history = []
    this.values = []
  }

  executeCommand(command) {
    const value = command.execute(this.values.pop(), this.values.pop())
    this.values.push(value)
    this.history.push(command)
  }

  getResult() {
    return this.values.pop()
  }

  pushValue(value) {
    this.values.push(value)
  }
}

class AddCommand {

  execute(currentValueOne, currentValueTwo) {
    return currentValueOne + currentValueTwo
  }
}

class SubtractCommand {

  execute(currentValueOne, currentValueTwo) {
    return currentValueTwo - currentValueOne
  }
}

class MultiplyCommand {

  execute(currentValueOne, currentValueTwo) {
    return currentValueOne * currentValueTwo
  }
}

class DivideCommand {

  execute(currentValueOne, currentValueTwo) {
    return currentValueTwo / currentValueOne
  }
}

// Функция для преобразования выражения в польскую запись для дальнешей работы с ней.
const toPolishWriteback = statement => {
  const stack = []
  let result = ''

  // Приоритет операторов
  const operators = {
    '+': 0,
    '-': 0,
    '*': 1,
    '/': 1,
  }

  for (let i = 0; i < statement.length; ++i) {
    const char = statement.charAt(i)

    if ((['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "."]).indexOf(char) >= 0) {
      result += char
    } else if (char === '(') {
      stack.push(char)
    } else if (char === ')') {
      result += "?"
      let s = stack.pop()

      while (s && s !== '(') {
        result += s
        s = stack.pop()
      }
    } else if (Object.keys(operators).indexOf(char) >= 0) {
      result += "?"
      while (operators[stack.slice(-1)[0]] >= operators[char]) {
        result += stack.pop()
      }
      stack.push(char)
    }
  }

  let sym = ''
  const lastChar = result[result.length - 1]
  if ((['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']).indexOf(lastChar) >= 0) {
    result += '?'
  }
  while ((sym = stack.pop())) {
    result += sym
  }

  return result
}


// Функция расчета выражения польской записи
const calculatePolishWriteback = statement => {
  let number = 0
  let stroka = ""

  const myCalculator = new Calculator()

  for (let i = 0; i < statement.length; i++) {
    if (statement[i] <= "9" && statement[i] >= "0" || statement[i] === ".") {
      stroka += statement[i]
    } else if (statement[i] === "?") {
      number = +stroka
      myCalculator.pushValue(number)
      stroka = ""
    } else {
      switch (statement[i]) {
        case '+': myCalculator.executeCommand(new AddCommand()); break
        case '-': myCalculator.executeCommand(new SubtractCommand()); break
        case '*': myCalculator.executeCommand(new MultiplyCommand()); break
        case '/': myCalculator.executeCommand(new DivideCommand()); break
      }
    }
  }
  return myCalculator.getResult()
}

export const toCalculator = value => +calculatePolishWriteback(toPolishWriteback(value)).toFixed(3)
