function calculate(x, y, operation) {
    let result = 0;
    const numberX = parseFloat(x);
    const numberY = parseFloat(y);
    switch (operation) {
        case '+':
            result = numberX + numberY;
            break;
        case '-':
            result = numberX - numberY;
            break;
        case '*':
            result = numberX * numberY;
            break;
        case '/':
            if (numberY === 0) {
                return 'you can not divide by zero =(';
            }
            result = numberX / numberY;
            break;
        default:
            return 'Choose a valid operation';
    }
    if (Number.isNaN(numberX) || Number.isNaN(numberY) || !x.length || !y.length) {
        return 'Enter a number';
    }
    if (result > 100) {
        return 'Result is too big';
    }

    return result;
}

window.calculate = calculate;
