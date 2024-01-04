let games = [];
const gameList = document.querySelector('[data-type="games-list"]');
const loadingSection = document.querySelector('[data-type="loading-section"]');

function showLoader() {
    loadingSection.style.display = 'flex';
}

function hideLoader() {
    loadingSection.style.display = 'none';
}

function createCardElement(game) {
    const template = document.querySelector('[data-type="card-template"]');
    const cardClone = template.content.cloneNode(true);

    const cardImg = cardClone.querySelector('[data-card-img]');
    cardImg.src = game.thumbnail;

    const cardTitle = cardClone.querySelector('[data-card-title]');
    cardTitle.textContent = game.title;

    const cardDescription = cardClone.querySelector('[data-card-description]');
    const maxWords = 10;
    const words = game.short_description.split(' ');
    cardDescription.textContent = words.length > maxWords
        ? `${words.slice(0, maxWords).join(' ')}...`
        : game.short_description;

    const cardGenre = cardClone.querySelector('[data-card-genre]');
    cardGenre.textContent = `Genre: ${game.genre}`;

    const cardPlatform = cardClone.querySelector('[data-card-platform]');
    cardPlatform.textContent = `Platform: ${game.platform}`;

    const cardPublisher = cardClone.querySelector('[data-card-publisher]');
    cardPublisher.textContent = `Publisher: ${game.publisher}`;

    const cardDeveloper = cardClone.querySelector('[data-card-developer]');
    cardDeveloper.textContent = `Developer: ${game.developer}`;

    const cardReleaseDate = cardClone.querySelector('[data-card-release-date]');
    cardReleaseDate.textContent = `Release date: ${game.release_date}`;

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

async function fetchDataCards() {
    try {
        const apiUrl = 'https://mmo-games.p.rapidapi.com/games';
        showLoader();

        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            },
        };

        const response = await fetch(apiUrl, options);
        games = await response.json();
        renderCards(gameList, games.slice(0, 50));
    } catch (error) {
        console.error('GET error:', error);
    } finally {
        hideLoader();
    }
}

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
    const searchTerm = searchInput.value.toLowerCase();

    const filteredGames = games.filter((game) => {
        const isGenreMatch = selectedGenre === 'Genre' || game.genre.includes(selectedGenre);
        const isPlatformMatch = selectedPlatform === 'Platform' || game.platform.includes(selectedPlatform);
        const isSearchMatch = game.title.toLowerCase().includes(searchTerm);

        return isGenreMatch && isPlatformMatch && isSearchMatch;
    });

    if (isNewChecked) {
        filteredGames.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    }

    else if (isOldChecked) {
        filteredGames.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    }

    renderCards(gameList, filteredGames);
}

function attachHandlers() {
    const filterForm = document.querySelector('[data-type="filter-form"]');
    const newCheckbox = document.querySelector('[data-type-filter="new"]');
    const oldCheckbox = document.querySelector('[data-type-filter="old"]');
    const genreSelect = document.querySelector('[data-type-filter="genre"]');
    const platformSelect = document.querySelector('[data-type-filter="platform"]');
    const searchInput = document.querySelector('[data-type-filter="search"]');

    filterForm.addEventListener('change', filterGames);
    newCheckbox.addEventListener('change', filterGames);
    oldCheckbox.addEventListener('change', filterGames);
    genreSelect.addEventListener('change', filterGames);
    platformSelect.addEventListener('change', filterGames);

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            filterGames();
        }
    });

    renderCards(gameList, games);
}

function init() {
    attachHandlers();
    fetchDataCards();
}

document.addEventListener('DOMContentLoaded', init);
