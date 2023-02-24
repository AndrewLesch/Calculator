export default class SqrtCommand {
  constructor(currentValueOne, currentValueTwo) {
    this.currentValueOne = currentValueOne;
    this.currentValueTwo = currentValueTwo;
  }

  execute() {
    const value = Math.sqrt(this.currentValueOne);
    return value;
  }
}
