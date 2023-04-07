const sumAll = function (...numbers) {
    let num1, num2;
    for (let i = 0; i < numbers.length; i++) {
        num1 = numbers[i - 1];
        num2 = numbers[i];
    }
    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    } else {
        let start, stop;
        if (num1 > num2) {
            start = num2;
            stop = num1;
        } else {
            start = num1;
            stop = num2;
        }
        let array = [];
        for (let i = start; i <= stop; i++) {
            array.push(i);
        }
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
