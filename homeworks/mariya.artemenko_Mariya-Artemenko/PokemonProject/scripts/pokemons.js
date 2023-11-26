const pokemons = [
    {
        abilities: [
            'Overgrow',
        ],
        detailPageURL: '/us/pokedex/bulbasaur',
        weight: 15.2,
        weakness: [
            'Fire',
            'Psychic',
            'Flying',
            'Ice',
        ],
        number: '0001',
        height: 28.0,
        collectibles_slug: 'bulbasaur',
        featured: 'true',
        slug: 'bulbasaur',
        name: 'Bulbasaur',
        ThumbnailAltText: 'Bulbasaur',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
        id: 1,
        type: [
            'grass',
            'poison',
        ],
    },
    {
        abilities: [
            'Overgrow',
        ],
        detailPageURL: '/us/pokedex/ivysaur',
        weight: 28.7,
        weakness: [
            'Fire',
            'Psychic',
            'Flying',
            'Ice',
        ],
        number: '0002',
        height: 39.0,
        collectibles_slug: 'ivysaur',
        featured: 'true',
        slug: 'ivysaur',
        name: 'Ivysaur',
        ThumbnailAltText: 'Ivysaur',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
        id: 2,
        type: [
            'grass',
            'poison',
        ],
    },
    {
        abilities: [
            'Overgrow',
        ],
        detailPageURL: '/us/pokedex/venusaur',
        weight: 9999.0,
        weakness: [
            'Fire',
            'Psychic',
            'Flying',
            'Ice',
        ],
        number: '0003',
        height: 945.0,
        collectibles_slug: 'venusaur',
        featured: 'true',
        slug: 'venusaur',
        name: 'Venusaur',
        ThumbnailAltText: 'Venusaur',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
        id: 3,
        type: [
            'grass',
            'poison',
        ],
    },
    {
        abilities: [
            'Thick Fat',
        ],
        detailPageURL: '/us/pokedex/venusaur',
        weight: 342.8,
        weakness: [
            'Fire',
            'Psychic',
            'Flying',
            'Ice',
        ],
        number: '0003',
        height: 94.0,
        collectibles_slug: 'venusaur',
        featured: 'true',
        slug: 'venusaur',
        name: 'Venusaur',
        ThumbnailAltText: 'Venusaur',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
        id: 3,
        type: [
            'grass',
            'poison',
        ],
    },
    {
        abilities: [
            'Overgrow',
        ],
        detailPageURL: '/us/pokedex/venusaur',
        weight: 220.5,
        weakness: [
            'Fire',
            'Psychic',
            'Flying',
            'Ice',
        ],
        number: '0003',
        height: 79.0,
        collectibles_slug: 'venusaur',
        featured: 'true',
        slug: 'venusaur',
        name: 'Venusaur',
        ThumbnailAltText: 'Venusaur',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
        id: 3,
        type: [
            'grass',
            'poison',
        ],
    },
    {
        abilities: [
            'Blaze',
        ],
        detailPageURL: '/us/pokedex/charmander',
        weight: 18.7,
        weakness: [
            'Water',
            'Ground',
            'Rock',
        ],
        number: '0004',
        height: 24.0,
        collectibles_slug: 'charmander',
        featured: 'true',
        slug: 'charmander',
        name: 'Charmander',
        ThumbnailAltText: 'Charmander',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
        id: 4,
        type: [
            'fire',
        ],
    },
    {
        abilities: [
            'Blaze',
        ],
        detailPageURL: '/us/pokedex/charmeleon',
        weight: 41.9,
        weakness: [
            'Water',
            'Ground',
            'Rock',
        ],
        number: '0005',
        height: 43.0,
        collectibles_slug: 'charmeleon',
        featured: 'true',
        slug: 'charmeleon',
        name: 'Charmeleon',
        ThumbnailAltText: 'Charmeleon',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
        id: 5,
        type: [
            'fire',
        ],
    },
    {
        abilities: [
            'Blaze',
        ],
        detailPageURL: '/us/pokedex/charizard',
        weight: 9999.0,
        weakness: [
            'Water',
            'Electric',
            'Rock',
        ],
        number: '0006',
        height: 1102.0,
        collectibles_slug: 'charizard',
        featured: 'true',
        slug: 'charizard',
        name: 'Charizard',
        ThumbnailAltText: 'Charizard',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
        id: 6,
        type: [
            'fire',
            'flying',
        ],
    },
    {
        abilities: [
            'Drought',
        ],
        detailPageURL: '/us/pokedex/charizard',
        weight: 221.6,
        weakness: [
            'Water',
            'Electric',
            'Rock',
        ],
        number: '0006',
        height: 67.0,
        collectibles_slug: 'charizard',
        featured: 'true',
        slug: 'charizard',
        name: 'Charizard',
        ThumbnailAltText: 'Charizard',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
        id: 6,
        type: [
            'fire',
            'flying',
        ],
    },
    {
        abilities: [
            'Tough Claws',
        ],
        detailPageURL: '/us/pokedex/charizard',
        weight: 243.6,
        weakness: [
            'Ground',
            'Rock',
            'Dragon',
        ],
        number: '0006',
        height: 67.0,
        collectibles_slug: 'charizard',
        featured: 'true',
        slug: 'charizard',
        name: 'Charizard',
        ThumbnailAltText: 'Charizard',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
        id: 6,
        type: [
            'fire',
            'dragon',
        ],
    },
];

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
