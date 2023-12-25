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

const calculate = (firstValue, secondValue, operation) => {
    let result;
    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);

    if (firstValue.trim() === '' || secondValue === '') return 'Enter a number';
    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) return 'Enter a number';

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
                result = 'You can\'t divide by zero';
                break;
            }

            result = (firstNumber / secondNumber).toFixed(2);
            break;
        default:
            result = 'Choose a valid operation';
            break;
    }

    if (result > 100) return 'Result is too big';

    return result;
};

export default calculate;
