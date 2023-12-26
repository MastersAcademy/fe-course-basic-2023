import { burgerButton, burgerAction } from './header.js';

burgerButton.addEventListener('click', burgerAction);

const FIRST_VALUE_ELEMENT = document.getElementById('firstValue');
const SECOND_VALUE_ELEMENT = document.getElementById('secondValue');
const OPERATION_ELEMENT = document.getElementById('operation');
const CALCULATE_BUTTON_ELEMENT = document.getElementById('calculate');
const RESULT_ELEMENT = document.getElementById('result');

const firstNumb = document.getElementById('first__numb');
const secondNumb = document.getElementById('second__numb');
const oper = document.getElementById('oper');
const symb = document.getElementById('symb');
const rlt = document.getElementById('rlt');
const dateTime = document.getElementById('date');

CALCULATE_BUTTON_ELEMENT.addEventListener('click', () => {
    const firstValue = FIRST_VALUE_ELEMENT.value;
    const secondValue = SECOND_VALUE_ELEMENT.value;
    const operation = OPERATION_ELEMENT.value;

    RESULT_ELEMENT.innerText = window.calculate(firstValue, secondValue, operation);
});

const date = new Date();
const curDate = `${date.getDate()}-${date.toLocaleString('en', { month: 'short' })}-${date.getUTCFullYear()}, ${date.getUTCHours() + 2}:${date.getUTCMinutes()}`;
const bench = (start) => {
    const finish = Date.now();
    return finish - start;
};

function calculate(firstValue, secondValue, operation) {
    const startFunc = Date.now();
    let result = document.getElementById('result').innerText;
    // Проверка на число
    if (firstValue === '' || !firstValue.trim()) {
        result = '1 value! Enter a number';
        dateTime.innerText = `Date of calculation : ${curDate}. Time of function of execution : ${bench(startFunc)} ms`;
        return result;
    }
    if (secondValue === '' || !secondValue.trim()) {
        result = '2 value! Enter a number';
        dateTime.innerText = `Date of calculation : ${curDate}. Time of function of execution : ${bench(startFunc)} ms`;
        return result;
    }
    const first = +firstValue;
    const second = +secondValue;

    if (Number.isNaN(first) && Number.isNaN(second)) {
        result = 'Both of values are not a number. Enter a number!';
        rlt.innerText = result;
        dateTime.innerText = `Date of calculation : ${curDate}. Time of function of execution : ${bench(startFunc)} ms`;
        return result;
    }
    if (Number.isNaN(first)) {
        result = '1 value! Enter a number';
        rlt.innerText = result;
        dateTime.innerText = `Date of calculation : ${curDate}. Time of function of execution : ${bench(startFunc)} ms`;
        return result;
    }
    if (Number.isNaN(second)) {
        result = '2 value! Enter a number';
        rlt.innerText = result;
        dateTime.innerText = `Date of calculation : ${curDate}. Time of function of execution : ${bench(startFunc)} ms`;
        return result;
    }

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
        dateTime.innerText = `Date of calculation : ${curDate}. Time of function of execution : ${bench(startFunc)} ms`;
        return result;
    }

    if (result > 100) {
        result = 'Too many games';
    } else if (result > 1 || (result < 1 && result >= 0)) {
        result = `${result} games`;
    } else if (result >= 0 && result <= 1) {
        result = `${result} game`;
    } else {
        result = `${result} : Result error!`;
    }

    firstNumb.innerText = first;
    secondNumb.innerText = second;
    oper.innerText = operation;
    symb.innerText = '=';
    rlt.innerText = result;
    dateTime.innerText = `Date of calculation : ${curDate}. Time of function of execution : ${bench(startFunc)} ms`;
    return result;
}
window.calculate = calculate;
