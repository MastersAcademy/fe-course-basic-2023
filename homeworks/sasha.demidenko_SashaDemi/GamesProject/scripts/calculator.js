function calculate(firstValue, secondValue, operation) {
    const firstNumber = +(firstValue);
    const secondNumber = +(secondValue);

    if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
        return ('Enter a number');
    } if (firstValue.trim() === '' || secondValue.trim() === '') {
        return ('Error');
    }

    let result;
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
            if (secondNumber === 0) {
                return ('Error');
            }
            break;
        case '**':
            result = 'Choose a valid operation';
            break;
        default:
            return ('undefined');
    }

    if (result > 100) {
        return ('Result is too big');
    }

    return result;
}

window.calculate = calculate;
