let pokemons = [];
const sizePokemonBig = document.querySelector('[data-filter="big"]');
const sizePokemonSmall = document.querySelector('[data-filter="small"]');

function createCardElement(pokemon) {
    const cardTemplate = document.querySelector('[data-type="card-template"]');
    const cardImage = cardTemplate.content.querySelector('[data-card-img]');
    const pokemonName = cardTemplate.content.querySelector('[data-card-name]');
    const pokemonHeight = cardTemplate.content.querySelector('[data-card-height]');
    // console.log(cardImage);
    cardImage.setAttribute('src', pokemon.ThumbnailImage);
    pokemonName.textContent = pokemon.name;
    pokemonHeight.textContent = pokemon.height;
    return cardTemplate.content.cloneNode(true);
}

const mainElement = document.querySelector('[data-type="main"]');
function renderCards(container, cardsAmount) {
    for (let i = 0; i < cardsAmount.length; i++) {
        const content = createCardElement(cardsAmount[i]);
        container.appendChild(content);
    }
}

function hiddenLoader() {
    const loader = document.querySelector('[data-loader]');
    loader.style.display = 'none';
}

async function getPokemons() {
    try {
        const apiUrl = 'https://my-json-server.typicode.com/electrovladyslav/pokemon-json-server/pokemons';
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
        };

        const response = await fetch(apiUrl, options);
        pokemons = await response.json();
        renderCards(mainElement, pokemons);
    } catch (error) {
        console.error('GET error:', error);
    } finally {
        hiddenLoader();
    }
}

setTimeout(() => {
    getPokemons();
}, 2000);

function resetfiletrs() {
    while (mainElement.firstChild) {
        mainElement.removeChild(mainElement.firstChild);
    }
}

function showBigPokemons() {
    resetfiletrs();
    const bigPokemons = [];
    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].height > 100) {
            bigPokemons.push(pokemons[i]);
        }
    }
    if (sizePokemonBig.checked) {
        renderCards(mainElement, bigPokemons);
    } else {
        renderCards(mainElement, pokemons);
    }
}

function showSmallPokemons() {
    resetfiletrs();
    const smallPokemons = [];
    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].height < 50) {
            smallPokemons.push(pokemons[i]);
        }
    }
    if (sizePokemonSmall.checked) {
        renderCards(mainElement, smallPokemons);
    } else {
        renderCards(mainElement, pokemons);
    }
}

function showMixedPokemons() {
    if (sizePokemonBig.checked && sizePokemonSmall.checked) {
        resetfiletrs();
        const filteredPokemons = [];
        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].height > 100 || pokemons[i].height < 50) {
                filteredPokemons.push(pokemons[i]);
            }
        }
        renderCards(mainElement, filteredPokemons);
    } else if (sizePokemonBig.checked) {
        showBigPokemons();
    } else {
        showSmallPokemons();
    }
}
showMixedPokemons();

function init() {
    sizePokemonBig.setAttribute('onchange', 'showMixedPokemons()');
    sizePokemonSmall.setAttribute('onchange', 'showMixedPokemons()');
    renderCards(mainElement, pokemons);
}

window.onload = init();
