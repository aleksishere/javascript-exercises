const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numbers) {
  return numbers.reduce((index,num) => index + num,0)
};

const multiply = function(numbers) {
  return numbers.reduce((index,num) => index * num,1)
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(number) {
  if(number > 0) {
    let numbers = [];
    for (let i = number; i >= 1; i--) {
      numbers[i] = i;
    }
    return numbers.reduce((index, num) => index*num,1)
  } else {
    return 1;
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
