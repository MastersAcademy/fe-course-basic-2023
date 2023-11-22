const operator = document.querySelector('.operator');
const btn = document.querySelector('.button');
const visualNumberTwo = document.querySelector('.number__2');
const visualOperator = document.querySelector('.oper');
const visualNumberOne = document.querySelector('.number__1');
const equals = document.querySelector('.equals');
const visualResult = document.querySelector('.visual-result');
const countBlock = document.querySelector('.count-block');
const countGame = document.querySelector('.count-games');
const countGamesVisual = document.querySelector('.count-games__visual');
const date = document.querySelector('.date');

btn.onclick = function () {
    const one = Number(document.getElementById('firstNumber').value);
    const two = Number(document.getElementById('secondNumber').value);
    const result = document.querySelector('.result');

    const nowDate = new Date();

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
                visualResult.innerHTML = 'ENumber must not be zero';
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
            visualResult.innerHTML = 'Choose a valid operation';
            visualOperator.innerHTML = '';
            visualNumberOne.innerHTML = '';
            visualNumberTwo.innerHTML = '';
            equals.innerHTML = '';
            return result;
    }

    if (calc > 100) {
        result.innerHTML = 'Result is too big';
        visualResult.innerHTML = 'Result is too big';
        visualOperator.innerHTML = '';
        visualNumberOne.innerHTML = '';
        visualNumberTwo.innerHTML = '';
        equals.innerHTML = '';
        countGame.innerHTML = '';
        countGamesVisual.innerHTML = '';
        return result;
    }

    const endTime = new Date();
    function executionTime() {
        return endTime - nowDate;
    }

    function dateNow() {
        const year = nowDate.getFullYear();
        const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(nowDate);
        const day = nowDate.getDay();

        return `${day}-${month}-${year}`;
    }
    function hourNow() {
        const hour = nowDate.getHours();
        let minute = nowDate.getMinutes();

        if (minute < 10) {
            minute = `0${minute}`;
            return minute;
        }
        return `${hour}:${minute}`;
    }

    let game = 'Game';

    if (calc > 1) {
        game = 'Games';
    }

    visualNumberOne.innerHTML = one;
    visualOperator.innerHTML = operator.value;
    visualNumberTwo.innerHTML = two;
    equals.innerHTML = '=';
    visualResult.innerHTML = calc;
    countGamesVisual.innerHTML = game;

    result.innerHTML = calc;
    countGame.innerHTML = game;

    date.innerHTML = `Date of calculation: ${dateNow()}, ${hourNow()}. Time of function execution: ${executionTime()} ms`;

    return result;
};
