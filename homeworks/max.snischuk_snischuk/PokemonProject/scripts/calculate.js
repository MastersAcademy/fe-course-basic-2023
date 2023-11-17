/**
 * Perform a mathematical operation on two numbers. Return result or error.
 * @param firstValue {string} with first number
 * @param secondValue {string} with second number
 * @param operation {string} with operation symbol
 * @returns {string} result of calculation pokemons or error message:
 * - if firstValue or secondValue is not a number, return 'Enter a number'
 * - if operation is not '+', '-', '*', '/', return 'Choose a valid operation'
 * - if the result is more than 100, return 'Result is too big'
 * - if the result is more than 1,
 *   return string of result and annotation in plural: 1 '+' 2 returns 3 pokemons
 * - if the result is less than 1,
 *   return string of result and annotation in singular: 0.4 '+' 0.6 returns 1 pokemon
 */
function calculate(firstValue, secondValue, operation) {
    let result;
    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);

    if (firstValue === '' || secondValue === '') return 'Enter a number';
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

            result = Number.parseFloat((firstNumber / secondNumber).toFixed(2));
            break;
        default:
            result = 'Choose a valid operation';
            break;
    }

    if (result > 100) return 'Too many pokemons';

    return result;
}

window.calculate = calculate;
