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
    return `Data of calculation: ${date}.
    Time of function execution: ${executionTime}ms`;
}

function clearElements(clearElementsArr) {
    clearElementsArr.forEach((el) => {
        el.innerText = '';
    });
}

function trimLastCard(num, place) {
    const remainder = num - Number.parseInt(num, 10);
    const trim = (100 - remainder * 100) / 2;
    place.lastElementChild.style.clipPath = `polygon(0% ${trim}%, 100% ${trim}%, 100% calc(100% - ${trim}%), 0% calc(100% - ${trim}%))`;
}

function loadingSwitch(switching) {
    const LOADING_ELEMENT = document.querySelector('[data-loading]');
    LOADING_ELEMENT.style.visibility = switching ? 'visible' : 'hidden';
}
function showErrorText(result, placeError, placeResult) {
    (result === 'Too many games' ? placeResult : placeError).innerText = result;
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

function showResult(result, place) {
    if ((typeof result) === 'number') {
        place.innerText = result + (result > 1 ? ' games' : ' game');
    } else {
        place.innerText = result;
    }
}

function showBigElement(operation, secondValue) {
    const OPERATION_BIG_ELEMENT = document.querySelector('[data-big-result="operation"]');
    const SECOND_NUMBER_BIG_ELEMENT = document.querySelector('[data-big-result="second-number"]');
    const EQUAL_BIG_ELEMENT = document.querySelector('[data-big-result="equal"]');
    OPERATION_BIG_ELEMENT.innerText = operation;
    SECOND_NUMBER_BIG_ELEMENT.innerText = secondValue;
    EQUAL_BIG_ELEMENT.innerText = '=';
}

function showBigResult(firstValue, secondValue, operation, res) {
    const ERROR_TEXT_ELEMENT = document.querySelector('[data-error-text]');
    const FIRST_NUMBER_BIG_ELEMENT = document.querySelector('[data-big-result="first-number"]');
    const RESULT_BIG_ELEMENT = document.querySelector('[data-big-result="result"]');
    let result = res;
    if (firstValue > 10) result = 'enter first number 1 - 10';
    if (result === 'Result is too big') {
        showManyCards(firstValue, FIRST_NUMBER_BIG_ELEMENT);
        showBigElement(operation, secondValue);
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
        showBigElement(operation, secondValue);
        RESULT_BIG_ELEMENT.style.top = '55px';
        if (result === 0) {
            RESULT_BIG_ELEMENT.style.top = '28px';
            RESULT_BIG_ELEMENT.innerText = '0';
        }
        showManyCards(result, RESULT_BIG_ELEMENT);
    } else {
        showErrorText(result, ERROR_TEXT_ELEMENT, RESULT_BIG_ELEMENT);
    }
}
function clearBigResult() {
    const BIG_RESULT_ELEMENTS = Array.from(document.querySelector('[data-big-result]').children);
    const ERROR_TEXT_ELEMENT = document.querySelector('[data-error-text]');
    clearElements([ERROR_TEXT_ELEMENT, ...BIG_RESULT_ELEMENTS]);
}

async function handlerCalculate() {
    const FIRST_VALUE_ELEMENT = document.getElementById('firstValue');
    const SECOND_VALUE_ELEMENT = document.getElementById('secondValue');
    const OPERATION_ELEMENT = document.getElementById('operation');
    const DATE_TEXT_ELEMENT = document.querySelector('[data-date-text]');
    const RESULT_ELEMENT = document.getElementById('result');
    clearElements([DATE_TEXT_ELEMENT, RESULT_ELEMENT]);
    clearBigResult();
    const firstValue = FIRST_VALUE_ELEMENT.value;
    const secondValue = SECOND_VALUE_ELEMENT.value;
    const operation = OPERATION_ELEMENT.value;
    const startTime = Date.now();
    loadingSwitch(true);
    const result = await window.calculate(firstValue, secondValue, operation);
    const calculationTime = Date.now() - startTime;
    loadingSwitch(false);
    DATE_TEXT_ELEMENT.innerText = creatDateString(formatDate(new Date()), calculationTime);
    showResult(result, RESULT_ELEMENT);
    showBigResult(firstValue, secondValue, operation, result);
}

function initCalc() {
    const CALCULATE_BUTTON_ELEMENT = document.getElementById('calculate');
    CALCULATE_BUTTON_ELEMENT.addEventListener('click', handlerCalculate);
}
initCalc();
