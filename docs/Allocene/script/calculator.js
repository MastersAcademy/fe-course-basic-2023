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
    const visualTimeDurationExecution = document.querySelector('#visualTimeDurationExecution');
    const startTime = new Date();

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

    if (result > 1 || result < -1 || result % 2 === 0) {
        result = `${result} games`;
    } else {
        result = `${result} game`;
    }
    visualInterpritation.innerHTML = `<h1>${num1}</h1> <h1>${operation}</h1> <h1>${num2}</h1> <h1>=</h1> <h1>${result}</h1>`;

    const endTime = new Date();
    const executionTime = endTime - startTime;

    const timeFormatOptions = { hour: '2-digit', minute: '2-digit' };
    const formattedTime = new Intl.DateTimeFormat('uk-UA', timeFormatOptions).format(startTime);

    const day = startTime.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(startTime);
    const year = startTime.getFullYear();

    const timestampString = `Date of calculation: ${day}-${month}-${year}, ${formattedTime}. Time of function execution: ${executionTime}ms`;
    visualTimeDurationExecution.innerHTML = timestampString;

    return result;
}

window.calculate = calculate;
