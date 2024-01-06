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

function getPokemons() {
    const loadingElement = document.querySelector('[data-card-loading]');
    loadingElement.classList.remove('hide');

    return fetch('https://my-json-server.typicode.com/electrovladyslav/pokemon-json-server/pokemons')
        .then((response) => {
            loadingElement.classList.add('hide');
            return response.json();
        })
        .then((pokemons) => pokemons.slice(0, 50));
}

async function init() {
    const cardListElement = document.querySelector('[data-card-list]');
    const sizeFormElement = document.querySelector('[data-size-form]');

    const pokemons = await getPokemons();

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
    });
}

init();
