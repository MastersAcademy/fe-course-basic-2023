/**
 * Perform a mathematical operation on two numbers. Return result or error.
 * @param firstValue {number} with first number
 * @param secondValue {number} with second number
 * @param operation {string} with operation symbol
 * @returns {string} or pokemon result of calculation or error message:
 * - if firstValue or secondValue is not a number, return 'Enter a number'
 * - if operation is not '+', '-', '*', '/', return 'Choose a valid operation'
 * - if the result is more than 100, return 'Result is too big'
 * - else return number of result: 1 '+' 2 returns 3
 *
 */
// function to display the time and date, you need to pass the date attribute
// to the argument so that the function knows where on the page to add it

function nowDate(dataAttribute) {
    const date = new Date();
    const options = {
        day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric',
    };
    const localDate = date.toLocaleDateString('uk-UA', options);
    const element = document.querySelector(`[${dataAttribute}]`);
    const outputDate = `Date of calculation: ${localDate}`;
    if (element) {
        element.textContent = outputDate;
    }

    return element;
}

// benchmarks
function executionTime(start, end) {
    const timeParcing = end - start;
    const roundedTime = timeParcing.toFixed(1);
    const outputTimeParcing = `Time of function execution: ${roundedTime}ms.`;
    document.querySelector('[data-timeBenchmark]').textContent = outputTimeParcing;
}

function calculate(firstValue, secondValue, operation) {
    const dateStart = performance.now();

    let result = 0;

    if (/^-?\d+(\.\d+)?$/.test(firstValue) && /^-?\d+(\.\d+)?$/.test(secondValue)) {
        // performing mathematical operations
        switch (operation) {
            case '+':
                result = +firstValue + +secondValue;
                break;
            case '-':
                result = firstValue - secondValue;
                break;
            case '*':
                result = firstValue * secondValue;
                break;
            case '/':
                if (secondValue === '0') {
                    result = 'enter the correct second number';
                } else {
                    result = firstValue / secondValue;
                }
                break;
            case '**':
                result = 'Choose a valid operation';
                break;
            default:
                result = 'Error';
                break;
        }
    } else {
        result = 'Enter a number';
    }
    // check the result so that it does not exceed 100
    if (result >= 100) {
        result = 'Result is too big';
    }
    // return result;

    if (result === 1) {
        result = `${result} pokemon`;
    } else if (result > 1) {
        result = `${result} pokemons`;
    }

    const dateEnd = performance.now();

    executionTime(dateStart, dateEnd);

    return result;
}

nowDate('data-now');

window.calculate = calculate;
