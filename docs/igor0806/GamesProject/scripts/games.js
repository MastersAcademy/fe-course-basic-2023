// games-mock.js
let games = [];
const gameList = document.querySelector('[data-type ="games-list"]');
const loadingCard = document.querySelector('[data-type="loading"]');

function showLoading() {
    loadingCard.style.display = 'flex';
}

function noneLoading() {
    loadingCard.style.display = 'none';
}

function createCardElement(game) {
    const template = document.querySelector('[data-type= "card-template"]');
    const cardClone = document.importNode(template.content, true);

    const cardTitle = cardClone.querySelector('[data-card-title]');
    const cardImage = cardClone.querySelector('[data-card-img]');

    const cardDescription = cardClone.querySelector('[data-card-description]');

    const cardGenre = cardClone.querySelector('[data-card-genre]');
    const cardPlatform = cardClone.querySelector('[data-card-platform]');
    const cardPublisher = cardClone.querySelector('[data-card-publisher]');
    const cardDeveloper = cardClone.querySelector('[data-card-developer]');
    const cardReleased = cardClone.querySelector('[data-card-release-data]');

    cardTitle.textContent = game.title;
    cardImage.src = game.thumbnail;
    const maxWord = 10;
    const words = game.short_description.split(' ');
    cardDescription.textContent = words.length > maxWord
        ? `${words.slice(0, maxWord).join(' ')}...`
        : game.short_description;
    cardGenre.textContent = game.genre;
    cardPlatform.textContent = game.platform;
    cardPublisher.textContent = game.publisher;
    cardDeveloper.textContent = game.developer;
    cardReleased.textContent = game.release_date;

    return cardClone;
}

function renderCards(container, gamesCards) {
    container.innerText = '';
    const fragment = document.createDocumentFragment();

    gamesCards.forEach((game) => {
        const cardElement = createCardElement(game);
        fragment.appendChild(cardElement);
    });

    container.appendChild(fragment);
}

async function fetchCards() {
    try {
        const apiUrl = 'https://mmo-games.p.rapidapi.com/games';
        showLoading();

        const option = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            },
        };

        const response = await fetch(apiUrl, option);
        games = await response.json();
        renderCards(gameList, games.slice(0, 50));
    } catch (err) {
        console.error(err, 'Get error:');
    } finally {
        noneLoading();
    }
}

document.addEventListener('DOMContentLoaded', fetchCards);

function filterGames() {
    const newGamesCheck = document.querySelector('[data-type-filter="new"]');
    const oldGamesCheck = document.querySelector('[data-type-filter="old"]');
    const genreSelect = document.querySelector('[data-type-filter="genre"]');
    const platformSelect = document.querySelector('[data-type-filter="platform"]');
    const searchInput = document.querySelector('[data-type-filter="search"]');

    const isNewChecked = newGamesCheck.checked;
    const isOldChecked = oldGamesCheck.checked;
    const selectedGenre = genreSelect.value;
    const selectedPlatform = platformSelect.value;
    const searchResult = searchInput.value.toLowerCase();

    const filteredGames = games.filter((game) => {
        const isGenreMatch = selectedGenre === 'Genre' || game.genre.includes(selectedGenre);
        const isPlatformMatch = selectedPlatform === 'Platform' || game.platform.includes(selectedPlatform);
        const isSearchMatch = game.title.toLowerCase().includes(searchResult);

        return isGenreMatch && isPlatformMatch && isSearchMatch;
    });

    if (isNewChecked) {
        filteredGames.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    } else if (isOldChecked) {
        filteredGames.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    }

    renderCards(gameList, filteredGames);
}

function init() {
    const filterForm = document.querySelector('[data-type="filter-form"]');
    const newCheckbox = document.querySelector('[data-type-filter="new"]');
    const oldCheckbox = document.querySelector('[data-type-filter="old"]');
    const genreSelect = document.querySelector('[data-type-filter="genre"]');
    const platformSelect = document.querySelector('[data-type-filter="platform"]');
    const searchButton = document.querySelector('[data-type-filter="search-button"]');

    filterForm.addEventListener('change', filterGames);
    newCheckbox.addEventListener('change', filterGames);
    oldCheckbox.addEventListener('change', filterGames);
    genreSelect.addEventListener('change', filterGames);
    platformSelect.addEventListener('change', filterGames);

    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        filterGames();
    });

    renderCards(gameList, games);
}

init();
