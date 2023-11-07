const operator = document.querySelector('.operator');
const btn = document.querySelector('.button');
const visualNumberTwo = document.querySelector('.number__2');
const visualOperator = document.querySelector('.oper');
const visualNumberOne = document.querySelector('.number__1');
const equals = document.querySelector('.equals');
const visualResult = document.querySelector('.visual-result');
const countBlock = document.querySelector('.count-block');

btn.onclick = function () {
    const one = Number(document.getElementById('firstNumber').value);
    const two = Number(document.getElementById('secondNumber').value);
    const result = document.querySelector('.result');

    countBlock.style.display = 'flex';

    let calc;

    if (Number.isNaN(one) || Number.isNaN(two)) {
        result.innerHTML = 'Enter a number';
        visualResult.innerHTML = 'Entar a number';
        visualOperator.innerHTML = '';
        visualNumberOne.innerHTML = '';
        visualNumberTwo.innerHTML = '';
        equals.innerHTML = '';
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
                visualResult.innerHTML = 'Entar a number';
                visualOperator.innerHTML = '';
                visualNumberOne.innerHTML = '';
                visualNumberTwo.innerHTML = '';
                equals.innerHTML = '';
                return result;
            }
            calc = one / two;
            break;

        default:
            result.innerHTML = 'Choose a valid operation';
            visualResult.innerHTML = 'Entar a number';
            visualOperator.innerHTML = '';
            visualNumberOne.innerHTML = '';
            visualNumberTwo.innerHTML = '';
            equals.innerHTML = '';
            return result;
    }

    if (calc > 100) {
        result.innerHTML = 'Result is too big';
        visualResult.innerHTML = 'Entar a number';
        visualOperator.innerHTML = '';
        visualNumberOne.innerHTML = '';
        visualNumberTwo.innerHTML = '';
        equals.innerHTML = '';
        return result;
    }

    visualNumberOne.innerHTML = one;
    visualOperator.innerHTML = operator.value;
    visualNumberTwo.innerHTML = two;
    equals.innerHTML = '=';
    result.innerHTML = calc;
    visualResult.innerHTML = calc;

    return result;
};
