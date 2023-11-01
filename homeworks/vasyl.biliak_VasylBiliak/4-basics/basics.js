const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const remainderBtn = document.getElementById('remainder');
const exponentiationBtn = document.getElementById('exponentiation');
const resultOutput = document.getElementById('result');
const results = [];

function calculate(operator) {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);
    if (num1.isNaN || num2.isNaN) {
        resultOutput.textContent = 'Enter the correct numbers';
        return;
    }
    let result;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            resultOutput.textContent = 'Division by zero is impossible';
            return;
        }
        result = num1 / num2;
    } else if (operator === '%') {
        result = num1 % num2;
    } else if (operator === '**') {
        result = num1 ** num2;
    }
    resultOutput.textContent = `${num1} ${operator} ${num2} = ${result}`;
    results.push(`Results: №${results.length + 1}: ${num1} ${operator} ${num2} = ${result}`);
    console.log(results);
    console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
}

addBtn.addEventListener('click', () => calculate('+'));
subtractBtn.addEventListener('click', () => calculate('-'));
multiplyBtn.addEventListener('click', () => calculate('*'));
divideBtn.addEventListener('click', () => calculate('/'));
remainderBtn.addEventListener('click', () => calculate('%'));
exponentiationBtn.addEventListener('click', () => calculate('**'));
