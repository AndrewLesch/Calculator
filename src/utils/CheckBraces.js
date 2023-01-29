export const checkBraces = str => {
  const chars = str.toString().split('')
  const stack = []
  const openBrace = ['(']
  const closeBrace = [')']
  let closeIndex
  let openIndex

  for (let i = 0, { length } = chars; i < length; i++) {
    openIndex = openBrace.indexOf(chars[i])
    if (openIndex !== -1) {
      stack.push(openIndex)
      continue
    }

    closeIndex = closeBrace.indexOf(chars[i])

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