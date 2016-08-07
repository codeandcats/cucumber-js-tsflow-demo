import { Calculator } from '../../src/calculator';
import { expect } from 'chai';
import { binding, given, when, then } from 'cucumber-tsflow';

class Context {
    public calculator = new Calculator();
    public inputs: number[] = [];
    public result: number;
}

@binding([Context])
class Steps {
    constructor(private context: Context) {
    }

    @given(/I enter the number (\d+)/)
    addInput(value: string): void {
        this.context.inputs.push(+value);
    }

    @when(/I add them/)
    sumInputs() {
        this.context.result = this.context.calculator.add(...this.context.inputs);
    }

    @then(/The result should be (\d+)/)
    expectResult(expectedValue: string) {
        expect(this.context.result).to.equal(+expectedValue);
    }
}

export = Steps;
