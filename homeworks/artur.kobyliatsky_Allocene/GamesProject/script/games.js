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

// filtration functions
function extractReleaseYears() {
    const gameDates = document.body.querySelectorAll('[data-type="release_date"]');
    return Array.from(gameDates).map((dateElement) => {
        const releaseDateText = dateElement.innerText.replace('Release date:', '').trim();
        const releaseDate = new Date(releaseDateText);
        return releaseDate.getFullYear();
    });
}

function isCardWithinYearRange(year, checkNew = false, checkOld = false) {
    const isNewCondition = year >= 2020 && checkNew;
    const isOldCondition = year <= 2010 && checkOld;
    return isNewCondition || isOldCondition;
}

function isGenreMatching(gameCard, selectedGenreNow) {
    const gameGenreElement = gameCard.querySelector('[data-type="genre"]');
    const gameGenre = gameGenreElement.textContent.replace('Genre:', ' ').trim().toLowerCase();
    return selectedGenreNow === 'genre' || selectedGenreNow === 'allgames' || gameGenre === selectedGenreNow;
}

function isSearchMatching(gameCard, valueSearch) {
    const cardTitle = gameCard.querySelector('[data-type="title"]').innerText.toLowerCase();
    const cardDescription = gameCard.querySelector('[data-type="description"]').innerText.toLowerCase();
    const searchTerm = valueSearch.toLowerCase().trim();
    return valueSearch === '' || cardTitle.includes(searchTerm) || cardDescription.includes(searchTerm);
}

function updateCardVisibility(gameCard, shouldDisplay) {
    gameCard.style.display = shouldDisplay ? 'block' : 'none';
}

function updateNoResultsDisplay(gameCardElements, noResultsElement) {
    const hasResults = Array.from(gameCardElements).some((cardElement) => cardElement.style.display === 'block');
    noResultsElement.style.display = hasResults ? 'none' : 'block';
    noResultsElement.innerText = hasResults ? '' : 'No results!';
}

function handleFilters() {
    const checkNew = document.querySelector('[data-type="check-new"]');
    const checkOld = document.querySelector('[data-type="check-old"]');
    const selectElement = document.getElementById('genre');
    const valueSearch = document.querySelector('[data-type="search"]');
    const gameCardElements = document.body.querySelectorAll('.game__cod2');
    const noResultsElement = document.querySelector('[data-type="text-h2"]');

    let selectedGenreNow = selectElement.value;
    const gameDatesArray = extractReleaseYears();

    const updateCardsDisplay = () => {
        gameCardElements.forEach((gameCard, index) => {
            const year = gameDatesArray[index];

            const isNewCondition = isCardWithinYearRange(year, checkNew.checked, false);
            const isOldCondition = isCardWithinYearRange(year, false, checkOld.checked);
            const isGenreCondition = isGenreMatching(gameCard, selectedGenreNow);
            const isSearchCondition = isSearchMatching(gameCard, valueSearch.value);

            const isNoFilterSelected = !checkNew.checked && !checkOld.checked && selectedGenreNow === 'genre' && valueSearch.value.trim() === '';

            const shouldDisplay = (isNewCondition || isOldCondition || !gameCard.style.display !== 'none' || isNoFilterSelected)
            && isGenreCondition && isSearchCondition;

            updateCardVisibility(gameCard, shouldDisplay);
        });

        updateNoResultsDisplay(gameCardElements, noResultsElement);
    };

    checkNew.addEventListener('click', updateCardsDisplay);
    checkOld.addEventListener('click', updateCardsDisplay);
    selectElement.addEventListener('change', () => {
        selectedGenreNow = selectElement.value;
        updateCardsDisplay();
    });
    valueSearch.addEventListener('input', updateCardsDisplay);
}

handleFilters();
