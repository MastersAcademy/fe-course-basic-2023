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
    const words = game.short_description.split('');
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

function filterCards() {
    const newCard = document.querySelector('[data-type-filter="new"]');
    const oldCard = document.querySelector('[data-type-filter="old"]');

    const isNewCard = newCard.checked;
    const isOldCard = oldCard.checked;

    const filteredCard = games.filter((game) => {
        const releaseYear = new Date(game.release_date).getFullYear();

        if (isNewCard && isOldCard) {
            return releaseYear <= 2010 || releaseYear >= 2020;
        } if (isNewCard) {
            return releaseYear >= 2020;
        } if (isOldCard) {
            return releaseYear <= 2010;
        }
        return true;
    });

    renderCards(gameList, filteredCard);
}

function init() {
    const filterForm = document.querySelector('[data-type="filter-form"]');
    const newCheckbox = document.querySelector('[data-type-filter="new"]');
    const oldCheckbox = document.querySelector('[data-type-filter="old"]');

    filterForm.addEventListener('change', filterCards);
    newCheckbox.addEventListener('change', filterCards);
    oldCheckbox.addEventListener('change', filterCards);

    renderCards(gameList, games);
}

init();
