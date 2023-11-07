const inputHistory = document.querySelector('.input-history');
const outputHistory = document.querySelector('.output-history');

function calculate() {
    const firstValue = parseFloat(document.getElementById('firstValue').value);
    const secondValue = parseFloat(document.getElementById('secondValue').value);
    const operation = document.getElementById('operation').value;
    let result;
    let resultCalculator;

    if (Number.isNaN(firstValue) || Number.isNaN(secondValue)) {
        document.getElementById('result').textContent = 'Please, enter the number';
        return;
    }

    let operationText;
    if (operation === '+') {
        operationText = '+';
    } else if (operation === '-') {
        operationText = '-';
    } else if (operation === '*') {
        operationText = '*';
    } else if (operation === '/') {
        operationText = '/';
    } else {
        operationText = '?';
    }

    const inputText = `${firstValue} ${operationText} ${secondValue}`;

    if (secondValue === 0 && operation === '/') {
        document.getElementById('result').textContent = 'Error';
        inputHistory.textContent = inputText;
        outputHistory.textContent = '= Error';
        return;
    }

    switch (operation) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            result = firstValue / secondValue;
            break;
        case '%':
            result = 'Choose a valid operation';
            break;
        case '**':
            result = 'Choose a valid operation';
            break;
        default:
            result = 'Please, try again';
    }
    if (result > 100) {
        result = 'Result is too big';
    } else if (result < 0) {
        result = 'Please, try again';
    }

    inputHistory.textContent = inputText;
    outputHistory.textContent = typeof result === 'number' ? `= ${result} pokemons` : `= ${result}`;

    document.getElementById('result').textContent = `${resultCalculator || result}`;
}

document.getElementById('calculate').addEventListener('click', calculate);
