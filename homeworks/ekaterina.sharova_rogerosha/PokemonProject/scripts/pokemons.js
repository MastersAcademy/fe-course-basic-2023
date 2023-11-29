function createCardElement(pokemon) {
    /**
     * @type {HTMLTemplateElement}
     * */
    const cardTemplateElement = document.querySelector('[data-type="card-template"]').content.cloneNode(true);

    const cardTitleElement = cardTemplateElement.querySelector('[data-card-title]');
    const cardImageElement = cardTemplateElement.querySelector('[data-card-image]');
    const cardHeightElement = cardTemplateElement.querySelector('[data-card-height]');
    const cardWeightElement = cardTemplateElement.querySelector('[data-card-weight]');
    const cardNumberElement = cardTemplateElement.querySelector('[data-card-number]');
    const cardTypesElement = cardTemplateElement.querySelector('[data-card-types]');
    const cardWeaknessesElement = cardTemplateElement.querySelector('[data-card-weaknesses]');

    cardTitleElement.innerText = pokemon.name;

    cardImageElement.src = pokemon.ThumbnailImage;
    cardImageElement.alt = pokemon.ThumbnailAltText;

    cardHeightElement.innerText = pokemon.height;
    cardWeightElement.innerText = pokemon.weight;
    cardNumberElement.innerText = pokemon.number;

    pokemon.type.forEach((type) => {
        const cardTypeTemplateElement = document.querySelector('[data-type="card-type-template"]').content.cloneNode(true);
        const cardTypeElement = cardTypeTemplateElement.querySelector('[data-card-type]');
        cardTypeElement.innerText = type;

        cardTypesElement.append(cardTypeTemplateElement);
    });

    pokemon.weakness.forEach((weakness) => {
        const cardWeaknessTemplateElement = document.querySelector('[data-type="card-weakness-template"]').content.cloneNode(true);
        const cardWeaknessElement = cardWeaknessTemplateElement.querySelector('[data-card-weakness]');
        cardWeaknessElement.innerText = weakness;

        cardWeaknessesElement.append(cardWeaknessTemplateElement);
    });

    return cardTemplateElement;
}

function renderCards(container, pokemons) {
    container.innerHTML = '';
    const fragment = new DocumentFragment();

    pokemons.forEach((pokemon) => {
        fragment.append(createCardElement(pokemon));
    });

    container.append(fragment);
}

// pokemons-mock.js
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

function init() {
    const cardListElement = document.querySelector('[data-card-list]');
    const sizeFormElement = document.querySelector('[data-size-form]');

    renderCards(cardListElement, pokemons);

    sizeFormElement.addEventListener('change', () => {
        const selectedSizes = Array.from(sizeFormElement.size)
            .filter((element) => element.checked)
            .map((element) => ({ value: element.value, type: element.id }));

        const filteredPokemons = selectedSizes.length === 0 ? pokemons : pokemons
            .filter((pokemon) => selectedSizes.some((size) => {
                if (size.type === 'big') {
                    return pokemon.height > size.value;
                }

                if (size.type === 'small') {
                    return pokemon.height < size.value;
                }

                return true;
            }));

        renderCards(cardListElement, filteredPokemons);

        console.log(selectedSizes);
    });
}

init();
