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
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        return 'Enter a number';
    }

    if (firstValue.trim() === '' || secondValue.trim() === '') {
        return 'Enter a number';
    }

    if (num1 > 10) {
        return 'The first operand must have a maximum value of 10';
    }

    switch (operation) {
        case '+':
            return num1 + num2 > 100 ? 'Result is too big' : num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2 > 100 ? 'Result is too big' : num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Division by zero is not allowed';
            }
            return num1 / num2 > 100 ? 'Result is too big' : num1 / num2;
        default:
            return 'Choose a valid operation';
    }
}

window.calculate = calculate;
