const myBody = document.querySelector('body');

const firstNumber = Number(prompt('enter first number'));
const secondNumber = Number(prompt('enter second number'));

const addingOperator = firstNumber + secondNumber;
const subtractionOperator = firstNumber - secondNumber;
const multiplicationOperator = firstNumber * secondNumber;
const divisionOperator = firstNumber / secondNumber;
const remainderOperator = firstNumber % secondNumber;
const exponentiationOperator = firstNumber ** secondNumber;

myBody.innerHTML = `
    <h1>You entered <span class="accent">${firstNumber}</span> and <span class="accent">${secondNumber}</span></h1>
    <ul>
        <li>Adding:    <span class="accent">${firstNumber} + ${secondNumber} = ${addingOperator}</span></li>
        <li>Subtraction:    <span class="accent">${firstNumber} - ${secondNumber} = ${subtractionOperator}</span></li>
        <li>Multiplication:    <span class="accent">${firstNumber} * ${secondNumber} = ${multiplicationOperator}</span></li>
        <li>Division:    <span class="accent">${firstNumber} / ${secondNumber} = ${divisionOperator}</span></li>
        <li>Remainder:    <span class="accent">${firstNumber} % ${secondNumber} = ${remainderOperator}</span></li>
        <li>Exponentiation:    <span class="accent">${firstNumber} ** ${secondNumber} = ${exponentiationOperator}</span></li>
    </ul>
<a class="btn" href="index.html">refresh</a>`;
