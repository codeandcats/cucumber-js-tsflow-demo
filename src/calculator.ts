export class Calculator {
    add(...values: number[]): number {
        let result = 0;
        for (const value of values) {
            result += +value;
        }
        return result;
    }

    subtract(...values: number[]): number {
        let result;
        for (const value of values) {
            if (result === undefined) {
                result = +value;
            }
            else {
                result -= +value;
            }
        }
        return result;
    }
}