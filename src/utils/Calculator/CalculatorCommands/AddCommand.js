export default class AddCommand {
  constructor() {
    this.value = 0;
  }

  execute(currentValueOne, currentValueTwo) {
    this.value = currentValueTwo + currentValueOne;
    return this.value;
  }
}
