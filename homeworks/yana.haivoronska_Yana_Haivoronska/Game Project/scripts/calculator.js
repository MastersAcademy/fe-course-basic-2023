/**
 * Perform a mathematical operation on
 * two numbers and return the result as a string indicating the number of games.
 * @param {string} firstValue The first number
 * @param {string} secondValue The second number
 * @param {string} operation The operation symbol (+, -, *, /)
 * @returns {string} The number of games as a string, indicating a single game or multiple games
 * - If firstValue or secondValue is not a number, returns 'Enter a number'
 * - If operation is not '+', '-', '*', '/', returns 'Choose a valid operation'
 * - If the result is more than 100, returns 'Result is too big'
 * - Else return the number of games, e.g., 1 '+' 2 returns '1 game'
 */

const FIRST_VALUE_ELEMENT = document.getElementById('firstValue');
const SECOND_VALUE_ELEMENT = document.getElementById('secondValue');
const OPERATION_ELEMENT = document.getElementById('operation');
const CALCULATE_BUTTON_ELEMENT = document.getElementById('calculate');
const RESULT_ELEMENT = document.getElementById('result');

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

    return `${result} ${result === 1 ? 'game' : 'games'}`;
}

CALCULATE_BUTTON_ELEMENT.addEventListener('click', () => {
    const firstValue = FIRST_VALUE_ELEMENT.value;
    const secondValue = SECOND_VALUE_ELEMENT.value;
    const operation = OPERATION_ELEMENT.value;

    RESULT_ELEMENT.innerText = calculate(firstValue, secondValue, operation);
});

