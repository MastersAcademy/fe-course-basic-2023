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
    const Number1 = Number(firstValue);
    const Number2 = Number(secondValue);

    if (!Number1 || !Number2) {
        return 'Enter a number';
    }
    switch (operation) {
        case '+':
            return Number1 + Number2 > 100 ? 'Return is too big' : Number1 + Number2;
        case '-':
            return Number1 - Number2 > 100 ? 'Return is too big' : Number1 - Number2;
        case '*':
            return Number1 * Number2 > 100 ? 'Return is too big' : Number1 * Number2;
        case '/':
            if (Number2 === 0) {
                return 'Division by zero does not allow';
            }
            return Number1 / Number2 > 100 ? 'Return is too big' : Number1 / Number2;
        default:
            return 'Choose a valid operation';
    }
}

window.calculate = calculate;
