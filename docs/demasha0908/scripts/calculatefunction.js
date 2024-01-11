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
    const numOne = Number(firstValue);
    const numTwo = Number(secondValue);
    let result;
    switch (operation) {
        case '+':
            result = numOne + numTwo;
            break;
        case '-':
            result = numOne - numTwo;
            break;
        case '*':
            result = numOne * numTwo;
            break;
        case '/':
            if (numTwo === 0) {
                return 'Error. Division by zero!';
            }
            result = numOne / numTwo;
            break;
        default:
            return 'Choose a valid operation';
    }

    if (Number.isNaN(numOne) || Number.isNaN(numTwo)) {
        return 'Enter a number';
    }

    if (result > 100) {
        return 'Result is too big';
    }

    return result;
}

window.calculate = calculate;
