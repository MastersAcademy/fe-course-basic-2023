const cardsEl = document.querySelector('[data-cards]');
const searchEl = document.querySelector('[data-filter-select-search]');
const highFilterEl = document.querySelector('[data-filter-high]');
const lowFilterEl = document.querySelector('[data-filter-Low]');
const checkboxBigEl = document.querySelector('[data-filter-big]');
const checkboxSmallEl = document.querySelector('[data-filter-small]');
const inputSearchEl = document.querySelector('[data-filter-search]');
const buttonSearchEl = document.querySelector('[data-filter-button]');
const loadingEl = document.querySelector('[data-loading]');

const url = 'https://my-json-server.typicode.com/electrovladyslav/pokemon-json-server/pokemons';
let pokemons = [];
let typesPokemons = [];
let searchValue = '';
let typeValue = '';
let checkboxBig = checkboxBigEl.checked;
let checkboxSmall = checkboxSmallEl.checked;

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

const cleanElement = (el) => {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
};

const renderCards = (cardContainer, pokemonsArray) => {
    cleanElement(cardsEl);
    const fragment = new DocumentFragment();
    for (let i = 0; i < pokemonsArray.length; i++) {
        fragment.append(createCardElement(pokemonsArray[i]));
    }
    cardContainer.append(fragment);
    return true;
};

const renderSelect = (name) => {
    cleanElement(searchEl);
    const optionFirstEl = document.createElement('option');
    optionFirstEl.value = '';
    optionFirstEl.text = 'All types';
    searchEl.add(optionFirstEl);
    typesPokemons.forEach((type) => {
        const optionEl = document.createElement('option');
        optionEl.value = type;
        if (type === name) {
            optionEl.selected = true;
        }
        optionEl.text = type;
        searchEl.add(optionEl);
    });
};

const sortPokemonsUp = (arrayPokemons) => arrayPokemons.sort((a, b) => a.height - b.height);

const sortPokemonsDown = (arrayPokemons) => arrayPokemons.sort((a, b) => b.height - a.height);

const getPokemonTypes = (arrayPokemons) => {
    const types = [];
    arrayPokemons.forEach((pokemon) => pokemon.type.forEach((type) => {
        if (!types.includes(type)) types.push(type);
    }));
    return types;
};

const getPokemonsByType = (arrayPokemons) => (typeValue
    ? arrayPokemons
        .filter((pokemon) => pokemon.type
            .includes(typeValue))
    : arrayPokemons);

const getPokemonsByName = (arrayPokemons) => (searchValue
    ? arrayPokemons
        .filter((pokemon) => pokemon.name
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase()))
    : arrayPokemons);

const getPokemonsByWeight = (arrayPokemons) => {
    let newPokemons = [...arrayPokemons];
    if (checkboxBig && checkboxSmall && newPokemons.length) {
        newPokemons = newPokemons.filter((pokemon) => pokemon.weight > 100 || pokemon.weight < 50);
    } else if (checkboxBig && !checkboxSmall && newPokemons.length) {
        newPokemons = newPokemons.filter((pokemon) => pokemon.weight > 100);
    } else if (!checkboxBig && checkboxSmall && newPokemons.length) {
        newPokemons = newPokemons.filter((pokemon) => pokemon.weight < 50);
    }
    return newPokemons;
};

const sortByHeight = (arrayPokemons) => {
    let newPokemons = [...arrayPokemons];
    if (highFilterEl.checked && newPokemons.length) {
        newPokemons = sortPokemonsDown(newPokemons);
    }
    if (lowFilterEl.checked && newPokemons.length) {
        newPokemons = sortPokemonsUp(newPokemons);
    }
    return newPokemons;
};

const getPokemons = async (urlPokemons) => {
    try {
        const response = await fetch(urlPokemons);
        return await response.json();
    } catch (e) {
        alert('Error url, please update this page');
        console.error(e);
        return [];
    }
};

const getFilteredPokemons = () => {
    let newPokemons = [...pokemons];
    newPokemons = getPokemonsByName(newPokemons);
    newPokemons = getPokemonsByType(newPokemons);
    newPokemons = getPokemonsByWeight(newPokemons);
    newPokemons = sortByHeight(newPokemons);
    return newPokemons;
};

const addHandlers = () => {
    checkboxBigEl.addEventListener('change', (e) => {
        checkboxBig = e.target.checked;
        renderCards(cardsEl, getFilteredPokemons());
    });

    checkboxSmallEl.addEventListener('change', (e) => {
        checkboxSmall = e.target.checked;
        renderCards(cardsEl, getFilteredPokemons());
    });

    searchEl.addEventListener('change', (e) => {
        typeValue = e.target.value;
        renderCards(cardsEl, getFilteredPokemons());
    });

    highFilterEl.addEventListener('change', () => {
        renderCards(cardsEl, getFilteredPokemons());
    });

    lowFilterEl.addEventListener('change', () => {
        renderCards(cardsEl, getFilteredPokemons());
    });

    buttonSearchEl.addEventListener('click', (e) => {
        e.preventDefault();
        renderCards(cardsEl, getFilteredPokemons());
    });

    inputSearchEl.addEventListener('input', (e) => {
        searchValue = e.target.value;
    });
};

const init = async () => {
    pokemons = await getPokemons(url);
    typesPokemons = getPokemonTypes(pokemons);
    renderSelect(typeValue);
    loadingEl.remove();
    addHandlers();
    renderCards(cardsEl, pokemons);
};

init();
