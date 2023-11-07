const FIRST_VALUE_ELEMENT = document.querySelector('[data-math-value="first"]');
const SECOND_VALUE_ELEMENT = document.querySelector('[data-math-value="second"]');
const OPERATION_ELEMENT = document.querySelector('[data-math-operation]');
const CALCULATE_BUTTON_ELEMENT = document.querySelector('[data-math-calculate-btn]');
const RESULT_VALUE_ELEMENT = document.querySelector('[data-math-output-value]');
const CALCULATOR_CONTAINER = document.querySelector('[data-math-container]');

function createMathExpressionElement(value1, sign, value2, result) {
    return `
        <ul class="calculator__math-output-list" data-math-output-list>
            <li class="calculator__math-output-item" data-math-operand="first">${value1}</li>
            <li class="calculator__math-output-item">${sign}</li>
            <li class="calculator__math-output-item">${value2}</li>
            <li class="calculator__math-output-item">=</li>
            <li class="calculator__math-output-item" data-math-operand="last">${result} pokemons</li>
        </ul>
    `;
}

function renderMathExpressionElement() {
    const mathExpressionElement = CALCULATOR_CONTAINER.querySelector('[data-math-output-list]');
    if (mathExpressionElement) {
        mathExpressionElement.remove();
    }

    const firstValue = FIRST_VALUE_ELEMENT.value;
    const secondValue = SECOND_VALUE_ELEMENT.value;
    const operation = OPERATION_ELEMENT.value;

    const mathResult = window.calculate(firstValue, secondValue, operation);
    RESULT_VALUE_ELEMENT.innerText = mathResult;

    if (typeof mathResult !== 'number') return;

    CALCULATOR_CONTAINER.insertAdjacentHTML('beforeend', createMathExpressionElement(firstValue, operation, secondValue, mathResult));
}

function createCard() {
    const card = document.createElement('li');
    card.classList.add('calculator__math-output-card');

    const img = document.createElement('img');
    img.classList.add('calculator__math-output-card-img');
    img.src = './images/urshifu.png';
    img.alt = 'urshifu';

    card.appendChild(img);

    return card;
}

function createColumn() {
    const column = document.createElement('ul');
    column.classList.add('calculator__column');
    return column;
}

CALCULATE_BUTTON_ELEMENT.addEventListener('click', () => {
    renderMathExpressionElement();
});

FIRST_VALUE_ELEMENT.addEventListener('input', () => {
    renderMathExpressionElement();

    const MATH_FIRST_OPERAND_ELEMENT = document.querySelector('[data-math-operand="first"]');
    const pokemonsCardsCount = FIRST_VALUE_ELEMENT.value;

    if (pokemonsCardsCount <= 0) {
        const MATH_EXPRESSION_ELEMENT = CALCULATOR_CONTAINER.querySelector('[data-math-output-list]');
        if (MATH_EXPRESSION_ELEMENT) {
            MATH_EXPRESSION_ELEMENT.remove();
        }
        return;
    }

    if (pokemonsCardsCount < 1) {
        if (!MATH_FIRST_OPERAND_ELEMENT) return;
        MATH_FIRST_OPERAND_ELEMENT.innerHTML = '';

        const partialCard = pokemonsCardsCount;
        const pokemonCard = createCard();
        pokemonCard.style.clipPath = `inset(0 0 ${100 - partialCard * 100}% 0)`;

        MATH_FIRST_OPERAND_ELEMENT.outerHTML = pokemonCard.outerHTML;

        return;
    }

    if (pokemonsCardsCount >= 1 && pokemonsCardsCount <= 10) {
        if (!MATH_FIRST_OPERAND_ELEMENT) return;
        MATH_FIRST_OPERAND_ELEMENT.innerHTML = '';

        const pokemonsCardsList = document.createElement('ul');
        pokemonsCardsList.classList.add('calculator__column');

        for (let i = 1; i <= pokemonsCardsCount; i++) {
            const pokemonsCards = createCard(pokemonsCardsCount);
            pokemonsCardsList.appendChild(pokemonsCards);
        }

        MATH_FIRST_OPERAND_ELEMENT.appendChild(pokemonsCardsList);
    }

    const MATH_LAST_OPERAND_ELEMENT = document.querySelector('[data-math-operand="last"]');
    let pokemonsCardsCountResult = RESULT_VALUE_ELEMENT.innerText;

    if (pokemonsCardsCountResult <= 0) {
        const MATH_EXPRESSION_ELEMENT = CALCULATOR_CONTAINER.querySelector('[data-math-output-list]');
        if (MATH_EXPRESSION_ELEMENT) {
            MATH_EXPRESSION_ELEMENT.remove();
        }
        return;
    }

    if (pokemonsCardsCountResult < 1) {
        if (!MATH_LAST_OPERAND_ELEMENT) return;
        MATH_LAST_OPERAND_ELEMENT.innerHTML = '';

        const partialCard = pokemonsCardsCountResult;
        const pokemonCard = createCard();
        pokemonCard.style.clipPath = `inset(0 0 ${100 - partialCard * 100}% 0)`;

        MATH_LAST_OPERAND_ELEMENT.outerHTML = pokemonCard.outerHTML;
        return;
    }

    if (pokemonsCardsCountResult <= 100) {
        if (!MATH_LAST_OPERAND_ELEMENT) return;
        MATH_LAST_OPERAND_ELEMENT.innerHTML = '';

        const MAX_CARDS_IN_COLUMN = 10;
        const columnCount = Math.ceil(pokemonsCardsCountResult / MAX_CARDS_IN_COLUMN);

        for (let i = 1; i <= columnCount; i++) {
            const cardsInCurrentColumn = Math.min(MAX_CARDS_IN_COLUMN, pokemonsCardsCountResult);
            const column = createColumn();

            for (let j = 1; j <= cardsInCurrentColumn; j++) {
                const partialCard = pokemonsCardsCountResult - Math.floor(pokemonsCardsCountResult);
                const pokemonCard = createCard();
                column.appendChild(pokemonCard);

                if (partialCard > 0) {
                    pokemonCard.style.clipPath = `inset(0 0 ${partialCard * 100}% 0)`;
                    column.appendChild(pokemonCard);
                }

                pokemonsCardsCountResult--;
            }

            MATH_LAST_OPERAND_ELEMENT.appendChild(column);
        }
    }
});
