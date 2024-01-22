function calculate(firstValue, secondValue, operation) {
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        return 'Enter a number';
    }

    if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
        return 'Choose a valid operation';
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
            result = num1 / num2;
            break;
        default:
            return 'Choose a valid operation';
    }

    if (result > 100) {
        return 'Result is too big';
    }

    return `${result} ${result === 1 ? 'game' : 'games'}`;
}

window.calculate = calculate;
