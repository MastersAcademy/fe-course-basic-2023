const template = document.querySelector('[data-type="card-template"]');
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

function renderCards(container, gamesToRender) {
    container.innerHTML = '';
    gamesToRender.forEach((game) => {
        const cardElement = createCardElement(game);
        container.appendChild(cardElement);
    });
}

let games = [];

const spinnerContainer = document.getElementById('spinner-form');
const container = document.querySelector('.container[data-type=\'cards\']');

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

function filterAndRenderCards() {
    const checkboxNew = document.querySelector('[data-filter-box="new"]');
    const checkboxOld = document.querySelector('[data-filter-box="old"]');

    let filteredGames = [];
    const containerElement = document.querySelector('.container[data-type=\'cards\']');

    if (checkboxNew.checked) {
        filteredGames = games.filter((game) => new Date(game.release_date).getFullYear() > 2020);
    } else if (checkboxOld.checked) {
        filteredGames = games.filter((game) => new Date(game.release_date).getFullYear() < 2010);
    } else {
        filteredGames = games;
    }

    renderCards(containerElement, filteredGames);
}

const checkboxNew = document.querySelector('[data-filter-box="new"]');
checkboxNew.addEventListener('change', filterAndRenderCards);

const checkboxOld = document.querySelector('[data-filter-box="old"]');
checkboxOld.addEventListener('change', filterAndRenderCards);

function init() {
    fetchGames();
}

init();
