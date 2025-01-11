// add function

function add(n1, n2) {
  return n1 + n2;
}
console.log(add(2, 10));

// subtract function

function subtract(n1, n2) {
  return n1 - n2;
}
console.log(subtract(5, 1));

// multiply function

function multiply(n1, n2) {
  return n1 * n2;
}
console.log(multiply(2, 5));

// divide function

function divide(n1, n2) {
  return n1 / n2;
}
console.log(divide(10, 2));

// variable creation number 1 / operator / number 2
let n1 = 0;
let operator = '';
let n2 = 0;

// operate function: takes an operator and two numbers and calls one of the above functions

function operate(number1, number2, op) {
  number1 = n1;
  number2 = n2;
  op = operator;
  switch (op) {
    case '+':
      return add(number1, number2);
    case '-':
      return subtract(number1, number2);
    case '*':
      return multiply(number1, number2);
    case '/':
      return divide(number1, number2);
  }
}

console.log(operate(n1, n2, operator));