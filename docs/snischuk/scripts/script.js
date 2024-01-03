const FIRST_VALUE_ELEMENT = document.querySelector('[data-math-value="first"]');
const SECOND_VALUE_ELEMENT = document.querySelector('[data-math-value="second"]');
const OPERATION_ELEMENT = document.querySelector('[data-math-operation]');
const CALCULATE_BUTTON_ELEMENT = document.querySelector('[data-math-calculate-btn]');
const RESULT_VALUE_ELEMENT = document.querySelector('[data-math-output-value]');
const CALCULATOR_CONTAINER = document.querySelector('[data-math-container]');
const CALCULATOR_TIME = document.querySelector('[data-math-time]');

const MIN_CARDS_IN_COLUMN = 1;
const MAX_CARDS_IN_COLUMN = 10;

function measureTimeFn(fn) {
    const start = Date.now();
    for (let i = 0; i < 100; i++) {
        fn();
    }
    const finish = Date.now();
    const duration = finish - start;

    return `Time of function execution: ${duration}ms`;
}

function formatCustomDate(date) {
    const year = date.getFullYear();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[date.getMonth()];
    let dayOfMonth = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    dayOfMonth = dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth;
    hour = hour < 10 ? `0${hour}` : hour;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `Date of calculation: ${dayOfMonth}-${month}-${year}, ${hour}:${minutes}.`;
}

function deleteMathExpression() {
    const MATH_EXPRESSION_ELEMENT = CALCULATOR_CONTAINER.querySelector('[data-math-output-list]');
    if (!MATH_EXPRESSION_ELEMENT) return;
    MATH_EXPRESSION_ELEMENT.remove();
}

function createMathExpressionElement(value1, sign, value2, result) {
    return `
        <ul class="calculator__math-output-list" data-math-output-list>
            <li class="calculator__math-output-item" data-math-operand="first">${value1}</li>
            <li class="calculator__math-output-item">${sign}</li>
            <li class="calculator__math-output-item">${value2}</li>
            <li class="calculator__math-output-item">=</li>
            <li class="calculator__math-output-item" data-math-operand="last">${result}</li>
        </ul>
    `;
}

function renderMathExpressionElement() {
    deleteMathExpression();

    const firstValue = Number.parseFloat(FIRST_VALUE_ELEMENT.value);
    const secondValue = Number.parseFloat(SECOND_VALUE_ELEMENT.value);
    const operation = OPERATION_ELEMENT.value;

    if (Number.isNaN(firstValue) || Number.isNaN(secondValue)) {
        RESULT_VALUE_ELEMENT.innerText = 'Enter a number';
        return;
    }

    const mathResult = window.calculate(firstValue, secondValue, operation);
    RESULT_VALUE_ELEMENT.innerText = mathResult;

    CALCULATOR_CONTAINER.insertAdjacentHTML('beforeend', createMathExpressionElement(firstValue, operation, secondValue, mathResult));
}

function clearElement(element) {
    if (!element) return;
    element.innerHTML = '';
}

function changeElement(fromElement, toElement) {
    if (!(fromElement instanceof Element) || !(toElement instanceof Element)) return;
    fromElement.outerHTML = toElement.outerHTML;
}

function addElement(parent, child) {
    if (!(parent instanceof Element) || !(child instanceof Element)) return;
    parent.appendChild(child);
}

function createCard() {
    const card = document.createElement('li');
    card.classList.add('calculator__math-output-card');

    const cardTemplate = `
        <article class="card-pokemon">
            <div class="card-pokemon__header">
                <img class="card-pokemon__image" src="./images/urshifu.png" alt="urshifu">
                <h3 class="card-pokemon__title">Urshifu</h3>
            </div>
            <ul class="card-pokemon__body">
                <li class="card-pokemon__text">
                    <span class="card-pokemon__text--bold">Height: </span>6' 03"
                </li>
                <li class="card-pokemon__text">
                    <span class="card-pokemon__text--bold">Weight: </span>231.5 lbs
                </li>
                <li class="card-pokemon__text">
                    <span class="card-pokemon__text--bold">Number: </span>0002
                </li>
                <li class="card-pokemon__text">
                    <span class="card-pokemon__text--bold">Type: </span>
                    <button class="card-pokemon__btn card-pokemon__btn--yellow"
                        type="button">Fighting</button>
                    <button class="card-pokemon__btn card-pokemon__btn--red" type="button">Dark</button>
                </li>
                <li class="card-pokemon__text">
                    <span class="card-pokemon__text--bold">Weaknesses: </span>
                    <button class="card-pokemon__btn card-pokemon__btn--pink"
                        type="button">Fairy</button>
                    <button class="card-pokemon__btn card-pokemon__btn--purple"
                        type="button">Flying</button>
                </li>
            </ul>
        </article>
    `;

    card.innerHTML = cardTemplate;
    return card;
}

function createPartialCard(size) {
    const pokemonCard = createCard();
    pokemonCard.style.clipPath = `inset(0 0 ${100 - size * 100}% 0)`;
    return pokemonCard;
}

function addCardsToList(count) {
    const pokemonsCardsList = document.createElement('ul');
    pokemonsCardsList.classList.add('calculator__column');

    for (let i = 1; i <= count; i++) {
        const pokemonCard = createCard();
        pokemonsCardsList.appendChild(pokemonCard);
    }

    const partialCardSize = count - Math.floor(count);
    if (partialCardSize > 0) {
        const partialCard = createPartialCard(partialCardSize);
        pokemonsCardsList.appendChild(partialCard);
    }

    return pokemonsCardsList;
}

function overlapStyle(cardsCount, gridContainer) {
    const fullCountRow = Math.ceil(Number(cardsCount));
    if (!(gridContainer instanceof Element) || fullCountRow < 0) return;
    gridContainer.style.gridTemplateRows = `repeat(${fullCountRow + 1}, 80px)`;
}

function firstOutputOperandHandler() {
    const MATH_FIRST_OPERAND_ELEMENT = document.querySelector('[data-math-operand="first"]');
    const pokemonsCardsCount = FIRST_VALUE_ELEMENT.value;

    if (pokemonsCardsCount < 0) {
        deleteMathExpression();
        return;
    }

    if (pokemonsCardsCount === 0) {
        MATH_FIRST_OPERAND_ELEMENT.innerHTML = 0;
    }

    if (pokemonsCardsCount > 0 && pokemonsCardsCount < MIN_CARDS_IN_COLUMN) {
        clearElement(MATH_FIRST_OPERAND_ELEMENT);

        const partialCardSize = pokemonsCardsCount;
        const partialCard = createPartialCard(partialCardSize);

        changeElement(MATH_FIRST_OPERAND_ELEMENT, partialCard);
        return;
    }

    if (pokemonsCardsCount >= MIN_CARDS_IN_COLUMN && pokemonsCardsCount <= MAX_CARDS_IN_COLUMN) {
        clearElement(MATH_FIRST_OPERAND_ELEMENT);

        const cardsList = addCardsToList(pokemonsCardsCount);
        overlapStyle(pokemonsCardsCount, cardsList);

        addElement(MATH_FIRST_OPERAND_ELEMENT, cardsList);
    }

    MATH_FIRST_OPERAND_ELEMENT.style.paddingBottom = '280px';
}

function lastOutputOperandHandler() {
    const LIMIT_CARDS = 100;
    const MATH_LAST_OPERAND_ELEMENT = document.querySelector('[data-math-operand="last"]');

    const pokemonsCountResult = Number.parseFloat(RESULT_VALUE_ELEMENT.innerText);

    if (pokemonsCountResult <= 0) {
        deleteMathExpression();
        return;
    }

    if (pokemonsCountResult < MIN_CARDS_IN_COLUMN) {
        clearElement(MATH_LAST_OPERAND_ELEMENT);

        const partialCardSize = pokemonsCountResult;
        const partialCard = createPartialCard(partialCardSize);

        changeElement(MATH_LAST_OPERAND_ELEMENT, partialCard);
        return;
    }

    if (pokemonsCountResult >= MIN_CARDS_IN_COLUMN && pokemonsCountResult <= LIMIT_CARDS) {
        clearElement(MATH_LAST_OPERAND_ELEMENT);

        const columnCount = Math.ceil(pokemonsCountResult / MAX_CARDS_IN_COLUMN);
        let remainingCards = pokemonsCountResult;

        for (let i = 1; i <= columnCount; i++) {
            const cardsInCurrentColumn = Math.min(MAX_CARDS_IN_COLUMN, remainingCards);

            const cardsList = addCardsToList(cardsInCurrentColumn);
            overlapStyle(cardsInCurrentColumn, cardsList);

            addElement(MATH_LAST_OPERAND_ELEMENT, cardsList);
            remainingCards -= cardsInCurrentColumn;
        }

        MATH_LAST_OPERAND_ELEMENT.style.paddingBottom = '280px';
    }
}

function clickCalculateBtnHandler() {
    const measuredTime = measureTimeFn(renderMathExpressionElement);
    const dateCalculation = formatCustomDate(new Date());
    CALCULATOR_TIME.innerHTML = `${dateCalculation} ${measuredTime}`;
}

function inputFirstValueHandler() {
    renderMathExpressionElement();
    firstOutputOperandHandler();

    const measuredTime = measureTimeFn(lastOutputOperandHandler);
    const dateCalculation = formatCustomDate(new Date());
    CALCULATOR_TIME.innerHTML = `${dateCalculation} ${measuredTime}`;
}

CALCULATE_BUTTON_ELEMENT.addEventListener('click', clickCalculateBtnHandler);
FIRST_VALUE_ELEMENT.addEventListener('input', inputFirstValueHandler);
