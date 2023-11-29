import pokemons from './pokemonsArray.js';

const container = '.pokemons__cards';
const bigCheckbox = document.getElementById('big');
const smallCheckbox = document.getElementById('small');
const applyButton = document.querySelector('.filters__search--button');
const searchInput = document.getElementById('search');
const selectElement = document.getElementById('type');

let filteredPokemons = [...pokemons];

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
        description,
    } = pokemon;

    const slicer = description.length > 100 ? `${description.slice(0, 100)}...` : description;

    const rendering = `
        <div class="pokemons__cards-item">
            <div class="card__pokemon">
                <img class="card__pokemon-img" src="${ThumbnailImage}" alt="${ThumbnailAltText}">
                <h3 class="card__pokemon-name">
                    <strong>${name}</strong>
                    <span>${slicer}</span>
                </h3>
            </div>

            <div class="card__characteristics">
                <div class="card__characteristics-abilities">
                    <strong>Abilities:</strong>
                    <span>${abilities}"</span>
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
        const pokemonDescription = pokemon.description.toLowerCase();
        return pokemonName.includes(searchValue) || pokemonDescription.includes(searchValue);
    });

    renderCardsByType(container, searchFilteredPokemons, selectElement.value.toLowerCase());
}

function filterPokemons() {
    const isBigChecked = bigCheckbox.checked;
    const isSmallChecked = smallCheckbox.checked;

    filteredPokemons = pokemons.filter((pokemon) => {
        if (isBigChecked && isSmallChecked) {
            return pokemon.height > 100 || pokemon.height < 50;
        }
        if (isBigChecked) {
            return pokemon.height > 100;
        }
        if (isSmallChecked) {
            return pokemon.height < 50;
        }
        return true;
    });

    applySearchFilter();
}

function applyAllFilters() {
    filterPokemons();

    const selectedType = selectElement.value.toLowerCase();
    const searchValue = searchInput.value.toLowerCase().trim();

    const filteredByType = filteredPokemons.filter((pokemon) => selectedType === 'type' || pokemon.type.includes(selectedType));

    const filteredBySearch = filteredByType.filter((pokemon) => {
        const pokemonName = pokemon.name.toLowerCase();
        const pokemonDescription = pokemon.description.toLowerCase();
        return pokemonName.includes(searchValue) || pokemonDescription.includes(searchValue);
    });

    renderCards(container, filteredBySearch);
}

function filterByType(event) {
    const selectedType = event.target.value.toLowerCase();
    renderCardsByType(container, filteredPokemons, selectedType);
}

selectElement.addEventListener('change', filterByType);
applyButton.addEventListener('click', applyAllFilters);
bigCheckbox.addEventListener('change', applyAllFilters);
smallCheckbox.addEventListener('change', applyAllFilters);
searchInput.addEventListener('input', applyAllFilters);

renderCards(container, pokemons);
applyAllFilters();
