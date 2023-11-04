/**
 *
 * @param firstValue string with first number
 * @param secondValue string with second number
 * @param operation string with operation symbol
 * @returns {string|number} result of calculation or error message:
 * - if firstValue or secondValue is not a number, return 'Enter a number'
 * - if operation is not '+', '-', '*', '/', return 'Choose a valid operation'
 * - if the result is more than 100, return 'Result is too big'
 * - else return number of result: 1 '+' 2 returns 3
 *
 */

function calculate(firstValue, secondValue, operation) {
    let result;

    switch (operation) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '/':
            result = firstValue / secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        default:
            result = 'Choose a valid operation';
    }

    if (result > 100) {
        result = 'Result is too big';
    }

    return result;
}

window.calculate = calculate;
