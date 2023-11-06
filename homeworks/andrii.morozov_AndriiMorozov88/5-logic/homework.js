function calculate(firstValue, secondValue, operation) {
    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);
    let result;
    if (firstValue.trim() === '' || secondValue.trim() === '') {
        result = 'Enter a number';
        return result;
    }
    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
        result = 'Enter a number';
        return result;
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
        default:
            result = 'Choose a valid operation';
            break;
    }
    if (result > 100) {
        result = 'Result is too big';
        return result;
    }
    return result;
}

window.calculate = calculate;
