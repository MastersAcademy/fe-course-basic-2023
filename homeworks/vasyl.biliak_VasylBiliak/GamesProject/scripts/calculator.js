/**
 *
 * @param firstValue string with first number
 * @param secondValue string with second number
 * @param operation string with operation symbol
 * @returns {string|number} result of calculation or error message:
 * - if firstValue or secondValue is not a number, return 'Enter a number'
 * - if operation is not '+', '-', '*', '/', return 'Choose a valid operation'
 * - if the result is more than 100, return 'Result is too big'
 * - else  the result is less than | 1 | return 'result Strange'
 * - else  the result is more than | 1 | return 'result Stranges'
 * - else return number of result: 0.5 '+' 0.2 returns 0.7 Strange
 * - else return number of result: 1 '+' 0 returns 1 Strange
 * - else return number of result: 1 '+' 2 returns 3 Stranges
 *
 *
 */
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const equals = document.getElementById('equals');
const resultOutput = document.getElementById('result');
const operatorSelect = document.getElementById('operatorSelect');
const selectedOperator = document.getElementById('selectedOperator');
const results = [];
const photoPozitivUrl = './img/img_4.png';

const photoContainerNum1 = document.getElementById('input-quantity-img');
const photoContainer = document.getElementById('photo-container');
const valueNum2 = document.getElementById('valueNumber2');
const resultTimestamp = document.getElementById('result-timestamp');
const startTime = new Date();

function sliceImage(value) {
    const img = document.createElement('img');
    img.classList.add('container-img');
    img.src = photoPozitivUrl;
    img.width = 90;
    img.height = 90;
    const topCut = (value / 2) * 100;
    const downCut = (value / 2) * 100;
    img.style.clipPath = `polygon(0 ${topCut}%, 100% ${topCut}%, 100% ${100 - topCut}%, 0 ${100 - downCut}%)`;
    return (img);
}

function crateImg() {
    const img = document.createElement('img');
    img.classList.add('container-img');
    img.src = photoPozitivUrl;
    img.width = 90;
    img.height = 90;
    return img;
}

function getTimestampString() {
    const executionTime = new Date() - startTime;

    const timeFormatOptions = { hour: '2-digit', minute: '2-digit' };
    const formattedTime = new Intl.DateTimeFormat('uk-UA', timeFormatOptions).format(startTime);

    const day = startTime.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(startTime);
    const year = startTime.getFullYear();

    return `Date of calculation: ${day}-${month}-${year}, ${formattedTime}. Time of function execution: ${executionTime}ms`;
}

function calculate(operator) {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);
    if (Number.isNaN(num1) && Number.isNaN(num2)) {
        resultOutput.textContent = 'Enter the correct numbers';
        return;
    }

    if (Number.isNaN(num2)) {
        resultOutput.textContent = 'Enter the numbers 2';
        return;
    }

    if (Number.isNaN(num1)) {
        resultOutput.textContent = 'Enter the numbers 1';
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

    resultTimestamp.innerHTML = getTimestampString();

    resultOutput.textContent = `${result} ${Math.abs(result) > 1 ? 'Stranges' : 'Strange'}`;

    results.push(`Results: ${results.length + 1}: ${num1} ${operator} ${num2} = ${result}`);
    console.log(results);
    valueNum2.textContent = `${num2}`;
    selectedOperator.textContent = `${operator}`;

    photoContainer.innerHTML = '';
    if (Math.abs(result) > 100) {
        resultOutput.textContent = 'Max 100';
        photoContainer.textContent = 'Too many dr. Strange > |100|';
        return;
    }
    const containerResult = document.createElement('div');
    containerResult.classList.add('img-container-result');
    const numColumns = Math.ceil(Math.abs(result) / 10);
    containerResult.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
    if (Math.abs(result) < 1) {
        containerResult.appendChild(sliceImage(Math.abs(result)));
    } else {
        for (let i = 0; i < Math.abs(Math.floor(result)); i++) {
            containerResult.appendChild(crateImg());
        }
    }
    photoContainer.appendChild(containerResult);
}

equals.addEventListener('click', () => {
    const selectedOperatorClick = operatorSelect.value;
    calculate(selectedOperatorClick);
});

number1Input.addEventListener('input', () => {
    photoContainerNum1.innerHTML = '';
    const num1 = parseFloat(number1Input.value);
    if (Math.abs(num1) > 10) {
        resultOutput.textContent = 'Max 10';
        photoContainerNum1.textContent = 'Too many dr. Strange > |10|';
        return;
    }

    const container = document.createElement('div');
    container.classList.add('img-container');

    if (Math.abs(num1) < 1) {
        container.appendChild(sliceImage(Math.abs(num1)));
    } else {
        for (let i = 0; i < Math.abs(Math.floor(num1)); i++) {
            container.appendChild(crateImg());
        }
    }

    photoContainerNum1.appendChild(container);
});
