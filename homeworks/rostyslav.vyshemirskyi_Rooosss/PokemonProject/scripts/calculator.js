/**
 *
 * @param firstValue string with first number
 * @param secondValue string with second number
 * @param operation string with operation symbol
 * @returns {string} result of calculation or error message:
 * - if firstValue or secondValue is not a number, return 'Enter a number'
 * - if operation is not '+', '-', '*', '/', return 'Choose a valid operation'
 * - if the result is more than 100, return 'Result is too big'
 * - else return number of result: 1 '+' 2 returns 3
 *
 */

function calculate(firstValue, secondValue, operation) {
    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);
    let result = 0;

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
            result = firstNumber / secondNumber;
            break;
        default: return 'Choose a valid operation';
    }

    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
        return 'Enter a number';
    } if (result > 100) {
        return 'Result is too big';
    } if (firstValue.length === 0 || secondValue.length === 0) {
        return 'Enter a number';
    } if (result > 1) {
        return `${result} pokemons`;
    } return `${result} pokemon`;
}

window.calculate = calculate;
