const firstNumberInput = document.querySelector('[data-first-number]');
const secondNumberInput = document.querySelector('[data-second-number]');
const operation = document.querySelector('[data-operation]');
const button = document.querySelector('[data-button]');
const resultContainer = document.querySelector('[data-result]');
const commentContainer = document.querySelector('[data-comment]');
resultContainer.innerText = 'Result';
function getDate() {
    const currentDate = new Date();
    const dateOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    };
    return currentDate.toLocaleString('en-GB', dateOptions).replace(/ /g, '-');
}
function getTime() {
    const currentDate = new Date();
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
    };
    return currentDate.toLocaleString('en-GB', timeOptions);
}
function getAbsoluteTime() {
    const date = new Date();
    return date.getTime();
}
function getAddition(number) {
    if (number <= 1) {
        return 'game';
    }
    return 'games';
}
function showResult() {
    const timeStart = getAbsoluteTime();
    let result;
    commentContainer.innerText = '';
    commentContainer.classList.remove('comment-container--error');
    const firstNumber = Number(firstNumberInput.value);
    const secondNumber = Number(secondNumberInput.value);
    if (firstNumberInput.value.trim() === '' || secondNumberInput.value.trim() === '') {
        resultContainer.innerText = 'Error';
        commentContainer.innerText = 'Enter a number';
        commentContainer.classList.add('comment-container--error');
        return;
    }
    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
        resultContainer.innerText = 'Error';
        commentContainer.innerText = 'Enter a number';
        commentContainer.classList.add('comment-container--error');
        return;
    }
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
            result = firstNumber ** secondNumber;
            break;
    }
    resultContainer.innerText = `${result} ${getAddition(result)}`;

    if (result > 100) {
        resultContainer.innerText = 'Error';
        commentContainer.innerText = 'Too many games';
        commentContainer.classList.add('comment-container--error');
        return;
    }
    if (result < 0) {
        resultContainer.innerText = 'Error';
        commentContainer.innerText = 'Negative count of games is not possible';
        commentContainer.classList.add('comment-container--error');
        return;
    }
    resultContainer.classList.add('calculator__result--calc');
    for (let count = 0; count < 10000000; count++);
    const timeFinish = getAbsoluteTime();
    commentContainer.innerText = `Date of calculation: ${getDate()}, ${getTime()}. Time of function execution: ${timeFinish - timeStart} ms`;
}
button.addEventListener('click', showResult);
