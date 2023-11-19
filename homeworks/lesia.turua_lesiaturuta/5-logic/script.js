const FIRST_VALUE_ELEMENT = document.getElementById('firstValue');
const SECOND_VALUE_ELEMENT = document.getElementById('secondValue');
const OPERATION_ELEMENT = document.getElementById('operation');
const CALCULATE_BUTTON_ELEMENT = document.getElementById('calculate');
const RESULT_ELEMENT = document.getElementById('result');

const resultFirstValuesEl = document.querySelector('[data-firstValue]');
const resultSecondValuesEl = document.querySelector('[data-secondValue]');
const resultImagesEl = document.querySelector('[data-showImages]');
const resultOperationEl = document.querySelector('[data-operation]');
const resultEqualsEl = document.querySelector('[data-equals]');

FIRST_VALUE_ELEMENT.addEventListener('change', () => {
    const firstNumber = Number(FIRST_VALUE_ELEMENT.value);
    if (!firstNumber) {
        resultOperationEl.innerHTML = '';
        window.cleanElement(resultFirstValuesEl);
        window.cleanElement(resultEqualsEl);
        window.cleanElement(resultImagesEl);
        return;
    }
    window.cleanElement(resultFirstValuesEl);
    if (firstNumber > 10) {
        resultFirstValuesEl.innerHTML = `${firstNumber}`;
    } else {
        const images = window.createImages(firstNumber);
        resultFirstValuesEl.appendChild(images);
    }
    resultOperationEl.innerHTML = OPERATION_ELEMENT.value;
});

OPERATION_ELEMENT.addEventListener('change', () => {
    resultOperationEl.innerHTML = OPERATION_ELEMENT.value;
    window.cleanElement(resultEqualsEl);
    window.cleanElement(resultImagesEl);
});

SECOND_VALUE_ELEMENT.addEventListener('change', () => {
    if (resultSecondValuesEl.innerHTML) {
        window.cleanElement(resultEqualsEl);
        window.cleanElement(resultImagesEl);
    }
    resultSecondValuesEl.innerHTML = SECOND_VALUE_ELEMENT.value;
});

CALCULATE_BUTTON_ELEMENT.addEventListener('click', () => {
    const firstValue = FIRST_VALUE_ELEMENT.value;
    const secondValue = SECOND_VALUE_ELEMENT.value;
    const operation = OPERATION_ELEMENT.value;

    const resultMath = window.calculate(firstValue, secondValue, operation);
    window.cleanElement(resultImagesEl);
    if (typeof resultMath === 'string') {
        resultImagesEl.innerHTML = resultMath === 'Result is too big' ? 'Too many <br />pokemons' : resultMath;
    } else if (resultMath < 0) {
        resultImagesEl.innerHTML = resultMath;
    } else {
        const images = window.createImages(resultMath);
        resultImagesEl.appendChild(images);
    }
    resultEqualsEl.innerHTML = '=';
    RESULT_ELEMENT.innerText = resultMath <= 1 ? `${resultMath} pokemon` : `${resultMath} pokemons`;
});
