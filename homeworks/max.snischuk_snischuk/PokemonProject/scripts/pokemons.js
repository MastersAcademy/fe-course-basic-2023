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

        const heightNumber = height;
        const integerPart = Math.floor(heightNumber);
        const decimalPart = String(heightNumber).includes('.') ? String(heightNumber).split('.')[1] : '0';
        const heightStr = decimalPart !== '0' ? `${integerPart}' ${decimalPart}"` : `${integerPart}'`;

        const cardTemplateStr = `
            <li class="pokemons__card-item card-pokemon">
                <div class="card-pokemon__header">
                    <img class="card-pokemon__image" src="${ThumbnailImage}" alt="urshifu">
                    <h3 class="card-pokemon__title">${name}</h3>
                </div>
                <ul class="card-pokemon__body">
                    <li class="card-pokemon__text">
                        <span class="card-pokemon__text--bold">Height: </span>${heightStr}
                    </li>
                    <li class="card-pokemon__text">
                        <span class="card-pokemon__text--bold">Weight: </span>231.5 lbs
                    </li>
                    <li class="card-pokemon__text">
                        <span class="card-pokemon__text--bold">Number: </span>0002
                    </li>
                    <li class="card-pokemon__text">
                        <span class="card-pokemon__text--bold">Type: </span>
                        <button class="card-pokemon__btn card-pokemon__btn--yellow"
                            type="button">Fighting</button>
                        <button class="card-pokemon__btn card-pokemon__btn--red"
                            type="button">Dark</button>
                    </li>
                    <li class="card-pokemon__text">
                        <span class="card-pokemon__text--bold">Weaknesses: </span>
                        <button class="card-pokemon__btn card-pokemon__btn--pink"
                            type="button">Fairy</button>
                        <button class="card-pokemon__btn card-pokemon__btn--purple"
                            type="button">Flying</button>
                    </li>
                </ul>
            </li>
        `;

        return cardTemplateStr;
    }

    function clearContainer(container) {
        if (!container) return;
        container.innerHTML = '';
    }

    function renderCards(container, cards) {
        clearContainer(container);

        const renderedCards = cards.map((card) => {
            const pokemonCard = createCardElement(card);
            container.innerHTML += pokemonCard;
            return pokemonCard;
        });

        return renderedCards;
    }

    function filterByHeight(cards) {
        const isSmallChecked = FORM_FILTERS_ELEMENT.elements.small.checked;
        const isBigChecked = FORM_FILTERS_ELEMENT.elements.big.checked;

        const filteredByHeight = cards.filter((card) => {
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
        return filteredByHeight;
    }

    function onChangePokemonsHeightHandler(event) {
        const { target } = event;

        if (target.type === 'checkbox') {
            if ((target.value === 'small' || target.value === 'big')) {
                const filteredCards = filterByHeight(pokemons);
                renderCards(CARDS_CONTAINER_ELEMENT, filteredCards);
            }
        }
    }

    renderCards(CARDS_CONTAINER_ELEMENT, pokemons);
    FORM_FILTERS_ELEMENT.addEventListener('change', onChangePokemonsHeightHandler);
}

document.addEventListener('DOMContentLoaded', initPokemons);
