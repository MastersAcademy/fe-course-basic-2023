function addition(firstValue, secondValue) {
    return firstValue + secondValue;
}

function subtraction(firstValue, secondValue) {
    return firstValue - secondValue;
}

function multiplication(firstValue, secondValue) {
    return firstValue * secondValue;
}

function division(firstValue, secondValue) {
    return firstValue / secondValue;
}

function remainder(firstValue, secondValue) {
    return firstValue % secondValue;
}

/* function exponentiation(firstValue, secondValue) {
    return firstValue ** secondValue;
} */

function calculate(firstValue, secondValue, operation) {
    let result = 0;
    const first = Number(firstValue);
    const second = Number(secondValue);
    if (first.isNaN || second.isNaN) {
        alert('Enter a number');
    }
    switch (operation) {
        case '+':
            result = addition(first, second);
            break;
        case '-':
            result = subtraction(first, second);
            break;
        case '*':
            result = multiplication(first, second);
            break;
        case '/':
            result = division(first, second);
            break;
        case '%':
            result = remainder(first, second);
            break;
        case '**':
            result = 'Choose a valid operation';
            // result = exponentiation(first, second);
            break;
        default:
            break;
    }
    return (result > 100) ? 'Result is too big' : result;
}

window.calculate = calculate;
