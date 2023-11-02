const firstNumberInput = document.querySelector('[data-first-number]');
const secondNumberInput = document.querySelector('[data-second-number]');
const operation = document.querySelector('[data-operation]');
const button = document.querySelector('[data-button]');
const resultEl = document.querySelector('[data-result]');
const errorEl = document.querySelector('[data-error]');
resultEl.innerText = 'Result';
function getResultObject() {
    const firstNumber = Number(firstNumberInput.value);
    const secondNumber = Number(secondNumberInput.value);
    let result;
    const resultObject = {};
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
            resultObject.error = 1;
            break;
    }
    if (Number.isNaN(firstNumber)) {
        result = 'Error';
        resultObject.error = 2;
    }
    if (Number.isNaN(secondNumber)) {
        result = 'Error';
        resultObject.error = 3;
    }
    if (result > 100) {
        result = 'Error';
        resultObject.error = 4;
    }
    resultObject.operationResult = result;
    resultObject.totalColumns = Math.ceil(result / 10);
    resultObject.lastColumn = result - Math.floor(result / 10) * 10;
    return resultObject;
}
function showResult() {
    errorEl.classList.add('error--hidden');
    resultEl.classList.remove('calculator__result--error');
    const resultObject = getResultObject();
    if (resultObject.error) {
        errorEl.classList.remove('error--hidden');
        resultEl.classList.add('calculator__result--error');
        switch (resultObject.error) {
            case 1:
                errorEl.innerText = 'operation is not supported';
                break;
            case 2:
                errorEl.innerText = 'first operand is not a number';
                break;
            case 3:
                errorEl.innerText = 'second operand is not a number';
                break;
            default:
                errorEl.innerText = 'number is too big';
                break;
        }
    }
    resultEl.innerText = `${resultObject.operationResult}`;
    resultEl.classList.add('calculator__result--calc');
}
button.addEventListener('click', showResult);
