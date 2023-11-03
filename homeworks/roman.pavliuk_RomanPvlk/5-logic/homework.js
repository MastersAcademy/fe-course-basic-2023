function calculate(x, y, operation) {
    let result = 0;
    switch (operation) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            if (y === 0) {
                return 'you can not divide by zero =(';
            }
            result = x / y;
            break;
        default:
            return 'Choose a valid operation';
    }
    if (Number.isNaN(x) || Number.isNaN(y)) {
        return 'Enter a number';
    }
    if (result > 100) {
        return 'Result is too big';
    }

    return result;
}

window.calculate = calculate;
