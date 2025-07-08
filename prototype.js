Array.prototype.calculate = function(logic) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));   
    }
    return output;
}

function double(num) {
    return num * 2;
}

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.calculate(double);
console.log(doubledNumbers);

Array.prototype.filterArray = function(logic) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        if (logic(this[i])) {
            output.push(this[i]);
        }
    }
    return output;
}

function isEven(num) {
    return num % 2 === 0;
}
let evenNumbers = numbers.filterArray(isEven);
console.log(evenNumbers);

Array.prototype.reduceArray = function(logic, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
        accumulator = logic(accumulator, this[i]);
    }
    return accumulator;
}

function sum(a, b) {
    return a + b;
}
let totalSum = numbers.reduceArray(sum, 0);
console.log(totalSum);