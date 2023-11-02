const firstNumberInput = document.querySelector('[data-first-number]');
const secondNumberInput = document.querySelector('[data-second-number]');
const operation = document.querySelector('[data-operation]');
const button = document.querySelector('[data-button]');
const resultContainer = document.querySelector('[data-result]');
const commentContainer = document.querySelector('[data-comment]');
resultContainer.innerText = 'Result';
function getResultObject() {
    const firstNumber = Number(firstNumberInput.value);
    const secondNumber = Number(secondNumberInput.value);
    const resultObject = {};
    resultObject.firstNumber = firstNumber;
    resultObject.secondNumber = secondNumber;
    switch (operation.value) {
        case '1':
            resultObject.result = firstNumber + secondNumber;
            resultObject.operator = 1;
            break;
        case '2':
            resultObject.result = firstNumber - secondNumber;
            resultObject.operator = 2;
            break;
        case '3':
            resultObject.result = firstNumber * secondNumber;
            resultObject.operator = 3;
            break;
        case '4':
            resultObject.result = firstNumber / secondNumber;
            resultObject.operator = 4;
            break;
        default:
            resultObject.result = 'Error';
            resultObject.error = 1;
            break;
    }
    if (Number.isNaN(firstNumber)) {
        resultObject.result = 'Error';
        resultObject.error = 2;
    }
    if (Number.isNaN(secondNumber)) {
        resultObject.result = 'Error';
        resultObject.error = 3;
    }
    if (resultObject.result > 100) {
        resultObject.result = 'Error';
        resultObject.error = 4;
    }
    if (Number.isNaN(firstNumber) && Number.isNaN(secondNumber)) {
        resultObject.result = 'Error';
        resultObject.error = 5;
    }
    return resultObject;
}
function showResult() {
    commentContainer.classList.add('comment--hidden');
    resultContainer.classList.remove('calculator__result--error');
    const resultObject = getResultObject();
    if (resultObject.error) {
        commentContainer.classList.remove('comment--hidden');
        resultContainer.classList.add('calculator__result--error');
        switch (resultObject.error) {
            case 1:
                commentContainer.innerText = 'operation is not supported';
                break;
            case 2:
                commentContainer.innerText = 'first operand is not a number';
                break;
            case 3:
                commentContainer.innerText = 'second operand is not a number';
                break;
            case 5:
                commentContainer.innerText = 'first and second operand are not a number';
                break;
            default:
                commentContainer.innerText = 'number is too big';
                break;
        }
    } else {
        switch (resultObject.operator) {
            case 1:
                commentContainer.innerText = `${resultObject.firstNumber} + ${resultObject.secondNumber} = ${resultObject.result}`;
                break;
            case 2:
                commentContainer.innerText = `${resultObject.firstNumber} - ${resultObject.secondNumber} = ${resultObject.result}`;
                break;
            case 3:
                commentContainer.innerText = `${resultObject.firstNumber} * ${resultObject.secondNumber} = ${resultObject.result}`;
                break;
            default:
                commentContainer.innerText = `${resultObject.firstNumber} / ${resultObject.secondNumber} = ${resultObject.result}`;
                break;
        }
    }
    resultContainer.innerText = `${resultObject.result}`;
    resultContainer.classList.add('calculator__result--calc');
}
button.addEventListener('click', showResult);
