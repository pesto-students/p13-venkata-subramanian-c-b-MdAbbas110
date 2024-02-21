class Calculator  {
    constructor (num1 , num2) {
        this.num1 = num1
        this.num2 = num2
    }
    add(no1 , no2) {
        let res = no1 + no2;
        return res
    }
    subtract(no1 , no2) {
        let res = no1 - no2;
        return res
    }
    divide(no1 , no2) {
        let res = no1 / no2;
        return res
    }
    multi(no1 , no2) {
        let res = no1 * no2;
        return res
    }
}

class ScientificCalculator extends Calculator {
    constructor () {
        super();
    }
    square(num) {
        return num * num;
    }
    cube(num) {
        return num * num * num;
    }
    power(base, expo){
        return Math.pow(base,expo)
    }
}

const scientificCalc = new ScientificCalculator();

// Using the call method to invoke the add method of Calculator class
const additionResult = Calculator.prototype.add.call(scientificCalc, 10, 5);
console.log("Addition result using call:", additionResult);

// Using the apply method to invoke the subtract method of Calculator class
const subtractionResult = Calculator.prototype.subtract.apply(scientificCalc, [10, 5]);
console.log("Subtraction result using apply:", subtractionResult);

// Using the bind method to create a multiplyByTwo method
const multiplyByTwo = Calculator.prototype.multiply.bind(scientificCalc, 2);
const multiplicationResult = multiplyByTwo(10);
console.log("Multiplication result using bind:", multiplicationResult);

// Using the bind method to create a powerOfThree method
const powerOfThree = ScientificCalculator.prototype.power.bind(scientificCalc);
const powerResult = powerOfThree(2, 3);
console.log("Power result using bind:", powerResult);