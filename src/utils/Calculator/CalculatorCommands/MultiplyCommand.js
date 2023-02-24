export default class MultiplyCommand {
  constructor(currentValueOne, currentValueTwo) {
    this.currentValueOne = currentValueOne;
    this.currentValueTwo = currentValueTwo;
  }

  execute() {
    const value = this.currentValueTwo * this.currentValueOne;
    return value;
  }
}
