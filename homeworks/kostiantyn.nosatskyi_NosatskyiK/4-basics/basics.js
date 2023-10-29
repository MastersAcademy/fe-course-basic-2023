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
document.getElementById('addition').textContent = sum;
document.getElementById('subtraction').textContent = firstNum - secondNum;
document.getElementById('multiplication').textContent = firstNum * secondNum;
document.getElementById('division').textContent = firstNum / secondNum;
document.getElementById('remainder').textContent = firstNum % secondNum;
document.getElementById('elevation-to-the-module').textContent = firstNum ** secondNum;
