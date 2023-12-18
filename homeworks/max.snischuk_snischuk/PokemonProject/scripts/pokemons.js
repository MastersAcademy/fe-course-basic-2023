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
            featured: 'false',
            slug: 'bulbasaur',
            name: 'Bulbasaur',
            ThumbnailAltText: 'Bulbasaur',
            ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
            id: 1,
            type: [
                'Ground',
                'Poison',
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
            featured: 'false',
            slug: 'ivysaur',
            name: 'Ivysaur',
            ThumbnailAltText: 'Ivysaur',
            ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
            id: 2,
            type: [
                'Ground',
                'Poison',
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
            featured: 'false',
            slug: 'venusaur',
            name: 'Venusaur',
            ThumbnailAltText: 'Venusaur',
            ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
            id: 3,
            type: [
                'Ground',
                'Poison',
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
            featured: 'false',
            slug: 'venusaur',
            name: 'Venusaur',
            ThumbnailAltText: 'Venusaur',
            ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
            id: 3,
            type: [
                'Ground',
                'Poison',
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
            featured: 'false',
            slug: 'venusaur',
            name: 'Venusaur',
            ThumbnailAltText: 'Venusaur',
            ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
            id: 3,
            type: [
                'Ground',
                'Poison',
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
                'Fire',
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
                'Fire',
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
            featured: 'false',
            slug: 'charizard',
            name: 'Charizard',
            ThumbnailAltText: 'Charizard',
            ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
            id: 6,
            type: [
                'Fire',
                'Flying',
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
                'Fire',
                'Flying',
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
            featured: 'false',
            slug: 'charizard',
            name: 'Charizard',
            ThumbnailAltText: 'Charizard',
            ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
            id: 6,
            type: [
                'Fire',
                'Dragon',
            ],
        },
    ];

    let filteredCards = [...pokemons];

    const FORM_FILTERS_ELEMENT = document.querySelector('[data-form-filters]');
    const TEXT_INPUT_ELEMENT = FORM_FILTERS_ELEMENT.elements['search-query'];
    const CARDS_CONTAINER_ELEMENT = document.querySelector('[data-cards-container]');

    function createCardElement(pokemon) {
        const {
            name,
            ThumbnailImage,
            ThumbnailAltText,
            height,
            weight,
            number,
            type,
            weakness,
        } = pokemon;

        const heightNumber = height;
        const integerPart = Math.floor(heightNumber);
        const decimalPart = String(heightNumber).includes('.') ? String(heightNumber).split('.')[1] : '0';
        const heightStr = decimalPart !== '0' ? `${integerPart}' ${decimalPart}"` : `${integerPart}'`;

        const typesButtons = type
            .map((subtype) => `<button class="card-pokemon__btn card-pokemon__btn--${subtype.toLowerCase()}" type="button">${subtype}</button>`)
            .join('');

        const weaknessesButtons = weakness
            .map((subtype) => `<button class="card-pokemon__btn card-pokemon__btn--${subtype.toLowerCase()}" type="button">${subtype}</button>`)
            .join('');

        const cardTemplateStr = `
            <li class="pokemons__card-item card-pokemon">
                <div class="card-pokemon__header">
                    <img class="card-pokemon__image" src="${ThumbnailImage}" alt="${ThumbnailAltText}">
                    <h3 class="card-pokemon__title">${name}</h3>
                </div>
                <ul class="card-pokemon__body">
                    <li class="card-pokemon__text">
                        <span class="card-pokemon__text--bold">Height: </span>${heightStr}
                    </li>
                    <li class="card-pokemon__text">
                        <span class="card-pokemon__text--bold">Weight: </span>${weight} lbs
                    </li>
                    <li class="card-pokemon__text">
                        <span class="card-pokemon__text--bold">Number: </span>${number}
                    </li>
                    <li class="card-pokemon__text">
                        <span class="card-pokemon__text--bold">Type: </span>
                        ${typesButtons}
                    </li>
                    <li class="card-pokemon__text">
                        <span class="card-pokemon__text--bold">Weaknesses: </span>
                        ${weaknessesButtons}
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

        return cards.filter((card) => {
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
    }

    function filterByFavorites(cards) {
        const isFavoritesChecked = FORM_FILTERS_ELEMENT.elements.favorites.checked;
        return cards.filter((card) => (isFavoritesChecked ? card.featured === 'true' : false));
    }

    function filterByPokemonsType(cards) {
        const selectedPokemonTypeValue = FORM_FILTERS_ELEMENT.elements['pokemons-types'].value;
        return cards.filter((card) => card.type.includes(selectedPokemonTypeValue));
    }

    function filterBySearchQuery(cards) {
        const inputValue = FORM_FILTERS_ELEMENT.elements['search-query'].value.toLowerCase();
        return cards.filter((card) => card.name.toLowerCase().includes(inputValue));
    }

    function updateFilteredCards() {
        filteredCards = [...pokemons];

        if (FORM_FILTERS_ELEMENT.elements.small.checked
            || FORM_FILTERS_ELEMENT.elements.big.checked) {
            filteredCards = filterByHeight(filteredCards);
        }

        if (FORM_FILTERS_ELEMENT.elements.favorites.checked) {
            filteredCards = filterByFavorites(filteredCards);
        }

        if (FORM_FILTERS_ELEMENT.elements['pokemons-types'].value) {
            filteredCards = filterByPokemonsType(filteredCards);
        }

        if (FORM_FILTERS_ELEMENT.elements['search-query'].value) {
            filteredCards = filterBySearchQuery(filteredCards);
        }

        return filteredCards;
    }

    function onChangeFiltersHandler() {
        const updatedFilteredCards = updateFilteredCards();
        renderCards(CARDS_CONTAINER_ELEMENT, updatedFilteredCards);
    }

    function onInputSearchHandler(event) {
        let updatedFilteredCards = updateFilteredCards();
        const inputValue = event.target.value.toLowerCase();

        updatedFilteredCards = filteredCards.filter((pokemon) => pokemon.name
            .toLowerCase()
            .includes(inputValue));

        renderCards(CARDS_CONTAINER_ELEMENT, updatedFilteredCards);
    }

    function onSubmitFiltersHandler(event) {
        event.preventDefault();
        onChangeFiltersHandler();
    }

    renderCards(CARDS_CONTAINER_ELEMENT, pokemons);
    TEXT_INPUT_ELEMENT.addEventListener('input', onInputSearchHandler);
    FORM_FILTERS_ELEMENT.addEventListener('change', onChangeFiltersHandler);
    FORM_FILTERS_ELEMENT.addEventListener('submit', onSubmitFiltersHandler);
}

document.addEventListener('DOMContentLoaded', initPokemons);
