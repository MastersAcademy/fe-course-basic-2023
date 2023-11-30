document.addEventListener('DOMContentLoaded', () => {
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
                'flying',
            ],
        },
    ];

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

    function renderCards(container, pokemon) {
        const cardsContainer = document.querySelector(container);
        if (!cardsContainer) return;
        cardsContainer.innerHTML = '';
        pokemon.forEach((item) => {
            const rendering = createPokemonCard(item);
            cardsContainer.innerHTML += rendering;
        });
    }

    const container = '.pokemons__cards';
    const bigCheckbox = document.getElementById('big');
    const smallCheckbox = document.getElementById('small');
    const applyButton = document.querySelector('.filters__search--button');
    const searchInput = document.getElementById('search');

    function applySearchFilter() {
        const searchName = searchInput.value.toLowerCase();

        const searchFilteredPokemons = filteredPokemons.filter((pokemon) => {
            const pokemonName = pokemon.name.toLowerCase();
            return pokemonName.includes(searchName);
        });

        renderCards(container, searchFilteredPokemons);
    }

    function filterPokemons() {
        const isBigChecked = bigCheckbox.checked;
        const isSmallChecked = smallCheckbox.checked;

        filteredPokemons = pokemons.filter((pokemon) => {
            if (isBigChecked && isSmallChecked) {
                return pokemon.height >= 50 && pokemon.height <= 100;
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

    function applyFilters() {
        filterPokemons();
    }

    applyButton.addEventListener('click', applyFilters);
    bigCheckbox.addEventListener('change', applyFilters);
    smallCheckbox.addEventListener('change', applyFilters);
    searchInput.addEventListener('input', applySearchFilter);

    renderCards(container, pokemons);
});
