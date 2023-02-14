export default class FacCommand {
  constructor(currentValueOne) {
    this.currentValueOne = currentValueOne;
  }

  factorial(n) {
    return n ? n * this.factorial(n - 1) : 1;
  }

  execute() {
    const value = this.factorial(this.currentValueOne);
    return value;
  }
}
