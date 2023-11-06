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

    if (firstValue.trim() === '') {
        return 'Enter the first number';
    }
    if (secondValue.trim() === '') {
        return 'Enter the second number';
    }

    const firstNumber = +firstValue;
    const secondNumber = +secondValue;

    if ((Number.isNaN(firstNumber)) || (Number.isNaN(secondNumber))) {
        return 'Enter a number';
    }

    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                return 'Choose another second number';
            }
            result = firstNumber / secondNumber;
            break;
        default:
            result = 'Choose a valid operation';
    }

    if (Number.isNaN(result)) {
        return 'Enter a number';
    }
    if (result > 100) {
        return 'Result is too big';
    }
    return Math.round(result * 100) / 100;
}

window.calculate = calculate;
