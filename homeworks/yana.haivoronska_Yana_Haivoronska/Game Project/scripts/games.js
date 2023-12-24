let allGamesData = [];
let gamesDisplayed = [];
const checkboxNew = document.querySelector('[data-filter="new"]');
const checkboxOld = document.querySelector('[data-filter="old"]');
let loadingElement;

document.addEventListener('DOMContentLoaded', () => {
    loadingElement = document.querySelector('.loading');
});

function truncateText(text, maxLength) {
    const numModifiedCharacters = 50;
    const words = text.split(' ');
    let truncatedText = '';
    let currentLength = 0;

    words.forEach((word) => {
        if (currentLength + word.length <= maxLength) {
            truncatedText += `${word} `;
            currentLength += word.length + 1;
        }
    });

    if (truncatedText.length < text.length) {
        truncatedText = `${truncatedText.trim()}...`;
    }

    if (numModifiedCharacters && truncatedText.length > numModifiedCharacters) {
        truncatedText = `${truncatedText.substring(0, numModifiedCharacters)}...`;
    }

    return truncatedText;
}

async function createCardElement(game) {
    const cardCopy = document.importNode(document.querySelector('[data-type="card-template"]').content, true);

    cardCopy.querySelector('.card [data-card-img]').src = game.thumbnail;
    cardCopy.querySelector('.card [data-card-title]').textContent = game.title;

    const shortDescription = truncateText(game.short_description, 150);
    cardCopy.querySelector('.card [data-card-description]').textContent = shortDescription;

    cardCopy.querySelector('.card [data-card-genre]').textContent = game.genre;
    cardCopy.querySelector('.card [data-card-platform]').textContent = game.platform;
    cardCopy.querySelector('.card [data-card-publisher]').textContent = game.publisher;
    cardCopy.querySelector('.card [data-card-developer]').textContent = game.developer;
    cardCopy.querySelector('.card [data-card-release-date]').textContent = game.release_date;

    return cardCopy;
}

async function renderCards(container, games) {
    const containerElement = document.querySelector(`[data-container="${container}"]`);

    if (!containerElement) {
        console.error(`Container element "${container}" not found.`);
        return;
    }

    containerElement.innerHTML = '';

    games.forEach(async (game) => {
        const card = await createCardElement(game);
        containerElement.appendChild(card);
    });
}

function hideLoading() {
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
}

function showLoading() {
    if (loadingElement) {
        loadingElement.style.display = 'inline-block';
    }
}

async function fetchData() {
    try {
        showLoading();
        const apiUrl = 'https://mmo-games.p.rapidapi.com/games';
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            },
        });
        const data = await response.json();
        hideLoading();
        renderCards('game-cards', data.slice(0, 50));
    } catch (error) {
        console.error('Error fetching data:', error);
        hideLoading();
    }
}

fetchData();
