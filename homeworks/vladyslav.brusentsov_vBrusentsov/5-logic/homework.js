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
    let resultOperation = 0;
    if (Number.isNaN(+firstValue) || Number.isNaN(+secondValue)) {
        return 'Error: Enter a number';
    }
    switch (operation) {
        case '+':
            resultOperation = Number(firstValue) + Number(secondValue);
            return resultOperation > 100 ? 'Result is too big' : resultOperation;
        case '-':
            resultOperation = Number(firstValue) - Number(secondValue);
            return resultOperation > 100 ? 'Result is too big' : resultOperation;
        case '*':
            resultOperation = Number(firstValue) * Number(secondValue);
            return resultOperation > 100 ? 'Result is too big' : resultOperation;
        case '/':
            resultOperation = Number(firstValue) / Number(secondValue);
            return resultOperation > 100 ? 'Result is too big' : resultOperation;
        default:
            return 'Choose a valid operation';
    }
}

window.calculate = calculate;
