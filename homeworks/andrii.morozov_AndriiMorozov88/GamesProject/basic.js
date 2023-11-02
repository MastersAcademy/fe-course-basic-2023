const firstNumberInput = document.querySelector('[data-first-number]');
const secondNumberInput = document.querySelector('[data-second-number]');
const operation = document.querySelector('[data-operation]');
const button = document.querySelector('[data-button]');
const resultContainer = document.querySelector('[data-result]');
const errorContainer = document.querySelector('[data-error]');
const cardContainer = document.querySelector('[data-card-container]');
resultContainer.innerText = 'Result';
function getResultObject() {
    const firstNumber = Number(firstNumberInput.value);
    const secondNumber = Number(secondNumberInput.value);
    let result;
    const resultObject = {};
    resultObject.firstNumber = firstNumber;
    resultObject.secondNumber = secondNumber;
    resultObject.totalInputColumns = Math.ceil(firstNumber / 10);
    resultObject.lastInputColumn = firstNumber - Math.floor(firstNumber / 10) * 10;
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
    resultObject.totalResultColumns = Math.ceil(result / 10);
    resultObject.lastResultColumn = result - Math.floor(result / 10) * 10;
    return resultObject;
}
function showCardColumn(number) {
    let cardStep = 0;
    for (let item = 0; item < number; item++) {
        const card = document.createElement('div');
        cardContainer.append(card);
        card.classList.add('card');
        card.style.top = `${cardStep}px`;
        cardStep += 15;
    }
}
function showResult() {
    errorContainer.classList.add('error--hidden');
    resultContainer.classList.remove('calculator__result--error');
    const resultObject = getResultObject();
    if (resultObject.error) {
        errorContainer.classList.remove('error--hidden');
        resultContainer.classList.add('calculator__result--error');
        switch (resultObject.error) {
            case 1:
                errorContainer.innerText = 'operation is not supported';
                break;
            case 2:
                errorContainer.innerText = 'first operand is not a number';
                break;
            case 3:
                errorContainer.innerText = 'second operand is not a number';
                break;
            default:
                errorContainer.innerText = 'number is too big';
                break;
        }
    } else {
        showCardColumn(resultObject.lastInputColumn);
    }
    resultContainer.innerText = `${resultObject.operationResult}`;
    resultContainer.classList.add('calculator__result--calc');
    console.log(resultObject);
}
button.addEventListener('click', showResult);
