const FIRST_VALUE_ELEMENT = document.querySelector('[data-math-value="first"]');
const SECOND_VALUE_ELEMENT = document.querySelector('[data-math-value="second"]');
const OPERATION_ELEMENT = document.querySelector('[data-math-operation]');
const CALCULATE_BUTTON_ELEMENT = document.querySelector('[data-math-calculate]');
const RESULT_ELEMENT = document.querySelector('[data-math-output]');
const RESULT_WITH_POKEMONS_ELEMENT = document.querySelector('[data-math-output-pokemons]');

CALCULATE_BUTTON_ELEMENT.addEventListener('click', () => {
    RESULT_WITH_POKEMONS_ELEMENT.innerHTML = '';

    const firstValue = FIRST_VALUE_ELEMENT.value;
    const secondValue = SECOND_VALUE_ELEMENT.value;
    const operation = OPERATION_ELEMENT.value;

    const mathResult = window.calculate(firstValue, secondValue, operation);
    RESULT_ELEMENT.innerText = mathResult;

    if (typeof mathResult !== 'number') return;

    const mathOutputWithPokemonsTemplate = `
            <span>${firstValue}</span><span>${operation}</span><span>${secondValue}</span><span>=</span><span>${mathResult} pokemons</span>
        `;

    RESULT_WITH_POKEMONS_ELEMENT.innerHTML = mathOutputWithPokemonsTemplate;
});
