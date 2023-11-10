const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const equals = document.getElementById('equals');
const resultOutput = document.getElementById('result');
const operatorSelect = document.getElementById('operatorSelect');
const selectedOperator = document.getElementById('selectedOperator');
const results = [];
const photoPozitivUrl = './images/img_3.png';
const photoNegitivUrl = './images/img_1.png';

const photoContainerNum1 = document.getElementById('input-quantity-img');
const photoContainer = document.getElementById('photo-container');
const valueNum2 = document.getElementById('valueNumber2');

function sliceImage(value) {
    const img = document.createElement('img');
    img.classList.add('container-img');
    img.src = value >= 0 ? photoPozitivUrl : photoNegitivUrl;
    img.width = 90;
    img.height = 90;
    const topCut = (value / 2) * 100;
    const downCut = (value / 2) * 100;
    img.style.clipPath = `polygon(0 ${topCut}%, 100% ${topCut}%, 100% ${100 - topCut}%, 0 ${100 - downCut}%)`;
    return (img);
}

function crateImg(value) {
    const img = document.createElement('img');
    img.classList.add('container-img');
    img.src = value >= 0 ? photoPozitivUrl : photoNegitivUrl;
    img.width = 90;
    img.height = 90;
    return img;
}

function calculate(operator) {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);
    // eslint-disable-next-line no-restricted-globals
    if ((isNaN(num1)) && (isNaN(num2))) {
        resultOutput.textContent = 'Enter the correct numbers';
        return;
    }
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(num2)) {
        resultOutput.textContent = 'Enter the numbers 2';
        return;
    }
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(num1)) {
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

    resultOutput.textContent = `${result}`;

    results.push(`Results: ${results.length + 1}: ${num1} ${operator} ${num2} = ${result}`);
    console.log(results);
    valueNum2.textContent = `${num2}`;
    selectedOperator.textContent = `${operator}`;

    photoContainer.innerHTML = ''; // clear content
    if (Math.abs(result) > 100) {
        resultOutput.textContent = 'Max 100';
        photoContainer.textContent = 'Too many dr. Strange > |100|';
        return;
    }
    const containerResult = document.createElement('div');
    containerResult.classList.add('img-container-result');
    const numColumns = Math.ceil(Math.abs(result) / 10); // calculated quantity of columns
    containerResult.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
    for (let i = 0; i < Math.abs(Math.floor(result)); i++) {
        containerResult.appendChild(crateImg(result));
    }
    if (Math.abs(result) < 1) {
        containerResult.appendChild(sliceImage(result));
    }
    photoContainer.appendChild(containerResult);
}

// clicked on =
equals.addEventListener('click', () => {
    const selectedOperatorClick = operatorSelect.value;
    calculate(selectedOperatorClick);
});

// inputed in number 1
number1Input.addEventListener('input', () => {
    photoContainerNum1.innerHTML = ''; // Очистимо вміст
    const num1 = parseFloat(number1Input.value);
    if (Math.abs(num1) > 10) {
        resultOutput.textContent = 'Max 10';
        photoContainerNum1.textContent = 'Too many dr. Strange > |10|';
        return;
    }

    const container = document.createElement('div');
    container.classList.add('img-container');

    for (let i = 0; i < Math.abs(Math.floor(num1)); i++) {
        container.appendChild(crateImg(num1));
    }

    if (Math.abs(num1) < 1) {
        container.appendChild(sliceImage(num1));
    }

    photoContainerNum1.appendChild(container);
});
