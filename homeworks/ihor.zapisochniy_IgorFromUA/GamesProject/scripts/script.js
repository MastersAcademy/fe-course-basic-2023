const FIRST_VALUE_ELEMENT = document.getElementById('firstValue');
const SECOND_VALUE_ELEMENT = document.getElementById('secondValue');
const OPERATION_ELEMENT = document.getElementById('operation');
const CALCULATE_BUTTON_ELEMENT = document.getElementById('calculate');
const RESULT_ELEMENT = document.getElementById('result');
const FIRST_NUMBER_BIG_ELEMENT = document.querySelector('[data-big-result="first-number"]');
const OPERATION_BIG_ELEMENT = document.querySelector('[data-big-result="operation"]');
const SECOND_NUMBER_BIG_ELEMENT = document.querySelector('[data-big-result="second-number"]');
const RESULT_BIG_ELEMENT = document.querySelector('[data-big-result="result"]');
const EQUAL_BIG_ELEMENT = document.querySelector('[data-big-result="equal"]');
CALCULATE_BUTTON_ELEMENT.addEventListener('click', () => {
    const firstValue = FIRST_VALUE_ELEMENT.value;
    const secondValue = SECOND_VALUE_ELEMENT.value;
    const operation = OPERATION_ELEMENT.value;
    FIRST_NUMBER_BIG_ELEMENT.innerText = '';
    OPERATION_BIG_ELEMENT.innerText = '';
    SECOND_NUMBER_BIG_ELEMENT.innerText = '';
    RESULT_BIG_ELEMENT.innerText = '';
    EQUAL_BIG_ELEMENT.innerText = '';
    let result = window.calculate(firstValue, secondValue, operation);
    if (firstValue > 10) result = 'enter first number 1 - 10';
    RESULT_ELEMENT.innerText = result;
    if (result === 'Result is too big') {
        for (let i = 0; i < +firstValue; i++) {
            const img = document.createElement('img');
            img.src = './src/img-card.png';
            img.classList.add('big-result__img');
            FIRST_NUMBER_BIG_ELEMENT.append(img);
        }
        OPERATION_BIG_ELEMENT.innerText = operation;
        SECOND_NUMBER_BIG_ELEMENT.innerText = secondValue;
        EQUAL_BIG_ELEMENT.innerText = '=';
        RESULT_BIG_ELEMENT.style.top = '25px';
        result = 'Too many games';
    }
    if (result === +result) {
        for (let i = 0; i < +firstValue; i++) {
            const img = document.createElement('img');
            img.src = './src/img-card.png';
            img.classList.add('big-result__img');
            FIRST_NUMBER_BIG_ELEMENT.append(img);
        }
        OPERATION_BIG_ELEMENT.innerText = operation;
        SECOND_NUMBER_BIG_ELEMENT.innerText = secondValue;
        EQUAL_BIG_ELEMENT.innerText = '=';
        RESULT_BIG_ELEMENT.style.top = '55px';
        for (let i = 0; i < result; i++) {
            const img = document.createElement('img');
            img.src = './src/img-card.png';
            img.classList.add('big-result__img');
            RESULT_BIG_ELEMENT.append(img);
        }
    } else {
        RESULT_BIG_ELEMENT.innerText = result;
    }
    if (!Number.isInteger(result)) {
        const remainder = result - Number.parseInt(result, 10);
        const trim = (100 - remainder * 100) / 2;
        RESULT_BIG_ELEMENT.lastElementChild.style.clipPath = `polygon(0% ${trim}%, 100% ${trim}%, 100% calc(100% - ${trim}%), 0% calc(100% - ${trim}%))`;
    }
});
