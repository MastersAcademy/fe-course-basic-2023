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
const DATE_TEXT_ELEMENT = document.querySelector('[data-date-text]');
function formatDate(date) {
    const allMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dateNow = date.getDate();
    const monthNow = allMonth[date.getMonth()];
    const year = date.getFullYear();
    const hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    return `${dateNow}-${monthNow} ${year}, ${hours}:${minutes}`;
}
function creatDateString(date, executionTime) {
    return `Data of calculation: ${date}. Time of function execution: ${executionTime}ms`;
}

function clearBigResultElement() {
    FIRST_NUMBER_BIG_ELEMENT.innerText = '';
    OPERATION_BIG_ELEMENT.innerText = '';
    SECOND_NUMBER_BIG_ELEMENT.innerText = '';
    RESULT_BIG_ELEMENT.innerText = '';
    EQUAL_BIG_ELEMENT.innerText = '';
}

function trimLastCard(num, place) {
    const remainder = num - Number.parseInt(num, 10);
    const trim = (100 - remainder * 100) / 2;
    place.lastElementChild.style.clipPath = `polygon(0% ${trim}%, 100% ${trim}%, 100% calc(100% - ${trim}%), 0% calc(100% - ${trim}%))`;
}
function showManyCards(amount, place) {
    for (let i = 0; i < +amount; i++) {
        const img = document.createElement('img');
        img.src = './src/img-card.png';
        img.classList.add('big-result__img');
        place.append(img);
    }
    if (!Number.isInteger(+amount)) {
        trimLastCard(amount, place);
    }
}

function handlerCalculate() {
    clearBigResultElement();
    const firstValue = FIRST_VALUE_ELEMENT.value;
    const secondValue = SECOND_VALUE_ELEMENT.value;
    const operation = OPERATION_ELEMENT.value;
    const startTime = Date.now();
    let result = window.calculate(firstValue, secondValue, operation);
    const calculationTime = Date.now() - startTime;

    if (firstValue > 10) result = 'enter first number 1 - 10';
    if ((typeof result) === 'number') RESULT_ELEMENT.innerText = result + (result > 1 ? ' games' : ' game');

    if (result === 'Result is too big') {
        showManyCards(firstValue, FIRST_NUMBER_BIG_ELEMENT);
        OPERATION_BIG_ELEMENT.innerText = operation;
        SECOND_NUMBER_BIG_ELEMENT.innerText = secondValue;
        EQUAL_BIG_ELEMENT.innerText = '=';
        RESULT_BIG_ELEMENT.style.top = '25px';
        result = 'Too many games';
    }
    if (result === +result) {
        if (+firstValue === 0) {
            FIRST_NUMBER_BIG_ELEMENT.style.top = '28px';
            FIRST_NUMBER_BIG_ELEMENT.innerText = '0';
        } else {
            FIRST_NUMBER_BIG_ELEMENT.style.top = '55px';
        }
        showManyCards(firstValue, FIRST_NUMBER_BIG_ELEMENT);
        OPERATION_BIG_ELEMENT.innerText = operation;
        SECOND_NUMBER_BIG_ELEMENT.innerText = secondValue;
        EQUAL_BIG_ELEMENT.innerText = '=';
        RESULT_BIG_ELEMENT.style.top = '55px';
        if (result === 0) {
            RESULT_BIG_ELEMENT.style.top = '28px';
            RESULT_BIG_ELEMENT.innerText = '0';
        }
        showManyCards(result, RESULT_BIG_ELEMENT);
    } else {
        RESULT_BIG_ELEMENT.innerText = result;
    }
    DATE_TEXT_ELEMENT.innerText = creatDateString(formatDate(new Date()), calculationTime);
}

CALCULATE_BUTTON_ELEMENT.addEventListener('click', handlerCalculate);
