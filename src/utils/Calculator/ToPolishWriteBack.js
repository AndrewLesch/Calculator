import { closeBrace, numberDivider, openBrace, operatorsPriority } from '@/constants/calculator'

// The function of converting to Polish notation for further work with it.
export const toPolishWriteback = statement => {
  const stack = []
  let result = ''

  for (let i = 0; i < statement.length; ++i) {
    const char = statement.charAt(i)

    if ((['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']).indexOf(char) >= 0) {
      result += char
    } else if (char === openBrace) {
      stack.push(char)
    } else if (char === closeBrace) {
      if (result[result.length - 1] !== numberDivider && Object.keys(operatorsPriority).indexOf(result[result.length - 1]) < 0) {
        result += numberDivider
      }
      let el = stack.pop()

      while (el && el !== openBrace) {
        result += el
        el = stack.pop()
      }
    } else if (Object.keys(operatorsPriority).indexOf(char) >= 0) {
      if (result[result.length - 1] !== numberDivider && Object.keys(operatorsPriority).indexOf(result[result.length - 1]) < 0) {
        result += numberDivider
      }
      while (operatorsPriority[stack.slice(-1)[0]] >= operatorsPriority[char]) {
        result += stack.pop()
      }

      stack.push(char)
    }
  }

  let sym = ''
  const lastChar = result[result.length - 1]
  
  if ((['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']).indexOf(lastChar) >= 0) {
    result += numberDivider
  }

  while ((sym = stack.pop())) {
    result += sym
  }

  return result
}