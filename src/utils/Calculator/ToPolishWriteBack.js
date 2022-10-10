import { closeBrace, openBrace, operatorsPriority } from '@/constants/calculator'

// The function of converting to Polish notation for further work with it.
export const toPolishWriteback = statement => {
  const stack = []
  let expression = ''
  const result = []

  for (let i = 0; i < statement.length; ++i) {
    const char = statement.charAt(i)
    if ((['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']).indexOf(char) >= 0) {
      expression += char
    } else if (char === openBrace) {
      stack.push(char)
    } else if (char === closeBrace) {
      if (expression !== '') {
        result.push(expression)
      }
      expression = ''
      let el = stack.pop()

      while (el && el !== openBrace) {
        expression = el
        el = stack.pop()
        result.push(expression)
      }
      expression = ''
    } else if (Object.keys(operatorsPriority).indexOf(char) >= 0) {
      if (expression !== '') {
        result.push(expression)
      }
      expression = ''
      while (operatorsPriority[stack.slice(-1)[0]] >= operatorsPriority[char]) {
        expression = stack.pop()
        result.push(expression)
      }
      stack.push(char)
      expression = ''
    }
  }

  if (expression !== '') {
    result.push(expression)
  }

  let sym = ''
  expression = ''
  while ((sym = stack.pop())) {
    expression = sym
    result.push(expression)
  }
  return result
}