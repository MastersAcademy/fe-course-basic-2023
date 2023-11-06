const operator = document.querySelector('.operator');
const btn = document.querySelector('.button');
const visualNumberTwo = document.querySelector('.number__2');
const visualOperator = document.querySelector('.oper');
const visualNumberOne = document.querySelector('.number__1');
const equals = document.querySelector('.equals');

btn.onclick = function () {
    const one = Number(document.getElementById('firstNumber').value);
    const two = Number(document.getElementById('secondNumber').value);
    const result = document.querySelector('.result');

    result.style.display = 'flex';

    let calc;

    if (Number.isNaN(one) || Number.isNaN(two)) {
        result.innerHTML = 'Enter a number';
        return result;
    }

    switch (operator.value) {
        case '+':
            calc = one + two;
            break;

        case '-':
            calc = one - two;
            break;

        case '×':
            calc = one * two;
            break;

        case '/':
            if (two === 0) {
                result.innerHTML = 'Number must not be zero';
                return result;
            }
            calc = one / two;
            break;

        default:
            result.innerHTML = 'Choose a valid operation';
            return result;
    }

    if (calc > 100) {
        result.innerHTML = 'Result is too big';
        return result;
    }

    visualNumberOne.innerHTML = one;
    visualOperator.innerHTML = operator.value;
    visualNumberTwo.innerHTML = two;
    equals.innerHTML = '=';
    result.innerHTML = calc;

    return result;
};
