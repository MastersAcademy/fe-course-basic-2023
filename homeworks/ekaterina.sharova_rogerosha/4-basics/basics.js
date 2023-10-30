// sum = num1 + num2;
// difference = num1 - num2;
// multiple = num1 * num2;
// division = num1 / num2;
// residue = num1 % num2;
// exponent = num1 ** num2;

function calculation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    switch (operator) {
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
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
        default:
            result = 'Wrong operator. Please, try again.';
    }
    document.querySelector('[data-result]').textContent = `Result: ${result}`;
}

calculation();
