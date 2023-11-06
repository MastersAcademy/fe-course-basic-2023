// @param firstValue string with first number
// @param secondValue string with second number
// @param operation string with operation symbol
// @returns {string|number} result of calculation or error message:
//  if firstValue or secondValue is not a number, return 'Enter a number'
//  if operation is not '+', '-', '*', '/', return 'Choose a valid operation'
//  if the result is more than 100, return 'Result is too big'
//  else return number of result: 1 '+' 2 returns 3
function calculate(firstValue, secondValue, operation) {
    const firstNumber = +(firstValue);
    const secondNumber = +(secondValue);

    if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
        return ('Enter a number');
    } if (firstValue.trim() === '' || secondValue.trim() === '') {
        return ('Error');
    }

    let result;
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
            if (secondNumber === 0) {
                return ('Error');
            }
            break;
        case '**':
            result = 'Choose a valid operation';
            break;
        default:
            return ('undefined');
    }

    if (result > 100) {
        return ('Result is too big');
    }

    return result;
}

window.calculate = calculate;
