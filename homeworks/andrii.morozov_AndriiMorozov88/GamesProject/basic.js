const firstNumberInput = document.querySelector('[data-first-number]');
const secondNumberInput = document.querySelector('[data-second-number]');
const operation = document.querySelector('[data-operation]');
const button = document.querySelector('[data-button]');
const resultEl = document.querySelector('[data-result]');
const errorEl = document.querySelector('[data-error]');
resultEl.innerText = 'Result';
function getResultObject() {
    errorEl.classList.add('error--hidden');
    resultEl.classList.remove('calculator__result--error');
    const firstNumber = Number(firstNumberInput.value);
    const secondNumber = Number(secondNumberInput.value);
    let result;
    switch (operation.value) {
        case '1':
            result = firstNumber + secondNumber;
            break;
        case '2':
            result = firstNumber - secondNumber;
            break;
        case '3':
            result = firstNumber * secondNumber;
            break;
        case '4':
            result = firstNumber / secondNumber;
            break;
        default:
            result = 'Error';
            errorEl.classList.remove('error--hidden');
            errorEl.innerText = 'operation is not supported';
            break;
    }
    if (Number.isNaN(firstNumber)) {
        result = 'Error';
        errorEl.classList.remove('error--hidden');
        errorEl.innerText = 'first operand is not a number';
    }
    if (Number.isNaN(secondNumber)) {
        result = 'Error';
        errorEl.classList.remove('error--hidden');
        errorEl.innerText = 'second operand is not a number';
    }
    if (result > 100) {
        result = 'Error';
        errorEl.classList.remove('error--hidden');
        errorEl.innerText = 'number is too big';
    }
    const resultObject = {
        operationResult: result,
        totalColumns: Math.ceil(result / 10),
        lastColumn: result - Math.floor(result / 10) * 10,
    };
    firstNumberInput.value = '';
    secondNumberInput.value = '';
    return resultObject;
}
function showResult() {
    const resultObject = getResultObject();
    resultEl.innerText = `${resultObject.operationResult}`;
    if (resultObject.operationResult === 'Error') {
        resultEl.classList.add('calculator__result--error');
    }
    resultEl.classList.add('calculator__result--calc');
}
button.addEventListener('click', showResult);
