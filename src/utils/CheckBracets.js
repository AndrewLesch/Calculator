// Функция для определения правильной расстоновки скобок.

export const checkBracets = str => {
  const chars = str.toString().split('')
  const stack = []
  const openBracet = ['(']
  const closeBracet = [')']
  let closeIndex
  let openIndex

  for (let i = 0, { length } = chars; i < length; i++) {
    openIndex = openBracet.indexOf(chars[i])
    if (openIndex !== -1) {
      stack.push(openIndex)
      continue
    }

    closeIndex = closeBracet.indexOf(chars[i])

    if (closeIndex !== -1) {
      openIndex = stack.pop()
      if (closeIndex !== openIndex) {
        return false
      }
    }
  }

  if (stack.length !== 0) {
    return false
  }

  return true
}