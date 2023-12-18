const FIRST_VALUE_ELEMENT = document.getElementById('firstValue');
const SECOND_VALUE_ELEMENT = document.getElementById('secondValue');
const OPERATION_ELEMENT = document.getElementById('operation');
const CALCULATE_BUTTON_ELEMENT = document.getElementById('calculate');
const IMAGE_ELEMENT = document.getElementById('images__value');
const OPERATOR = document.querySelector('.operator');
const SECOND_OPERAND = document.querySelector('.second__operand');
const RESULT = document.querySelector('.result');
const EQUALS = document.querySelector('.equals');
const RESULT_COLUMN = document.querySelector('.result__column');
const DATA_CONTAINER = document.querySelector('.datetime__container');
const NUM_RUNS = 100000;

function bench(f) {
    const firstValue = Math.random() * 100;
    const secondValue = Math.random() * 100;
    const operation = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
    const start = Date.now();
    for (let i = 0; i < NUM_RUNS; i++) f(firstValue, secondValue, operation);
    return Date.now() - start;
}

function displayImages(value, element) {
    element.innerHTML = '';
    if (value <= 0) {
        return;
    }

    for (let i = 0; i < value; i++) {
        const img = document.createElement('img');
        img.setAttribute('src', './images/game_picture.jpg');
        img.setAttribute('alt', 'game picture');
        img.setAttribute('width', '90px');
        img.setAttribute('height', '90px');
        img.classList.add('image');
        element.appendChild(img);
    }

    if (!Number.isInteger(value)) {
        const decimal = (value - Math.floor(value)) * 100;
        element.lastElementChild.setAttribute('style', `clip-path: polygon(0 0, 100% 0, 100% ${decimal}%, 0 ${decimal}%)`);
    }
}

function resetCalculator() {
    OPERATOR.innerText = ' ';
    SECOND_OPERAND.innerText = '';
    EQUALS.innerText = '';
    RESULT.innerText = '';
    RESULT_COLUMN.innerText = '';
}

FIRST_VALUE_ELEMENT.addEventListener('change', () => {
    const firstValue = +FIRST_VALUE_ELEMENT.value;

    if (firstValue > 10) {
        IMAGE_ELEMENT.innerText = 'Max 10';
        return;
    }

    resetCalculator();
    displayImages(firstValue, IMAGE_ELEMENT);
});

CALCULATE_BUTTON_ELEMENT.addEventListener('click', () => {
    const secondValue = +SECOND_VALUE_ELEMENT.value;
    const operation = OPERATION_ELEMENT.value;
    const firstValue = +FIRST_VALUE_ELEMENT.value;

    if (firstValue === 0 || secondValue === 0) {
        resetCalculator();
        IMAGE_ELEMENT.innerText = 'Enter a number';
        return;
    }

    displayImages(firstValue, IMAGE_ELEMENT);
    OPERATOR.innerText = operation;
    SECOND_OPERAND.innerText = secondValue;
    EQUALS.innerText = '=';

    const [resCount, str] = window.calculate(firstValue, secondValue, operation);

    if (resCount < 100) {
        displayImages(resCount, RESULT);
        RESULT_COLUMN.innerText = `${resCount} ${str}`;
    } else {
        RESULT_COLUMN.innerText = '';
        RESULT.innerText = resCount;
    }

    const formattedDate = new Date().toLocaleString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    const performance = bench(window.calculate);
    DATA_CONTAINER.innerText = `Date of calculation: ${formattedDate}. Time of function execution: ${performance} ms`;
});
