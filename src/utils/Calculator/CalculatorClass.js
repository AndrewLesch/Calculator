import { calculatePolishWriteback } from './CalculatePolishWriteBack'
import { toPolishWriteback } from './ToPolishWriteBack'

export class Calculator {
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

export class AddCommand {
  constructor(firstValueToAdd, secondValueToAdd) {
    this.firstValueToAdd = firstValueToAdd
    this.secondValueToAdd = secondValueToAdd
  }

  execute() {
    return this.firstValueToAdd + this.secondValueToAdd
  }
}

export class SubtractCommand {
  constructor(firstValueToSubtract, secondValueToSubtract) {
    this.firstValueToSubtract = firstValueToSubtract
    this.secondValueToSubtract = secondValueToSubtract
  }

  execute() {
    return this.firstValueToSubtract - this.secondValueToSubtract
  }
}

export class MultiplyCommand {
  constructor(firstValueToMultiply, secondValueToMultiply) {
    this.firstValueToMultiply = firstValueToMultiply
    this.secondValueToMultiply = secondValueToMultiply
  }

  execute() {
    return this.firstValueToMultiply * this.secondValueToMultiply
  }
}

export class DivideCommand {
  constructor(firstValueToDivide, secondValueToDivide) {
    this.firstValueToDivide = firstValueToDivide
    this.secondValueToDivide = secondValueToDivide
  }

  execute() {
    return this.firstValueToDivide / this.secondValueToDivide
  }
}

export const toCalculator = value => calculatePolishWriteback(toPolishWriteback(value))
