function calculate(firstValue, secondValue, operation) {
    let result = 0;
    const first = Number(firstValue);
    const second = Number(secondValue);
    const resultHeaders = document.getElementById('result_headers');

    if (Number.isNaN(first) || Number.isNaN(second)) {
        resultHeaders.innerHTML = '<h1>Enter a number</h1>';
        return 'Enter a number';
    }

    if (first === '' || second === '') {
        resultHeaders.innerHTML = '<h1>The field is empty</h1>';
        return 'The field is empty';
    }

    switch (operation) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
        case '%':
            result = first % second;
            break;
        case '**':
            resultHeaders.innerHTML = '<h1>Choose a valid operation</h1>';
            return 'Choose a valid operation';
        default:
            break;
    }
    if (result > 100) {
        resultHeaders.innerHTML = '<h1>Result is too big</h1>';
        return 'Result is too big';
    }
    let gamesNumber = 'games';
    if (result === 1) {
        gamesNumber = 'game';
    }

    resultHeaders.innerHTML = `<h1>${first}</h1><h1>${operation}</h1><h1>${second}</h1><h1>=</h1><h1>${result} ${gamesNumber}</h1>`;
    return result;
}

window.calculate = calculate;
