const container = '.pokemons__cards';
const bigCheckbox = document.getElementById('big');
const smallCheckbox = document.getElementById('small');
const applyButton = document.querySelector('.filters__search--button');
const searchInput = document.getElementById('search');
const selectElement = document.getElementById('type');
const spinner = document.querySelector('.loading');
const lowFirst = document.getElementById('lowFirst');
const highFirst = document.getElementById('highFirst');
const formSelect = document.querySelector('[data-type="select"]');

spinner.style.display = 'inline-block';

let allPokemons = [];
let filteredPokemons = [];
let currentSortType = null;

function createPokemonCard(pokemon) {
    const {
        name,
        ThumbnailImage,
        ThumbnailAltText,
        abilities,
        height,
        weight,
        number,
        type,
        weakness,
    } = pokemon;

    const rendering = `
        <div class="pokemons__cards-item">
            <div class="card__pokemon">
                <img class="card__pokemon-img" src="${ThumbnailImage}" alt="${ThumbnailAltText}">
                <h3 class="card__pokemon-name">
                    <strong>${name}</strong>
                </h3>
            </div>

            <div class="card__characteristics">
                <div class="card__characteristics-abilities">
                    <strong>Abilities:</strong>
                    <span>${abilities}</span>
                </div>
                <div class="card__characteristics-height">
                    <strong>Height:</strong>
                    <span>${height}"</span>
                </div>
                <div class="card__characteristics-weight">
                    <strong>Weight:</strong>
                    <span>${weight} lbs</span>
                </div>
                <div class="card__characteristics-number">
                    <strong>Number:</strong>
                    <span>${number}</span>
                </div>
                <div class="card__characteristics-type">
                    <strong>Type:</strong>
                    ${type.map((t) => `<span>${t}</span>`).join('')}
                </div>
                <div class="card__characteristics-weaknesses">
                    <strong>Weaknesses:</strong>
                    ${weakness.map((w) => `<span>${w}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    return rendering;
}

function renderCards(containerCard, pokemon) {
    const cardsContainer = document.querySelector(containerCard);
    if (!cardsContainer) return;
    cardsContainer.innerHTML = '';
    pokemon.forEach((item) => {
        const rendering = createPokemonCard(item);
        cardsContainer.innerHTML += rendering;
    });
}

function renderCardsByType(containerCard, pokemon, selectedType) {
    const cardsContainer = document.querySelector(containerCard);
    if (!cardsContainer) return;

    cardsContainer.innerHTML = '';

    const filteredPokemonByType = pokemon.filter((item) => selectedType === 'type' || item.type.includes(selectedType.toLowerCase()));

    filteredPokemonByType.forEach((item) => {
        const rendering = createPokemonCard(item);
        cardsContainer.innerHTML += rendering;
    });
}

function applySearchFilter() {
    const searchValue = searchInput.value.toLowerCase().trim();

    const searchFilteredPokemons = filteredPokemons.filter((pokemon) => {
        const pokemonName = pokemon.name.toLowerCase();
        return pokemonName.includes(searchValue);
    });

    renderCardsByType(container, searchFilteredPokemons, selectElement.value.toLowerCase());
}

function filterPokemons() {
    const isBigChecked = bigCheckbox.checked;
    const isSmallChecked = smallCheckbox.checked;
    filteredPokemons = allPokemons.filter((pokemon) => {
        if (isBigChecked && isSmallChecked) {
            return pokemon.height > 50 || pokemon.height < 50;
        }
        if (isBigChecked) {
            return pokemon.height > 50;
        }
        if (isSmallChecked) {
            return pokemon.height < 50;
        }
        return true;
    });

    applySearchFilter();
}

function sortPokemonsByHeight(order, pokemonList) {
    const sortedPokemons = [...pokemonList];
    if (order === 'HighFirst') {
        sortedPokemons.sort((a, b) => b.height - a.height);
    } else {
        sortedPokemons.sort((a, b) => a.height - b.height);
    }
    renderCards(container, sortedPokemons);
}

function applyAllFilters() {
    filterPokemons();

    const selectedType = selectElement.value.toLowerCase();
    const searchValue = searchInput.value.toLowerCase().trim();

    let filteredByType = [...filteredPokemons];

    if (selectedType !== 'type') {
        filteredByType = filteredPokemons.filter((pokemon) => pokemon.type.includes(selectedType));
    }

    const filteredBySearch = filteredByType.filter((pokemon) => {
        const pokemonName = pokemon.name.toLowerCase();
        return pokemonName.includes(searchValue);
    });

    sortPokemonsByHeight(currentSortType, filteredBySearch);
}

function filterByType(event) {
    const selectedType = event.target.value.toLowerCase();
    sortPokemonsByHeight(currentSortType, filteredPokemons);
    renderCardsByType(container, filteredPokemons, selectedType);
    applyAllFilters();
}

function renderByHeight(event) {
    if (event.target === highFirst) {
        currentSortType = 'HighFirst';
    } else if (event.target === lowFirst) {
        currentSortType = 'LowFirst';
    }
    applyAllFilters();
}

function typeSelect() {
    formSelect.parentNode.classList.toggle('active');
}

function fetchData() {
    fetch('https://my-json-server.typicode.com/electrovladyslav/pokemon-json-server/pokemons')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            allPokemons = data;
            filteredPokemons = [...allPokemons];

            renderCards(container, filteredPokemons);
            applyAllFilters();

            spinner.style.display = 'none';
        })
        .catch((error) => {
            console.error('There was a problem fetching data:', error);
            spinner.style.display = 'none';
        });
}

function init() {
    highFirst.addEventListener('change', renderByHeight);
    lowFirst.addEventListener('change', renderByHeight);
    selectElement.addEventListener('change', filterByType);
    applyButton.addEventListener('click', applyAllFilters);
    bigCheckbox.addEventListener('change', applyAllFilters);
    smallCheckbox.addEventListener('change', applyAllFilters);
    searchInput.addEventListener('input', applyAllFilters);
    formSelect.addEventListener('click', typeSelect);
}

fetchData();
init();
