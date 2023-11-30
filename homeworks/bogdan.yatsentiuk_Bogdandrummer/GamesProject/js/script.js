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
const dateTime = document.getElementById('date');
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
const date = new Date();
const curDate = `${date.getDate()}-${date.toLocaleString('en', { month: 'short' })}-${date.getUTCFullYear()}, ${date.getUTCHours() + 2}:${date.getUTCMinutes()}`;

const bench = (start) => {
    const finish = Date.now();
    return finish - start;
};

/*
* Perform a mathematical operation on two numbers. Return result or error.
* @returns {string|number} result of calculation or error message:
 * - if firstValue or secondValue is not a number, return 'Enter a number'
 * - if operation is not '+', '-', '*', '/', return 'Choose a valid operation'
 * - if the result is more than 100, return 'Result is too big'
 * - if the result is equal 1, return result with word 'game'. '1 game'
 * - if the result is less 1 and more than 0, return result with word 'games'
 * - if the result is only less 1, returns result with 'Result error'
 *  - if the result is more than 1 and less 101, return  result with word 'games'
 * - else return string with result
 *
*/
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
        dateTime.innerText = `Date of calculation : ${curDate}. Time of function of execution : ${bench(startFunc)} ms`;
        return result;
    }
    // Проверка величины результата
    if (result > 100) {
        result = 'Too many games';
    } else if (result > 1 || (result < 1 && result >= 0)) {
        result = `${result} games`;
    } else if (result >= 0 && result <= 1) {
        result = `${result} game`;
    } else {
        result = `${result} : Result error!`;
    }

    // Output result
    firstNumb.innerText = first;
    secondNumb.innerText = second;
    oper.innerText = operation;
    symb.innerText = '=';
    rlt.innerText = result;

    dateTime.innerText = `Date of calculation : ${curDate}. Time of function of execution : ${bench(startFunc)} ms`;
    return result;
}

window.calculate = calculate;
