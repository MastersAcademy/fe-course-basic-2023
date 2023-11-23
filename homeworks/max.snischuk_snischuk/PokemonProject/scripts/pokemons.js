function initPokemons() {
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
            height: 28.4,
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
            height: 39.9,
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
            height: 94.8,
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
            height: 79.2,
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
            height: 43.5,
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
            height: 1102.6,
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
            height: 67.4,
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

    const FORM_FILTERS_ELEMENT = document.querySelector('[data-form-filters]');
    const CARDS_CONTAINER_ELEMENT = document.querySelector('[data-cards-container]');

    function createCardElement(pokemon) {
        const { name, ThumbnailImage, height } = pokemon;

        const CARD_TEMPLATE_ELEMENT = document.querySelector('[data-type="card-template"]');
        if (!CARD_TEMPLATE_ELEMENT) return null;
        const CARD_TEMPLATE_CONTENT = CARD_TEMPLATE_ELEMENT.content;

        const CARD_TITLE_ELEMENT = CARD_TEMPLATE_CONTENT.querySelector('[data-card-title]');
        const CARD_IMAGE_ELEMENT = CARD_TEMPLATE_CONTENT.querySelector('[data-card-img]');
        const CARD_HEIGHT_ELEMENT = CARD_TEMPLATE_CONTENT.querySelector('[data-card-height]');

        const heightNumber = height;
        const integerPart = Math.floor(heightNumber);
        const decimalPart = String(heightNumber).includes('.') ? String(heightNumber).split('.')[1] : '0';
        const heightStr = decimalPart !== '0' ? `${integerPart}' ${decimalPart}"` : `${integerPart}'`;

        CARD_HEIGHT_ELEMENT.childNodes[2].textContent = heightStr;
        CARD_TITLE_ELEMENT.textContent = name;
        CARD_IMAGE_ELEMENT.src = ThumbnailImage;

        return CARD_TEMPLATE_ELEMENT.content.cloneNode(true);
    }

    function clearContainer(container) {
        const TEMPLATE_ELEMENT = container.querySelector('[data-type="card-template"]');
        let currentElement = TEMPLATE_ELEMENT.nextElementSibling;

        while (currentElement) {
            const nextElement = currentElement.nextElementSibling;
            container.removeChild(currentElement);
            currentElement = nextElement;
        }
    }

    function renderCards(container, cards) {
        clearContainer(container);

        const FRAGMENT_NODE = new DocumentFragment();

        const renderedCards = cards.map((card) => {
            const pokemonCard = createCardElement(card);
            FRAGMENT_NODE.append(pokemonCard);
            return pokemonCard;
        });

        container.append(FRAGMENT_NODE);
        return renderedCards;
    }

    function filterCards(cards) {
        const isSmallChecked = FORM_FILTERS_ELEMENT.elements.small.checked;
        const isBigChecked = FORM_FILTERS_ELEMENT.elements.big.checked;

        const filteredCards = cards.filter((card) => {
            switch (true) {
                case isSmallChecked && isBigChecked:
                    return card.height <= 50 || card.height >= 100;
                case isSmallChecked:
                    return card.height <= 50;
                case isBigChecked:
                    return card.height >= 100;
                default:
                    return true;
            }
        });
        return filteredCards;
    }

    function checkPokemonsHeightHandler() {
        FORM_FILTERS_ELEMENT.addEventListener('change', (event) => {
            const { target } = event;

            if (target.type === 'checkbox') {
                if ((target.value === 'small' || target.value === 'big')) {
                    const filteredCards = filterCards(pokemons);
                    renderCards(CARDS_CONTAINER_ELEMENT, filteredCards);
                }
            }
        });
    }

    renderCards(CARDS_CONTAINER_ELEMENT, pokemons);
    checkPokemonsHeightHandler();
}

document.addEventListener('DOMContentLoaded', initPokemons);
