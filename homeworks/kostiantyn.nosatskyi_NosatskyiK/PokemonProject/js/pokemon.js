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

const cardContainer = document.querySelector('div[data-cards]');
const numberOfCards = parseInt(cardContainer.getAttribute('data-cards'), 10);

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

function renderCards(container, cardsAmount, pokemonValue) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < cardsAmount; i++) {
        const cardTemplate = createCardElement(pokemonValue[i % pokemonValue.length]);
        fragment.appendChild(cardTemplate);
    }

    container.appendChild(fragment);
}

function init() {
    const bigPokemon = document.getElementById('bigPokemon');
    const smallPokemon = document.getElementById('smallPokemon');

    function showAllCards() {
        cardContainer.innerHTML = '';

        renderCards(cardContainer, numberOfCards, pokemons);
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

renderCards(cardContainer, numberOfCards, pokemons);
filterPokemonCards();
