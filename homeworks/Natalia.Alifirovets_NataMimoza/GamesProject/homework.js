/**
 * Perform a mathematical operation on two numbers. Return result or error.
 * @param firstValue {string} with first number
 * @param secondValue {string} with second number
 * @param operation {string} with operation symbol
 * @returns {string} result of calculation or error message:
 * - if firstValue or secondValue is not a number, return 'Enter a number'
 * - if operation is not '+', '-', '*', '/', return 'Choose a valid operation'
 * - if the result is more than 100, return 'Result is too big'
 * - else return number of result: 1 '+' 2 returns 3
 *
 */
function calculate(firstValue, secondValue, operation) {
    let result = 0;
    const firstNum = parseFloat(firstValue);
    const secondNum = parseFloat(secondValue);

    if (Number.isNaN(firstNum) || Number.isNaN(secondNum)) {
        return 'Enter a number!';
    }

    switch (operation) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            if (secondNum === 0) {
                return 'Cannot divide by zero!';
            }
            result = firstNum / secondNum;
            break;
        default:
            return 'Choose a valid operation!';
    }

    if (result > 100) {
        return 'Result is too big';
    }
    if (firstValue.length === 0 || secondValue.length === 0) {
        return 'Enter a number!';
    }
    const word = result === 1 || result === -1 ? 'game' : 'games';

    return `${result} ${word}`;
}

window.calculate = calculate;
