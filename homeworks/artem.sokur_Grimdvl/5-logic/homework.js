function calculate(firstValue, secondValue, operation) {
    let result;

    const firstNumber = +firstValue;
    const secondNumber = +secondValue;

    if ((Number.isNaN(firstNumber)) || (Number.isNaN(secondNumber))) {
        return 'Enter a number';
    }

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
            break;
        case '**':
            result = firstNumber ** secondNumber;
            break;
        default:
            result = 'Choose a valid operation';
    }

    if (result > 100) {
        result = 'Result is too big';
    }

    return result;
}

window.calculate = calculate;
