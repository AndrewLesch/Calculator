export default class CosinusCommand {
  constructor(currentValueOne, currentValueTwo) {
    this.currentValueOne = currentValueOne;
    this.currentValueTwo = currentValueTwo;
  }

  execute() {
    const value = Math.cos(this.currentValueOne);
    return value;
  }
}
