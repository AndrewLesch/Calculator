import AbsCommand from './CalculatorCommands/AbsCommand';
import AddCommand from './CalculatorCommands/AddCommand';
import CosinusCommand from './CalculatorCommands/CosinusCommand';
import DivideCommand from './CalculatorCommands/DivideCommand';
import FacCommand from './CalculatorCommands/FacCommand';
import LogCommand from './CalculatorCommands/LogCommand';
import MultiplyCommand from './CalculatorCommands/MultiplyCommand';
import PowCommand from './CalculatorCommands/PowCommand';
import ResidueCommand from './CalculatorCommands/ResidueCommand';
import SinusCommand from './CalculatorCommands/SinusCommand';
import SqrtCommand from './CalculatorCommands/SqrtCommand';
import SubtractCommand from './CalculatorCommands/SubtractCommand';
import TanCommand from './CalculatorCommands/TanCommand';
import Calculator from './Calculator';

export default class InvokerCalculator {
  constructor() {
    this.calculator = new Calculator();
  }

  invokeCommand(operator, valueOne, valueTwo = 0) {
    switch (operator) {
      case '+':
        return this.calculator.executeCommand(
          new AddCommand(valueOne, valueTwo),
        );
      case '*':
        return this.calculator.executeCommand(
          new MultiplyCommand(valueOne, valueTwo),
        );
      case '-':
        return this.calculator.executeCommand(
          new SubtractCommand(valueOne, valueTwo),
        );
      case '/':
        return this.calculator.executeCommand(
          new DivideCommand(valueOne, valueTwo),
        );
      case '%':
        return this.calculator.executeCommand(
          new ResidueCommand(valueOne, valueTwo),
        );
      case 'sin':
        return this.calculator.executeCommand(new SinusCommand(valueOne));
      case 'cos':
        return this.calculator.executeCommand(new CosinusCommand(valueOne));
      case 'abs':
        return this.calculator.executeCommand(new AbsCommand(valueOne));
      case '^':
        return this.calculator.executeCommand(
          new PowCommand(valueOne, valueTwo),
        );
      case 'log':
        return this.calculator.executeCommand(new LogCommand(valueOne));
      case 'tan':
        return this.calculator.executeCommand(new TanCommand(valueOne));
      case '√':
        return this.calculator.executeCommand(new SqrtCommand(valueOne));
      case 'fac':
        return this.calculator.executeCommand(new FacCommand(valueOne));
      default:
        return this.calculator.currentValue;
    }
  }
}
