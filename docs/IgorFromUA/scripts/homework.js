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

function randomDelay() {
    return Math.floor(Math.random() * (2000 - 200) + 200);
}

function calculate(firstValue, secondValue, operation) {
    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);
    let result;
    if (firstValue === '' || secondValue === '' || Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) return 'Enter a number';
    if (firstNumber > 10) return 'enter first number 1 - 10';
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
                return 'Division by zero is not allowed';
            }
            result = firstNumber / secondNumber;
            break;
        default:
            return 'Choose a valid operation';
    }
    if (result > 100) return 'Result is too big';
    // randomDelay();
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, randomDelay());
    });
}

window.calculate = calculate;
