const add = function (...args) {
  let addition = 0;
  for (let i = 0; i < args.length; i++) {
    addition += args[i];
  }
  return addition;
};

const subtract = function (...args) {
  let subtraction = 0;
  for (let i = 0; i < args.length; i++) {
    let a = args[i];
    let b = args[i - 1];
    let temp = 0;
    if (a < b) {
      let temp = a;
      a = b;
      b = temp;
    }
    subtraction = a - b;
  }
  return subtraction;
};

const sum = function (array) {
  let sumAll = 0;
  for (i = 0; i < array.length; i++) {
    sumAll += array[i];
  }
  return sumAll;
};

const multiply = function (array) {
  let result = 1;
  for (i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;

};

const power = function (a, b) {
  let result = Math.pow(a, b);
  return result;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  } else {
    let result = num;
    for (i = num; i > 1; i--) {
      num = num - 1;
      result *= num;
    }
    return result;
  }
};

// Do not edit below this line

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};