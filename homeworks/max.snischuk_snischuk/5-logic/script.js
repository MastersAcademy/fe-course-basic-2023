const FIRST_VALUE_ELEMENT = document.querySelector('[data-math-value="first"]');
const SECOND_VALUE_ELEMENT = document.querySelector('[data-math-value="second"]');
const OPERATION_ELEMENT = document.querySelector('[data-math-operation]');
const CALCULATE_BUTTON_ELEMENT = document.querySelector('[data-math-calculate]');
const RESULT_ELEMENT = document.querySelector('[data-math-output]');

CALCULATE_BUTTON_ELEMENT.addEventListener('click', () => {
    const firstValue = FIRST_VALUE_ELEMENT.value;
    const secondValue = SECOND_VALUE_ELEMENT.value;
    const operation = OPERATION_ELEMENT.value;

    RESULT_ELEMENT.innerText = window.calculate(firstValue, secondValue, operation);
});
