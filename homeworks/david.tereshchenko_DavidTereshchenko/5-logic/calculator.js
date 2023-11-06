const operator = document.querySelector('.operator');
const btn = document.querySelector('.button');

btn.onclick = function () {
    const one = Number(document.getElementById('firstNumber').value);
    const two = Number(document.getElementById('secondNumber').value);
    const result = document.querySelector('.result');
    const visualCounting = document.querySelector('.visual-counting');

    visualCounting.style.wordBreak = 'word-wrap';

    let calc;

    if (Number.isNaN(one) || Number.isNaN(two)) {
        result.innerHTML = '<h1>Enter a number</h1>';
        return result;
    }

    switch (operator.value) {
        case '+':
            calc = one + two;
            break;

        case '-':
            calc = one - two;
            break;

        case '*':
            calc = one * two;
            break;

        case '/':
            if (two === 0) {
                result.innerHTML = '<h1>Number must not be zero</h1>';
                return result;
            }
            calc = one / two;
            break;

        default:
            result.innerHTML = '<h1>Choose a valid operation</h1>';
            return result;
    }

    if (calc > 100) {
        result.innerHTML = '<h1>Result is too big</h1>';
        return result;
    }

    visualCounting.innerHTML += `<h1>${one}</h1> <h1>${operator.value}</h1> <h1>${two}</h1> <h1>=</h1>`;
    result.innerHTML = calc;

    return result;
};
