function calculate() {
    const firstValue = parseFloat(document.getElementById('firstValue').value);
    const secondValue = parseFloat(document.getElementById('secondValue').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (Number.isNaN(firstValue) || Number.isNaN(secondValue)) {
        document.getElementById('result').textContent = 'Please, enter the number';
        return;
    }

    if (secondValue === 0 && operation === '/') {
        document.getElementById('result').textContent = 'Error';
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

    document.getElementById('result').textContent = `${result}`;
}

document.getElementById('calculate').addEventListener('click', calculate);
