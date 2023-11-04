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
 */
function calculate(firstValue, secondValue, operation) {
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        return 'Enter a number';
    }

    if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
        return 'Choose a valid operation';
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return 'Choose a valid operation';
    }

    if (result > 100) {
        return 'Result is too big';
    }

    return result;
}

window.calculate = calculate;
