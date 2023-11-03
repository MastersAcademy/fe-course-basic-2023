const FIRST_VALUE_ELEMENT = document.getElementById('firstValue');
const SECOND_VALUE_ELEMENT = document.getElementById('secondValue');
const OPERATION_ELEMENT = document.getElementById('operation');
const CALCULATE_BUTTON_ELEMENT = document.getElementById('calculate');
const RESULT_ELEMENT = document.getElementById('result');
const RESULT_WITH_POKEMONS_ELEMENT = document.getElementById('resultWithPokemons');

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
