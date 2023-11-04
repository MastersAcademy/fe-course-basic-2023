const FIRST_VALUE_ELEMENT = document.getElementById('firstValue');
const SECOND_VALUE_ELEMENT = document.getElementById('secondValue');
const OPERATION_ELEMENT = document.getElementById('operation');
const CALCULATE_BUTTON_ELEMENT = document.getElementById('calculate');
const IMAGE_ELEMENT = document.getElementById('result');

CALCULATE_BUTTON_ELEMENT.addEventListener('click', () => {
    const firstValue = FIRST_VALUE_ELEMENT.value;
    const secondValue = SECOND_VALUE_ELEMENT.value;
    const operation = OPERATION_ELEMENT.value;

    IMAGE_ELEMENT.innerText = window.calculate(firstValue, secondValue, operation);
});
