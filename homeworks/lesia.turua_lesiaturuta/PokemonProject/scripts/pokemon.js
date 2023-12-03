// pokemons-mock.js
let pokemons = [];

const cardsEl = document.querySelector('[data-cards]');
const selectSearchEl = document.querySelector('[data-filter-select-search]');
const selectSearchRadioHighEl = document.querySelector('[data-filter-high]');
const selectSearchRadioLowEl = document.querySelector('[data-filter-Low]');
const selectSearchCheckboxBigEl = document.querySelector('[data-filter-big]');
const selectSearchCheckboxSmallEl = document.querySelector('[data-filter-small]');
const selectSearchInputSearchEl = document.querySelector('[data-filter-search]');
const selectSearchInputButtonEl = document.querySelector('[data-filter-button]');
const loadingEl = document.querySelector('[data-loading]');

let checkboxBig = selectSearchCheckboxBigEl.checked;
let checkboxSmall = selectSearchCheckboxSmallEl.checked;
let searchValue = '';
let filterPokemonsArray = [];
let typesPokemons = [];

const createCardElement = (pokemon) => {
    const templateEl = document.querySelector('[data-type]');
    const templateContent = document.importNode(templateEl.content, true);

    const cardTitleEl = templateContent.querySelector('[data-card-title]');
    const cardImageEl = templateContent.querySelector('[data-card-image]');
    const cardHeightEl = templateContent.querySelector('[data-card-height]');
    const cardWeightEl = templateContent.querySelector('[data-card-weight]');
    const cardNumberEl = templateContent.querySelector('[data-card-number]');
    const cardType1El = templateContent.querySelector('[data-card-type1]');
    const cardType2El = templateContent.querySelector('[data-card-type2]');
    const cardWeaknesses1El = templateContent.querySelector('[data-card-weaknesses1]');
    const cardWeaknesses2El = templateContent.querySelector('[data-card-weaknesses2]');

    cardTitleEl.textContent = pokemon.name;
    cardImageEl.src = pokemon.ThumbnailImage;
    cardHeightEl.textContent = pokemon.height;
    cardWeightEl.textContent = `${pokemon.weight} lbs`;
    cardNumberEl.textContent = pokemon.number;
    const [firstType, secondType] = pokemon.type;
    cardType1El.textContent = firstType;
    cardType2El.textContent = secondType;
    if (!secondType) {
        cardType2El.classList.add('display-none');
    }
    const [firstWeakness, secondWeakness] = pokemon.weakness;
    cardWeaknesses1El.textContent = firstWeakness;
    cardWeaknesses2El.textContent = secondWeakness;
    if (!secondWeakness) {
        cardWeaknesses2El.classList.add('display-none');
    }
    return templateContent;
};

const renderCards = (cardContainer, pokemonsArray) => {
    const fragment = new DocumentFragment();
    for (let i = 0; i < pokemonsArray.length; i++) {
        fragment.append(createCardElement(pokemonsArray[i]));
    }
    cardContainer.append(fragment);
    return true;
};

const cleanElement = (el) => {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
};

const renderSelect = () => {
    cleanElement(selectSearchEl);
    const optionFirstEl = document.createElement('option');
    optionFirstEl.value = 'Select type: ';
    optionFirstEl.text = 'Select type: ';
    optionFirstEl.selected = true;
    optionFirstEl.disabled = true;
    selectSearchEl.add(optionFirstEl);
    typesPokemons.forEach((type) => {
        const optionEl = document.createElement('option');
        optionEl.value = type;
        optionEl.text = type;
        selectSearchEl.add(optionEl);
    });
};

const sortPokemonsUp = (array) => array.sort((a, b) => a.height - b.height);

const sortPokemonsDown = (array) => array.sort((a, b) => b.height - a.height);

const updateTypes = (array) => {
    const types = [];
    array.forEach((pokemon) => pokemon.type.forEach((type) => {
        if (!types.includes(type)) types.push(type);
    }));
    return types;
};

const filterPokemons = (checkBig, checkSmall) => {
    let newPokemons = pokemons;
    if (checkBig && checkSmall) {
        newPokemons = pokemons.filter((pokemon) => pokemon.weight < 100 && pokemon.weight > 50);
    } else if (checkBig && !checkSmall) {
        newPokemons = pokemons.filter((pokemon) => pokemon.weight > 100);
    } else if (!checkBig && checkSmall) {
        newPokemons = pokemons.filter((pokemon) => pokemon.weight < 50);
    }
    return newPokemons;
};

const filterPokemonsByType = (type) => pokemons.filter((pokemon) => pokemon.type.includes(type));

const init = async () => {
    // get pokemons
    try {
        const url = 'https://my-json-server.typicode.com/electrovladyslav/pokemon-json-server/pokemons';
        const response = await fetch(url);
        pokemons = await response.json();
        filterPokemonsArray = [...pokemons];
        typesPokemons = updateTypes(pokemons);
        renderSelect();
        loadingEl.classList.add('display-none');
    } catch (e) {
        alert('Error url, please update this page');
        console.error(e);
    }

    // disabled for html elements
    // selectSearchEl.disabled = true;
    // selectSearchRadioHighEl.disabled = true;
    // selectSearchRadioLowEl.disabled = true;
    // selectSearchInputSearchEl.disabled = true;
    // selectSearchInputButtonEl.disabled = true;

    selectSearchCheckboxBigEl.addEventListener('change', (e) => {
        checkboxBig = e.target.checked;
        filterPokemonsArray = filterPokemons(checkboxBig, checkboxSmall);
        typesPokemons = updateTypes(filterPokemonsArray);
        renderSelect();
        cleanElement(cardsEl);
        renderCards(cardsEl, filterPokemonsArray);
    });

    selectSearchCheckboxSmallEl.addEventListener('change', (e) => {
        checkboxSmall = e.target.checked;
        filterPokemonsArray = filterPokemons(checkboxBig, checkboxSmall);
        typesPokemons = updateTypes(filterPokemonsArray);
        renderSelect();
        cleanElement(cardsEl);
        renderCards(cardsEl, filterPokemonsArray);
    });

    selectSearchEl.addEventListener('change', (e) => {
        filterPokemonsArray = filterPokemonsByType(e.target.value);
        cleanElement(cardsEl);
        renderCards(cardsEl, sortPokemonsUp(filterPokemonsArray));
    });

    selectSearchRadioHighEl.addEventListener('change', () => {
        cleanElement(cardsEl);
        renderCards(cardsEl, sortPokemonsUp(filterPokemonsArray));
    });

    selectSearchRadioLowEl.addEventListener('change', () => {
        cleanElement(cardsEl);
        renderCards(cardsEl, sortPokemonsDown(filterPokemonsArray));
    });

    selectSearchInputButtonEl.addEventListener('click', (e) => {
        e.preventDefault();
        // eslint-disable-next-line max-len
        const newPokemons = filterPokemonsArray.filter((pokemon) => pokemon.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
        cleanElement(cardsEl);
        renderCards(cardsEl, newPokemons);
    });

    selectSearchInputSearchEl.addEventListener('input', (e) => {
        searchValue = e.target.value;
    });

    renderCards(cardsEl, pokemons);
};

init();
