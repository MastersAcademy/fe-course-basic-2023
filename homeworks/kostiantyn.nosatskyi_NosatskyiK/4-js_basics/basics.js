// script for calculator.html
const firstNum = 20;
const secondNum = 10;

// the first action was implemented by assigning a value to a new variable
const sum = firstNum + secondNum;

// basic task (output in console)
console.log(sum); // addition
console.log(firstNum - secondNum); // subtraction
console.log(firstNum * secondNum); // multiplication
console.log(firstNum / secondNum); // division
console.log(firstNum % secondNum); // remainder
console.log(firstNum ** secondNum); // elevation to the module

// advanced task
document.querySelector('[data-addition]').textContent = sum;
document.querySelector('[data-subtraction]').textContent = firstNum - secondNum;
document.querySelector('[data-multiplication]').textContent = firstNum * secondNum;
document.querySelector('[data-division]').textContent = firstNum / secondNum;
document.querySelector('[data-remainder]').textContent = firstNum % secondNum;
document.querySelector('[data-elevationToTheModule]').textContent = firstNum ** secondNum;
