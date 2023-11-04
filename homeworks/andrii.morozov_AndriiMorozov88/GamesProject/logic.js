const firstNumberInput = document.querySelector('[data-first-number]');
const secondNumberInput = document.querySelector('[data-second-number]');
const operation = document.querySelector('[data-operation]');
const button = document.querySelector('[data-button]');
const resultContainer = document.querySelector('[data-result]');
const commentContainer = document.querySelector('[data-comment]');
resultContainer.innerText = 'Result';
function showResult() {
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
    resultContainer.innerText = `${result}`;
    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
        resultContainer.innerText = 'Error';
        commentContainer.innerText = 'Enter a number';
    }

    if (firstNumberInput.value.trim() === '' || secondNumberInput.value.trim() === '') {
        resultContainer.innerText = 'Error';
        commentContainer.innerText = 'Enter a number';
    }

    if (result > 100) {
        resultContainer.innerText = 'Error';
        commentContainer.innerText = 'Too many games';
    }
    resultContainer.classList.add('calculator__result--calc');
}
button.addEventListener('click', showResult);
