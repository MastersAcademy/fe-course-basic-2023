const cardsList = document.querySelector('[data-type="cards-list"]');
const formFilters = document.querySelector('[data-type="filters"]');
const loading = document.querySelector('[data-type="loading"]');
const bigPokemonCheckbox = formFilters.elements.big;
const smallPokemonCheckbox = formFilters.elements.small;
const baseUrl = 'https://my-json-server.typicode.com/electrovladyslav/pokemon-json-server/pokemons';
let pokemons = [];

function createCardElement(pokemonsList) {
    const cardItem = document.querySelector('[data-type="card-template"]');
    const cardContent = cardItem.content;
    const cardName = cardContent.querySelector('[data-card-name]');
    const cardImage = cardContent.querySelector('[data-card-image]');
    const cardHeight = cardContent.querySelector('[data-card-height]');
    const cardWeight = cardContent.querySelector('[data-card-weight]');
    const cardNumber = cardContent.querySelector('[data-card-number]');

    cardImage.src = pokemonsList.ThumbnailImage;
    cardName.textContent = pokemonsList.name;
    cardHeight.textContent = pokemonsList.height;
    cardWeight.textContent = pokemonsList.weight;
    cardNumber.textContent = pokemonsList.number;
    return cardContent.cloneNode(true);
}

function renderCards(container, pokemonsList) {
    container.innerHTML = '';
    const fragment = new DocumentFragment();
    pokemonsList.forEach((pokemon) => {
        const card = createCardElement(pokemon);
        fragment.appendChild(card);
    });
    container.appendChild(fragment);
}

function filterPokemons(pokemonsList) {
    const isSmallSizeFilterChecked = formFilters.elements.small.checked;
    const isBigSizeFilterChecked = formFilters.elements.big.checked;
    const filter = [];
    pokemonsList.forEach((card) => {
        if (isBigSizeFilterChecked && card.height >= 100) {
            filter.push(card);
        }
        if (isSmallSizeFilterChecked && card.height <= 50) {
            filter.push(card);
        }
        if (isSmallSizeFilterChecked && isBigSizeFilterChecked
            && card.height <= 50 && card.height >= 100) {
            filter.push(card);
        }
        if (!isSmallSizeFilterChecked && !isBigSizeFilterChecked) {
            filter.push(card);
        }
    });
    return filter;
}

function showSpinner() {
    loading.style.display = 'block';
}

function hideSpinner() {
    loading.style.display = 'none';
}

async function fetchData() {
    try {
        showSpinner();
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
        };

        const response = await fetch(baseUrl, options);
        const json = await response.json();
        pokemons = json.slice(0, 50);
        hideSpinner();
    } catch (error) {
        console.error('GET error:', error.message);
    } return pokemons;
}

function onSizeFilterChange() {
    renderCards(cardsList, filterPokemons(pokemons));
}

async function init() {
    bigPokemonCheckbox.addEventListener('change', onSizeFilterChange);
    smallPokemonCheckbox.addEventListener('change', onSizeFilterChange);
    await fetchData();
    renderCards(cardsList, pokemons);
}

window.onload = init;
