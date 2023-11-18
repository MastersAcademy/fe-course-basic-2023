/**
 * Perform a mathematical operation on two numbers. Return result or error.
 * @param firstValue {number} with first number
 * @param secondValue {number} with second number
 * @param operation {string} with operation symbol
 * @returns {string|number} result of calculation or error message:
 * - if firstValue or secondValue is not a number, return 'Enter a number'
 * - if operation is not '+', '-', '*', '/', return 'Choose a valid operation'
 * - if the result is more than 100, return 'Result is too big'
 * - else return number of result: 1 '+' 2 returns 3
 *
 */
function calculate(firstValue, secondValue, operation) {
    let result = 0;
    // checking user data to make sure it's a number
    if (/^\d+$/.test(firstValue) && /^\d+$/.test(secondValue)) {
        // performing mathematical operations
        if (operation === '+') {
            result = +firstValue + +secondValue;
        } else if (operation === '-') {
            result = firstValue - secondValue;
        } else if (operation === '*') {
            result = firstValue * secondValue;
        } else if (operation === '/') {
            result = firstValue / secondValue;
        } else if (operation === '**') {
            result = 'Choose a valid operation';
        } else {
            result = 'Error';
        }
    } else {
        result = 'Enter a number';
    }
    // check the result so that it does not exceed 100
    if (result >= 100) {
        result = 'Result is too big';
    }
    return result;
}

window.calculate = calculate;
