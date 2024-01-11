const dateInfoContainer = document.createElement('div');
dateInfoContainer.style.textAlign = 'center';
dateInfoContainer.style.marginTop = '20px';
dateInfoContainer.style.fontFamily = '"Roboto", sans-serif';
dateInfoContainer.style.fontWeight = '500';
dateInfoContainer.style.fontSize = '16px';
document.body.appendChild(dateInfoContainer);

/**
 * Функція для виведення результату та дати
 * @param {string} result Результат обчислення
 */
function showResult(result) {
    const timestamp = new Date().toLocaleString();

    dateInfoContainer.textContent = `Date of calculation: ${timestamp}`;

    return result;
}

/**
 * @param firstValue string with the first number
 * @param secondValue string with the second number
 * @param operation string with the operation symbol
 * @returns {string|games} result of calculation or an error message:
 * - if firstValue or secondValue is not a number, return 'Enter a number'
 * - if operation is not '+', '-', '*', '/', return 'Choose a valid operation'
 * - if the result is more than 100, return 'Result is too big'
 * - else return number of result: 1 '+' 2 returns 3
 */
function calculate(firstValue, secondValue, operation) {
    if (!firstValue.trim() || !secondValue.trim()) {
        return 'Enter a number';
    }

    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);

    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
        return 'Enter a valid number';
    }

    let result;

    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;

        case '-':
            result = firstNumber - secondNumber;
            break;

        case '/':
            if (secondNumber === 0) {
                return 'You cannot divide by zero';
            }
            result = firstNumber / secondNumber;
            break;

        case '*':
            result = firstNumber * secondNumber;
            break;

        default:
            return 'Choose a valid operation';
    }

    if (result > 100) {
        return 'Result is too big';
    }

    if (result > 1) {
        return showResult(`${result} games`);
    }

    return showResult(`${result} game`);
}

window.calculate = calculate;
