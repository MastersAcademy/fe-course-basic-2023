const cardContainer = document.querySelector('div[data-cards]');
const numberOfCards = parseInt(cardContainer.getAttribute('data-cards'), 10);
const apiUrl = 'https://my-json-server.typicode.com/electrovladyslav/pokemon-json-server/pokemons';

const loader = document.getElementById('loader');

function toggleLoader(show) {
    if (show) {
        loader.style.display = 'block';
    } else {
        loader.style.display = 'none';
    }
}

async function fetchPokemonData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem fetching data:', error);
        return null;
    }
}

function createCardElement(pokemon) {
    const cardTemplate = document.querySelector('[data-cardTemplate]');
    const cardClone = cardTemplate.content.cloneNode(true);
    const nameElement = cardClone.querySelector('[data-cardName]');
    nameElement.textContent = pokemon.name;

    const heightElement = cardClone.querySelector('[data-cardHeight]');
    const imgElement = cardClone.querySelector('[data-cardImg]');

    const { height, ThumbnailImage } = pokemon;

    heightElement.textContent = height;
    heightElement.dataset.cardHeight = height;

    imgElement.textContent = ThumbnailImage;
    imgElement.setAttribute('src', ThumbnailImage);

    return cardClone;
}

async function renderPokemonCards() {
    toggleLoader(true);
    const pokemonData = await fetchPokemonData();
    if (pokemonData) {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < numberOfCards; i++) {
            const cardTemplate = createCardElement(pokemonData[i % pokemonData.length]);
            fragment.appendChild(cardTemplate);
        }
        cardContainer.appendChild(fragment);
    } else {
        console.log('Error');
    }
    toggleLoader(false);
}

document.addEventListener('DOMContentLoaded', renderPokemonCards);

function filterPokemonCards() {
    const bigPokemonCheckbox = document.getElementById('bigPokemon');
    const smallPokemonCheckbox = document.getElementById('smallPokemon');
    const cardElements = document.querySelectorAll('.card');

    let showAll = true;

    if (bigPokemonCheckbox.checked || smallPokemonCheckbox.checked) {
        showAll = false;
    }

    cardElements.forEach((card) => {
        const cardHeight = parseInt(card.querySelector('[data-cardHeight]').textContent, 10);

        if (showAll) {
            card.classList.add('displayOn');
            card.classList.remove('displayOff');
        } else {
            const showBigPokemon = bigPokemonCheckbox.checked && cardHeight > 100;
            const showSmallPokemon = smallPokemonCheckbox.checked && cardHeight < 50;

            if (showBigPokemon || showSmallPokemon) {
                card.classList.add('displayOn');
                card.classList.remove('displayOff');
            } else {
                card.classList.add('displayOff');
                card.classList.remove('displayOn');
            }
        }
    });
}

function init() {
    const bigPokemon = document.getElementById('bigPokemon');
    const smallPokemon = document.getElementById('smallPokemon');

    function showAllCards() {
        cardContainer.innerHTML = '';
    }
    bigPokemon.addEventListener('change', () => {
    });
    smallPokemon.addEventListener('change', () => {
    });
    showAllCards();
}

const bigPokemonCheckbox = document.getElementById('bigPokemon');
const smallPokemonCheckbox = document.getElementById('smallPokemon');

document.addEventListener('DOMContentLoaded', init);

bigPokemonCheckbox.addEventListener('change', filterPokemonCards);
smallPokemonCheckbox.addEventListener('change', filterPokemonCards);

filterPokemonCards();
