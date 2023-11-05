const FIRST_VALUE_ELEMENT = document.querySelector('[data-firstValue]');
const SECOND_VALUE_ELEMENT = document.querySelector('[data-secondValue]');
const OPERATION_ELEMENT = document.querySelector('[data-operation]');
const CALCULATE_BUTTON_ELEMENT = document.querySelector('[data-calculate]');
const RESULT_ELEMENT = document.querySelector('[data-result]');

CALCULATE_BUTTON_ELEMENT.addEventListener('click', () => {
    const firstValue = FIRST_VALUE_ELEMENT.value;
    const secondValue = SECOND_VALUE_ELEMENT.value;
    const operation = OPERATION_ELEMENT.value;

    RESULT_ELEMENT.innerText = window.calculate(firstValue, secondValue, operation);
});
