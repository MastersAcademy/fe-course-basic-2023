import games from './games-mock.js';

// card create from mock
function createCardElement(game) {
    const template = document.querySelector('template[data-type="card-template"]');

    const cardCopy = document.importNode(template.content, true);

    const imageElement = cardCopy.querySelector('[data-type="image"] img');
    imageElement.src = game.thumbnail;

    cardCopy.querySelector('[data-type="title"]').innerText = game.title;

    const descriptionElement = cardCopy.querySelector('[data-type="description"]');
    const maxDescriptionLength = 54;
    if (game.short_description.length > maxDescriptionLength) {
        descriptionElement.innerText = `${game.short_description.slice(0, maxDescriptionLength)}...`;
        descriptionElement.style.cursor = 'pointer';

        let DescriptionVisible = false;
        descriptionElement.addEventListener('click', () => {
            if (DescriptionVisible) {
                descriptionElement.innerText = `${game.short_description.slice(0, maxDescriptionLength)}...`;
            } else {
                descriptionElement.innerText = game.short_description;
            }

            DescriptionVisible = !DescriptionVisible;
        });
    } else {
        descriptionElement.innerText = game.short_description;
    }

    const descriptionList = cardCopy.querySelector('[data-type="short-description"]');
    descriptionList.innerHTML = `<li data-type = "genre"><b>Genre:</b> ${game.genre}</li>
                                 <li data-type = "platform"><b>Platform:</b> ${game.platform}</li>
                                 <li><b>Publisher:</b> ${game.publisher}</li>
                                 <li><b>Developer:</b> ${game.developer}</li>
                                 <li data-type="release_date"><b>Release date:</b> ${game.release_date}</li>`;

    return cardCopy;
}

// render cards
function renderCards(container, gamesList) {
    const fragment = document.createDocumentFragment();

    gamesList.forEach((game) => {
        const cardElement = createCardElement(game);
        fragment.appendChild(cardElement);
    });

    container.appendChild(fragment);
}

const ulContainer = document.querySelector('[data-type="cards-container"]');

renderCards(ulContainer, games);

// filtration function
function handleFilters() {
    const checkNew = document.querySelector('[data-type="check-new"]');
    const checkOld = document.querySelector('[data-type="check-old"]');
    const selectElement = document.getElementById('genre');
    const valueSearch = document.querySelector('[data-type="search"]');
    const gameCardElements = document.body.querySelectorAll('.game__cod2');
    const noResultsElement = document.querySelector('[data-type="text-h2"]');

    let isNewChecked = false;
    let isOldChecked = false;
    let selectedGenreNow = selectElement.value;

    const gameDates = document.body.querySelectorAll('[data-type="release_date"]');
    const gameDatesArray = Array.from(gameDates).map((dateElement) => {
        const releaseDateText = dateElement.innerText.replace('Release date:', '').trim();
        const releaseDate = new Date(releaseDateText);
        return releaseDate.getFullYear();
    });

    let updateTimeout;

    const updateCardsDisplay = () => {
        clearTimeout(updateTimeout);

        updateTimeout = setTimeout(() => {
            gameCardElements.forEach((gameCard, index) => {
                const gameGenreElement = gameCard.querySelector('[data-type="genre"]');
                const gameGenre = gameGenreElement.textContent.replace('Genre:', ' ').trim().toLowerCase();
                const year = gameDatesArray[index];

                const isGenreVisible = gameCard.style.display !== 'none';
                const isNewCondition = year >= 2020 && isNewChecked;
                const isOldCondition = year <= 2010 && isOldChecked;
                const isGenreCondition = selectedGenreNow === 'genre' || selectedGenreNow === 'allgames' || gameGenre === selectedGenreNow;
                const isSearchCondition = valueSearch.value.toLowerCase() === '' || (gameCard.querySelector('[data-type="title"]').innerText.toLowerCase().includes(valueSearch.value.toLowerCase())
                    || gameCard.querySelector('[data-type="description"]').innerText.toLowerCase().includes(valueSearch.value.toLowerCase()));

                const isNoFilterSelected = !isNewChecked && !isOldChecked && selectedGenreNow === 'genre' && valueSearch.value.trim() === '';

                const shouldDisplay = (isNewCondition || isOldCondition
                    || !isGenreVisible || isNoFilterSelected)
                    && isGenreCondition && isSearchCondition;
                gameCard.style.display = shouldDisplay ? 'block' : 'none';
            });

            const hasResults = Array.from(gameCardElements).some((cardElement) => cardElement.style.display === 'block');
            noResultsElement.style.display = hasResults ? 'none' : 'block';
            noResultsElement.innerText = hasResults ? '' : 'No results!';
        }, 200);
    };

    checkNew.addEventListener('click', () => {
        isNewChecked = !isNewChecked;
        updateCardsDisplay();
    });

    checkOld.addEventListener('click', () => {
        isOldChecked = !isOldChecked;
        updateCardsDisplay();
    });

    selectElement.addEventListener('change', () => {
        selectedGenreNow = selectElement.value;
        updateCardsDisplay();
    });

    valueSearch.addEventListener('input', () => {
        updateCardsDisplay();
    });

    updateCardsDisplay();
}

handleFilters();
