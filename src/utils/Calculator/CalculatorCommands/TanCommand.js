export default class TanCommand {
  constructor(currentValueOne) {
    this.currentValueOne = currentValueOne;
  }

  execute() {
    const value = Math.tan(this.currentValueOne);
    return value;
  }
}
