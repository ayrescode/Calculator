// add function
function add(n1, n2) {
  return n1 + n2;
}
// subtract function
function subtract(n1, n2) {
  return n1 - n2;
}
// multiply function
function multiply(n1, n2) {
  return n1 * n2;
}
// divide function
function divide(n1, n2) {
  return n1 / n2;
}
// variable creation number 1 / operator / number 2
let n1 = '';
let operator = '';
let n2 = '';
// operate function: takes an operator and two numbers and calls one of the above functions
function operate(number1, number2, op) {
  number1 = +n1;
  number2 = +n2;
  op = operator;
  switch (op) {
    case '+':
      return (display.innerText = add(number1, number2));
    case '-':
      return (display.innerText = subtract(number1, number2));
    case '*':
      return (display.innerText = multiply(number1, number2));
    case '/':
      return (display.innerText = divide(number1, number2));
  }
}
// console.log(operate(n1, n2, operator));
const numbers = document.querySelectorAll('.number');
const symbol = document.querySelectorAll('.symbol');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
// display functions
const display = document.querySelector('h1');
// this function gets me the inside of the numbers.
function getN1() {
  for (let i = 0; i < 10; i++) {
    numbers[i].addEventListener('click', () => {
      display.innerText += numbers[i].innerText;
      return display.innerText;
    });
  }
}
getN1();
function getOperator() {
  for (let i = 0; i < 4; i++) {
    symbol[i].addEventListener('click', () => {
      operator = symbol[i].innerText;
      display.innerText += operator;
      return operator;
    });
  }
}
getOperator();
function clearButton() {
  clear.addEventListener('click', () => {
    display.innerText = '';
    (n1 = ''), (n2 = ''), (operator = '');
  });
}
clearButton();
// equal function
function equalButton() {
  equal.addEventListener('click', () => {
    let disp = display.innerText.split(operator);
    n1 = disp[0];
    n2 = disp[1];
    operate(n1, n2, operator);
  });
}
equalButton();
