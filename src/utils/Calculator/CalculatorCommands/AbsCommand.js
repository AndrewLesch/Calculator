export default class AbsCommand {
  constructor(currentValueOne) {
    this.currentValueOne = currentValueOne;
  }

  execute() {
    const value = Math.abs(this.currentValueOne);
    return value;
  }
}
