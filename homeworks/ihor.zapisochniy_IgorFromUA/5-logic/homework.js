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
    // TODO: write your code here, remove the line below and uncomment the lines above
    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);
    let result;
    if (!firstNumber || !secondNumber) return 'Enter a number';
    if (operation === '**') return 'Choose a valid operation';
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
        default:
            return 'Choose a valid operation';
    }
    if (result > 100) return 'Result is too big';
    return result;
}

window.calculate = calculate;
