const FIRST_VALUE_ELEMENT = document.getElementById('firstValue');
const SECOND_VALUE_ELEMENT = document.getElementById('secondValue');
const OPERATION_ELEMENT = document.getElementById('operation');
const CALCULATE_BUTTON_ELEMENT = document.getElementById('calculate');
const RESULT_ELEMENT = document.getElementById('result');

// output variables
const firstNumb = document.getElementById('first__numb');
const secondNumb = document.getElementById('second__numb');
const oper = document.getElementById('oper');
const symb = document.getElementById('symb');
const rlt = document.getElementById('rlt');
/*
// Output cards
const firstCard = document.querySelector('.first__card');
const secondCard = document.getElementById('second__card');
const operCard = document.getElementById('oper__card');
const symbCard = document.getElementById('symb__card');
const rltCard = document.getElementById('rlt__card');
 */

// Event click
CALCULATE_BUTTON_ELEMENT.addEventListener('click', () => {
    const firstValue = FIRST_VALUE_ELEMENT.value;
    const secondValue = SECOND_VALUE_ELEMENT.value;
    const operation = OPERATION_ELEMENT.value;

    RESULT_ELEMENT.innerText = window.calculate(firstValue, secondValue, operation);
});

function calculate(firstValue, secondValue, operation) {
    let result = document.getElementById('result').innerText;
    // Проверка на число
    if (firstValue === '' || !firstValue.trim()) {
        result = '1 value! Enter a number';
        return result;
    }
    if (secondValue === '' || !secondValue.trim()) {
        result = '2 value! Enter a number';
        return result;
    }
    const first = +firstValue;
    const second = +secondValue;

    if (Number.isNaN(first) && Number.isNaN(second)) {
        result = 'Both of values are not a number. Enter a number!';
        rlt.innerText = result;
        return result;
    }
    if (Number.isNaN(first)) {
        result = '1 value! Enter a number';
        rlt.innerText = result;
        return result;
    }
    if (Number.isNaN(second)) {
        result = '2 value! Enter a number';
        rlt.innerText = result;
        return result;
    }

    // Проверка на математическую операцию
    if (operation === '+') {
        result = Number(first) + Number(second);
    } else
    if (operation === '-') {
        result = first - second;
    } else
    if (operation === '*') {
        result = first * second;
    } else
    if (operation === '/') {
        result = first / second;
    } else
    if (operation === '**') {
        result = first ** second;
    } else {
        result = 'Choose correct math operation!';
        oper.innerText = operation;
        rlt.innerText = result;
        return result;
    }

    // Проверка величины результата
    if (result > 100) {
        result = 'Too many games';
    }

    // Output result
    firstNumb.innerText = first;
    secondNumb.innerText = second;
    oper.innerText = operation;
    symb.innerText = '=';
    rlt.innerText = result;
    return result;
}

window.calculate = calculate;
