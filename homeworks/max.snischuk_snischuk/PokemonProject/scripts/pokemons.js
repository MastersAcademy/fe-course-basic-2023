async function initPokemons() {
    const body = document.querySelector('body');
    const FORM_FILTERS_ELEMENT = document.querySelector('[data-form-filters]');
    const SELECT_CUSTOM_BTN = FORM_FILTERS_ELEMENT.querySelector('[data-select-custom-btn]');
    const SELECT_CUSTOM_LIST = FORM_FILTERS_ELEMENT.querySelector('[data-select-custom-list]');
    const TEXT_INPUT_ELEMENT = FORM_FILTERS_ELEMENT.elements['search-query'];
    const CARDS_CONTAINER_ELEMENT = document.querySelector('[data-cards-container]');
    const LOADER_CONTAINER_ELEMENT = document.querySelector('[data-loader-container]');

    const selectCustomOptions = Array.from(SELECT_CUSTOM_LIST.querySelectorAll('[data-option-value]'));

    let allCards;
    let filteredCards = [];

    function getSelectedOptionsValues() {
        return selectCustomOptions.filter((option) => option.classList.contains('filters__select-option--selected'))
            .map((option) => option.dataset.optionValue);
    }

    function toggleSelectedOptionHandler(event) {
        selectCustomOptions.forEach((option) => {
            if (event.target !== option) return;
            option.classList.toggle('filters__select-option--selected');
        });
    }

    function hideDropDownOptions(event) {
        event.stopPropagation();
        if (event.target.tagName === 'LI') return;
        SELECT_CUSTOM_LIST.classList.remove('filters__select-list--active');
        body.removeEventListener('click', hideDropDownOptions);
    }

    function showDropDownOptions(event) {
        event.stopPropagation();
        SELECT_CUSTOM_LIST.classList.add('filters__select-list--active');
        body.addEventListener('click', hideDropDownOptions);
    }

    function initCustomSelect() {
        SELECT_CUSTOM_BTN.addEventListener('click', showDropDownOptions);
        SELECT_CUSTOM_LIST.addEventListener('click', toggleSelectedOptionHandler);
    }

    function clearContainer(container) {
        if (!container) return;
        container.innerHTML = '';
    }

    function showLoader() {
        const LOADER_ELELEMNT = `
            <div class="pokemons__loader-animation"></div>
            <p class="pokemons__loader-text">Loading...</p>
        `;
        LOADER_CONTAINER_ELEMENT.innerHTML = LOADER_ELELEMNT;
    }

    function hideLoader() {
        clearContainer(LOADER_CONTAINER_ELEMENT);
    }

    function createCardElement(pokemon) {
        const {
            name,
            ThumbnailImage,
            ThumbnailAltText,
            height,
            weight,
            number,
            type,
            weakness,
        } = pokemon;

        const typesButtons = type
            .map((subtype) => `<button class="card-pokemon__btn card-pokemon__btn--${subtype.toLowerCase()}" type="button">${subtype.charAt(0).toUpperCase()}${subtype.toLowerCase().slice(1)}</button>`)
            .join('');

        const weaknessesButtons = weakness
            .map((subtype) => `<button class="card-pokemon__btn card-pokemon__btn--${subtype.toLowerCase()}" type="button">${subtype}</button>`)
            .join('');

        const cardTemplateStr = `
            <li class="pokemons__card-item card-pokemon">
                <div class="card-pokemon__header">
                    <img class="card-pokemon__image" src="${ThumbnailImage}" alt="${ThumbnailAltText}">
                    <h3 class="card-pokemon__title">${name}</h3>
                </div>
                <ul class="card-pokemon__body">
                    <li class="card-pokemon__text">
                        <span class="card-pokemon__text--bold">Height: </span>${height}′
                    </li>
                    <li class="card-pokemon__text">
                        <span class="card-pokemon__text--bold">Weight: </span>${weight} lbs
                    </li>
                    <li class="card-pokemon__text">
                        <span class="card-pokemon__text--bold">Number: </span>${number}
                    </li>
                    <li class="card-pokemon__text">
                        <span class="card-pokemon__text--bold">Type: </span>
                        ${typesButtons}
                    </li>
                    <li class="card-pokemon__text">
                        <span class="card-pokemon__text--bold">Weaknesses: </span>
                        ${weaknessesButtons}
                    </li>
                </ul>
            </li>
        `;

        return cardTemplateStr;
    }

    function renderCards(container, cards) {
        clearContainer(container);

        const renderedCards = cards.map((card) => {
            const pokemonCard = createCardElement(card);
            container.insertAdjacentHTML('beforeEnd', pokemonCard);
            return pokemonCard;
        });

        return renderedCards;
    }

    function filterByPokemonsType(cards) {
        const selectedOptionsValues = getSelectedOptionsValues();

        const filteredTypes = cards.filter((card) => selectedOptionsValues
            .every((type) => card.type.includes(type)));

        return filteredTypes;
    }

    function filterBySearchQuery(cards) {
        const inputValue = FORM_FILTERS_ELEMENT.elements['search-query'].value.toLowerCase();
        return cards.filter((card) => card.name.toLowerCase().includes(inputValue));
    }

    function sortByHeight(cards) {
        const isLowFirstChecked = FORM_FILTERS_ELEMENT.elements.low.checked;

        const sortedCards = cards.sort((a, b) => {
            if (isLowFirstChecked) {
                return a.height - b.height;
            }
            return b.height - a.height;
        });

        return sortedCards;
    }

    function updateFilteredCards() {
        filteredCards = [...allCards];

        if (FORM_FILTERS_ELEMENT.querySelector('[data-select-custom-btn]')) {
            filteredCards = filterByPokemonsType(filteredCards);
        }

        if (FORM_FILTERS_ELEMENT.elements['search-query'].value) {
            filteredCards = filterBySearchQuery(filteredCards);
        }

        if (FORM_FILTERS_ELEMENT.elements['sort-height'].value) {
            filteredCards = sortByHeight(filteredCards);
        }

        return filteredCards;
    }

    function onChangeFiltersHandler() {
        const updatedFilteredCards = updateFilteredCards();
        renderCards(CARDS_CONTAINER_ELEMENT, updatedFilteredCards);
    }

    function onInputSearchHandler() {
        const updatedFilteredCards = updateFilteredCards();
        renderCards(CARDS_CONTAINER_ELEMENT, updatedFilteredCards);
    }

    function onSubmitFiltersHandler(event) {
        event.preventDefault();
        onChangeFiltersHandler();
    }

    function onClickCustomSelectHandler() {
        const updatedFilteredCards = updateFilteredCards();
        renderCards(CARDS_CONTAINER_ELEMENT, updatedFilteredCards);
    }

    async function fetchAndRenderPokemons() {
        try {
            showLoader();

            const pokemonsUrl = 'https://my-json-server.typicode.com/electrovladyslav/pokemon-json-server/pokemons';
            const options = {
                method: 'GET',
            };

            const response = await fetch(`${pokemonsUrl}`, options);
            const pokemons = await response.json();
            allCards = [...pokemons];

            renderCards(CARDS_CONTAINER_ELEMENT, allCards);

            TEXT_INPUT_ELEMENT.addEventListener('input', onInputSearchHandler);
            FORM_FILTERS_ELEMENT.addEventListener('change', onChangeFiltersHandler);
            SELECT_CUSTOM_LIST.addEventListener('click', onClickCustomSelectHandler);
            FORM_FILTERS_ELEMENT.addEventListener('submit', onSubmitFiltersHandler);
        } catch (error) {
            console.error(`GET error: ${error.message}`);
            CARDS_CONTAINER_ELEMENT.innerHTML = `GET error: ${error.message}... Please try again later.`;
        } finally {
            hideLoader();
        }
    }

    initCustomSelect();
    await fetchAndRenderPokemons();
}

document.addEventListener('DOMContentLoaded', initPokemons);
