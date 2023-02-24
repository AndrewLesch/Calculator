export default class SinusCommand {
  constructor(currentValueOne) {
    this.currentValueOne = currentValueOne;
  }

  execute() {
    const value = Math.sin(this.currentValueOne);
    return value;
  }
}
