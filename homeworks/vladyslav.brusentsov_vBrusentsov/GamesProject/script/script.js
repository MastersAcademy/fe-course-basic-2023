const FIRST_VALUE_ELEMENT = document.getElementById('firstValue');
const SECOND_VALUE_ELEMENT = document.getElementById('secondValue');
const OPERATION_ELEMENT = document.getElementById('operation');
const CALCULATE_BUTTON_ELEMENT = document.getElementById('calculate');
const RESULT_ELEMENT = document.getElementById('result');
const CALCULATE_OPERATION = document.getElementById('calculate-operation');
const CALCULATE_BENCHMARK = document.getElementById('calculate-benchmark');

CALCULATE_BUTTON_ELEMENT.addEventListener('click', () => {
    const firstValue = FIRST_VALUE_ELEMENT.value;
    const secondValue = SECOND_VALUE_ELEMENT.value;
    const operation = OPERATION_ELEMENT.value;

    const calculationResult = window.calculate(firstValue, secondValue, operation);

    RESULT_ELEMENT.innerText = calculationResult.result;
    CALCULATE_OPERATION.innerText = `${firstValue} ${operation} ${secondValue} = ${calculationResult.result}`;
    CALCULATE_BENCHMARK.innerText = `Date of calculation: ${calculationResult.startedTime}. Time of function execution: ${calculationResult.benchmark} ms`;
});
