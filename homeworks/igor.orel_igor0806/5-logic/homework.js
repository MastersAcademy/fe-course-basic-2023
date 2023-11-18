/**
 * Perform a mathematical operation on two numbers. Return result or error.
 * @param firstValue {string} with first number
 * @param secondValue {string} with second number
 * @param operation {string} with operation symbol
 * @returns {string|number} result of calculation or error message:
 * - if firstValue or secondValue is not a number, return 'Enter a number'
 * - if operation is not '+', '-', '*', '/', return 'Choose a valid operation'
 * - if the result is more than 100, return 'Result is too big'
 * - else return number of result: 1 '+' 2 returns 3
 *
 */
function calculate(firstValue, secondValue, operation) {
    const firstNum = Number(firstValue);
    const secondNum = Number(secondValue);
    let result;

    if (firstValue.length === 0 || secondValue.length === 0) {
        return 'Enter a number';
    }

    if (Number.isNaN(firstNum) || Number.isNaN(secondNum)) {
        return 'Enter a number';
    }

    if (operation === '+') {
        result = firstNum + secondNum;
    } else if (operation === '-') {
        result = firstNum - secondNum;
    } else if (operation === '/') {
        if (secondNum === 0) {
            return 'error';
        }
        result = firstNum / secondNum;
    } else if (operation === '*') {
        result = firstNum * secondNum;
    } else {
        return 'Choose a valid operation';
    }

    if (result > 100) {
        return 'Result is too big';
    }

    return result;
}

window.calculate = calculate;
