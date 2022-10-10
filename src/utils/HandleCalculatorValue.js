import { openBrace, operators, closeBrace, numbers, errors } from "@/constants"

export const handeCalculatorValue = (calculatorValue, btnValue) => {
  let value = `${calculatorValue}${btnValue}`
  let lastSymbol = calculatorValue.toString().slice(-1)

  if (lastSymbol === '.' && !numbers.includes(btnValue)) {
    value = value.slice(0, -1)
  }

  if (value.length === 1 && (operators.includes(btnValue) || value === closeBrace)) {
    value = ''
    throw new Error(errors.invalidFormat)
  }

  if (btnValue === openBrace && !operators.includes(lastSymbol) && lastSymbol !== openBrace && value.length > 1) {
    value = `${calculatorValue}`.concat(`*${btnValue}`)
  }

  if (operators.includes(lastSymbol) && operators.includes(btnValue)) {
    value = `${calculatorValue}${btnValue}`.slice(0, -2).concat(btnValue)
    lastSymbol = ''
  }

  return value
}