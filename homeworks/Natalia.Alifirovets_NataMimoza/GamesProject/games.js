const template = document.querySelector('[data-type="card-template"]');
const container = document.querySelector('.container[data-type=\'cards\']');
const spinnerContainer = document.getElementById('spinner-form');

function createCardElement(game) {
    const fragment = document.createDocumentFragment();

    const cardElement = template.content.cloneNode(true);

    const cardTitleElement = cardElement.querySelector('[data-card-title]');
    cardTitleElement.textContent = game.title;

    const cardInfoElement = cardElement.querySelector('[data-card-info]');
    cardInfoElement.textContent = `${game.short_description.slice(0, 60)}...`;
    const cardImageElement = cardElement.querySelector('[data-card-img]');
    cardImageElement.src = game.thumbnail;

    const cardGenreElement = cardElement.querySelector('[data-card-genre]');
    cardGenreElement.textContent = `Genre: ${game.genre}`;

    const cardPlatformElement = cardElement.querySelector('[data-card-platform]');
    cardPlatformElement.textContent = `Platform: ${game.platform}`;

    const cardPublisherElement = cardElement.querySelector('[data-card-publisher]');
    cardPublisherElement.textContent = `Publisher: ${game.publisher}`;

    const cardDeveloperElement = cardElement.querySelector('[data-card-developer]');
    cardDeveloperElement.textContent = `Developer: ${game.developer}`;

    const cardReleaseElement = cardElement.querySelector('[data-card-release]');
    cardReleaseElement.textContent = `Release date: ${game.release_date}`;

    fragment.appendChild(cardElement);

    return fragment;
}

function renderCards(cardContainer, gamesToRender) {
    cardContainer.innerHTML = '';
    gamesToRender.forEach((game) => {
        const cardElement = createCardElement(game);
        cardContainer.appendChild(cardElement);
    });
}

let games = [];

async function fetchGames() {
    try {
        spinnerContainer.style.display = 'flex';

        const response = await fetch('https://mmo-games.p.rapidapi.com/games', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        games = await response.json();

        spinnerContainer.style.display = 'none';
        renderCards(container, games.slice(0, 50));
    } catch (error) {
        console.error('Error fetching data:', error);
        spinnerContainer.style.display = 'none';
        container.innerHTML = 'Error loading data';
    }
}

function getReleaseYear(game) {
    return new Date(game.release_date).getFullYear();
}
function filterAndRenderCards() {
    const checkboxNew = document.querySelector('[data-filter-box="new"]');
    const checkboxOld = document.querySelector('[data-filter-box="old"]');
    const searchInput = document.querySelector('.search');
    const genreDropdown = document.querySelector('.drop-down');
    const platformRadio = document.querySelector('#platform');
    const onlineGamesRadio = document.querySelector('#games');

    let filteredGames = [];

    if (checkboxNew.checked) {
        filteredGames = games.slice(0, 50).filter((game) => getReleaseYear(game) > 2020);
    } else if (checkboxOld.checked) {
        filteredGames = games.slice(0, 50).filter((game) => getReleaseYear(game) < 2010);
    } else {
        filteredGames = games.slice(0, 50);
    }

    const searchText = searchInput.value.toLowerCase();
    if (searchText) {
        filteredGames = filteredGames.filter(
            (game) => game.title.toLowerCase().includes(searchText)
                || game.short_description.toLowerCase().includes(searchText),
        );
    }

    const selectedGenre = genreDropdown.value;
    if (selectedGenre && selectedGenre !== 'Genre') {
        filteredGames = filteredGames.filter(
            (game) => game.genre.toLowerCase().includes(selectedGenre.toLowerCase()),
        );
    }

    if (platformRadio.checked) {
        filteredGames = filteredGames.filter((game) => game.platform.toLowerCase().includes('pc (windows)'));
    } else if (onlineGamesRadio.checked) {
        filteredGames = filteredGames.filter((game) => game.platform.toLowerCase().includes('web browser'));
    }

    renderCards(container, filteredGames);
}

const checkboxNew = document.querySelector('[data-filter-box="new"]');
checkboxNew.addEventListener('change', filterAndRenderCards);

const checkboxOld = document.querySelector('[data-filter-box="old"]');
checkboxOld.addEventListener('change', filterAndRenderCards);

const applyButton = document.querySelector('.apply');
applyButton.addEventListener('click', filterAndRenderCards);

const genreDropdown = document.querySelector('.drop-down');
genreDropdown.addEventListener('change', filterAndRenderCards);

const platformRadio = document.querySelector('#platform');
platformRadio.addEventListener('change', filterAndRenderCards);

const onlineGamesRadio = document.querySelector('#games');
onlineGamesRadio.addEventListener('change', filterAndRenderCards);

function init() {
    fetchGames();
    renderCards(container, games.slice(0, 50));
}

init();

const btn = document.querySelector('.menu-btn');
const filt = document.querySelector('.filters');

btn.addEventListener('click', () => {
    filt.classList.toggle('menu-open');
});
