const firstNumberInput = document.querySelector('[data-first-number]');
const secondNumberInput = document.querySelector('[data-second-number]');
const operation = document.querySelector('[data-operation]');
const button = document.querySelector('[data-button]');
const resultContainer = document.querySelector('[data-result]');
const commentContainer = document.querySelector('[data-comment]');
const inputCardContainer = document.querySelector('[data-input-card]');
const resultCardContainer = document.querySelector('[data-result-card]');
const operatorContainer = document.querySelector('[data-operator]');
const secondOperandContainer = document.querySelector('[data-second-operand]');
resultContainer.innerText = 'Result';
function showCalcResult() {
    let result;
    const firstNumber = Number(firstNumberInput.value);
    const secondNumber = Number(secondNumberInput.value);
    switch (operation.value) {
        case '1':
            result = firstNumber + secondNumber;
            commentContainer.innerText = `${firstNumber} + ${secondNumber} = ${result}`;
            break;
        case '2':
            result = firstNumber - secondNumber;
            commentContainer.innerText = `${firstNumber} - ${secondNumber} = ${result}`;
            break;
        case '3':
            result = firstNumber * secondNumber;
            commentContainer.innerText = `${firstNumber} * ${secondNumber} = ${result}`;
            break;
        case '4':
            result = firstNumber / secondNumber;
            commentContainer.innerText = `${firstNumber} / ${secondNumber} = ${result}`;
            break;
        default:
            result = firstNumber ** secondNumber;
            commentContainer.innerHTML = `${firstNumber}<sup>${secondNumber}</sup> = ${result}`;
            break;
    }
    if (firstNumberInput.value.trim() === '' || secondNumberInput.value.trim() === '') {
        result = 'Error';
        commentContainer.innerText = 'Enter a number';
    }
    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
        result = 'Error';
        commentContainer.innerText = 'Enter a number';
    }
    resultContainer.innerText = `${result}`;
    if (result > 100) {
        commentContainer.innerText = 'Too many games';
        resultContainer.innerText = 'Error';
    }
    resultContainer.classList.add('calculator__result--calc');
    return result;
}
function getDataObject() {
    const result = showCalcResult();
    const firstNumber = Number(firstNumberInput.value);
    const secondNumber = Number(secondNumberInput.value);
    const operationType = operation.value;
    const dataObject = {
        result,
        firstNumber,
        secondNumber,
        operationType,
        fullInputColumns: Math.floor(firstNumber / 10),
        lastInputColumn: (firstNumber % 10),
        fullResultColumns: Math.floor(result / 10),
        lastResultColumn: (result % 10),
    };
    return dataObject;
}
function getImageColumn(amount) {
    let top = 0;
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('card-container__column');
    for (let count = 0; count < amount; count++) {
        const card = document.createElement('div');
        card.classList.add('card-container__card');
        card.style.top = `${top}px`;
        top += 20;
        imageContainer.append(card);
    }
    return imageContainer;
}

function get10ImagesColumn() {
    return getImageColumn(10);
}
function showCards() {
    inputCardContainer.innerHTML = '';
    resultCardContainer.innerHTML = '';
    resultCardContainer.classList.remove('card-container__cards--error');
    const dataObject = getDataObject();
    for (let count = 0; count < dataObject.fullInputColumns; count++) {
        inputCardContainer.append(get10ImagesColumn());
    }
    inputCardContainer.append(getImageColumn(dataObject.lastInputColumn));
    if (dataObject.result < 100) {
        for (let count = 0; count < dataObject.fullResultColumns; count++) {
            resultCardContainer.append(get10ImagesColumn());
        }
        resultCardContainer.append(getImageColumn(dataObject.lastResultColumn));
    } else {
        resultCardContainer.innerText = 'Too many games';
        resultCardContainer.classList.add('card-container__cards--error');
    }
    secondOperandContainer.innerText = `${dataObject.secondNumber} = `;
    switch (dataObject.operationType) {
        case '1':
            operatorContainer.innerText = '+';
            break;
        case '2':
            operatorContainer.innerText = '-';
            break;
        case '3':
            operatorContainer.innerText = '*';
            break;
        case '4':
            operatorContainer.innerText = '/';
            break;
        default:
            operatorContainer.innerText = '^';
            break;
    }
}
button.addEventListener('click', showCards);
