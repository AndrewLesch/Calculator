export default class LogCommand {
  constructor(currentValueOne) {
    this.currentValueOne = currentValueOne;
  }

  execute() {
    const value = Math.log10(this.currentValueOne);
    return value;
  }
}
