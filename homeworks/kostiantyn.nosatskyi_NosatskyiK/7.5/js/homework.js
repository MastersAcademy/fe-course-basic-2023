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

    if (element) {
        element.textContent = localDate;
    }
    return element;
}

function calculate(firstValue, secondValue, operation) {
    const dateStart = performance.now();

    let result = 0;
    // checking user data to make sure it's a number
    if (/^-?\d+(\.\d+)?$/.test(firstValue) && /^-?\d+(\.\d+)?$/.test(secondValue)) {
        // performing mathematical operations
        if (operation === '+') {
            result = +firstValue + +secondValue;
        } else if (operation === '-') {
            result = firstValue - secondValue;
        } else if (operation === '*') {
            result = firstValue * secondValue;
        } else if (operation === '/') {
            result = firstValue / secondValue;
        } else if (operation === '**') {
            result = 'Choose a valid operation';
        } else {
            result = 'Error';
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

    // benchmarks
    const dateEnd = performance.now();
    const timeParcing = dateEnd - dateStart;
    document.querySelector('[data-timeBenchmark]').textContent = timeParcing;

    nowDate('data-now');

    return result;
}

window.calculate = calculate;
