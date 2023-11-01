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
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);
    const visualInterpritation = document.querySelector('#visualInterpritation');

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        visualInterpritation.innerHTML = '<h1>Enter a number</h1>';
        return 'Enter a number';
    }

    if (firstValue.trim() === '' || secondValue.trim() === '') {
        visualInterpritation.innerHTML = '<h1>Empty field</h1>';
        return 'Empty field';
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
            if (num2 === 0) {
                visualInterpritation.innerHTML = '<h1>Division by zero is not allowed</h1>';
                return 'Division by zero is not allowed';
            }
            result = num1 / num2;
            break;
        default:
            visualInterpritation.innerHTML = '<h1>Choose a valid operation</h1>';
            return 'Choose a valid operation';
    }

    if (result > 100) {
        visualInterpritation.innerHTML = '<h1>Too many games</h1>';
        return 'Result is too big';
    }

    visualInterpritation.innerHTML = `<h1>${num1}</h1> <h1>${operation}</h1> <h1>${num2}</h1> <h1>=</h1> <h1>${result} games</h1>`;
    return result;
}

window.calculate = calculate;
