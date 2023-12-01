// card create from API data
async function createCardElement(game) {
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

        let descriptionVisible = false;
        descriptionElement.addEventListener('click', () => {
            if (descriptionVisible) {
                descriptionElement.innerText = `${game.short_description.slice(0, maxDescriptionLength)}...`;
            } else {
                descriptionElement.innerText = game.short_description;
            }

            descriptionVisible = !descriptionVisible;
        });
    } else {
        descriptionElement.innerText = game.short_description;
    }

    const descriptionList = cardCopy.querySelector('[data-type="short-description"]');
    descriptionList.innerHTML = `<li data-type="genre"><b>Genre:</b> ${game.genre}</li>
                                <li data-type="platform"><b>Platform:</b> ${game.platform}</li>
                                <li><b>Publisher:</b> ${game.publisher}</li>
                                <li><b>Developer:</b> ${game.developer}</li>
                                <li data-type="release_date"><b>Release date:</b> ${game.release_date}</li>`;

    return cardCopy;
}

// fetch API
const apiUrl = 'https://mmo-games.p.rapidapi.com/games';
const ulContainer = document.querySelector('[data-type="cards-container"]');

async function renderCards(container) {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
        },
    };
    try {
        const response = await fetch(apiUrl, options);
        if (response.ok) {
            const gamesList = await response.json();

            const gamesJSON = Array.isArray(gamesList) ? gamesList : JSON.stringify(gamesList);

            const limitedGames = gamesJSON.slice(0, 50);
            limitedGames.forEach(async (game) => {
                const cardElement = await createCardElement(game);
                container.appendChild(cardElement);
            });

            container.appendChild(container);
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching games:', error);
    }
}

renderCards(ulContainer);

// filtration functions
function extractReleaseYears() {
    const gameDates = document.body.querySelectorAll('[data-type="release_date"]');
    return Array.from(gameDates).map((dateElement) => {
        const releaseDateText = dateElement.innerText.replace('Release date:', '').trim();
        const releaseDate = new Date(releaseDateText);
        return releaseDate.getFullYear();
    });
}

function isCardWithinYearRange(year, checkNew, checkOld) {
    if (!checkNew && !checkOld) {
        return true;
    }

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

            const isNoFilterSelected = !checkNew.checked && !checkOld.checked && selectedGenreNow === 'genre' && valueSearch.value.trim() === '';

            if (isNoFilterSelected) {
                return updateCardVisibility(gameCard, true);
            }

            const isYearCondition = isCardWithinYearRange(year, checkNew.checked, checkOld.checked);
            const isGenreCondition = isGenreMatching(gameCard, selectedGenreNow);
            const isSearchCondition = isSearchMatching(gameCard, valueSearch.value);
            const shouldDisplay = isYearCondition && isGenreCondition && isSearchCondition;

            return updateCardVisibility(gameCard, shouldDisplay);
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
