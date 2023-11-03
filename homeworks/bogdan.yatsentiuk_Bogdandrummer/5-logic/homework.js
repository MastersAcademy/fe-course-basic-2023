// *
//  *
//  * @param firstValue string with first number
//  * @param secondValue string with second number
//  * @param operation string with operation symbol
//  * @returns {string|number} result of calculation or error message:
//  * - if firstValue or secondValue is not a number, return 'Enter a number'
//  * - if operation is not '+', '-', '*', '/', return 'Choose a valid operation'
//  * - if the result is more than 100, return 'Result is too big'
//  * - else return number of result: 1 '+' 2 returns 3
//  *
//

function calculate(firstValue, secondValue, operation) {
    let result = document.getElementById('result').innerText;
    // Проверка на число
    const first = +firstValue;
    const second = +secondValue;
    if (Number.isNaN(first) && Number.isNaN(second)) {
        result = 'Both of values are not a number. Enter a number!';
        return result;
    }
    if (Number.isNaN(first)) {
        result = '1 value! Enter a number';
        return result;
    }
    if (Number.isNaN(second)) {
        result = '2 value! Enter a number';
        return result;
    }

    // Проверка на математическую операцию
    if (operation === '+') {
        result = first + second;
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
        alert('Выберите корректную математическую операцию!');
    }
    console.log(result);

    // Проверка величины результата
    if (result > 100) {
        alert('Result is too big');
    }

    return result;
    // return Math.random() > 0.5 ? 'Error' : 42;
}

window.calculate = calculate;
