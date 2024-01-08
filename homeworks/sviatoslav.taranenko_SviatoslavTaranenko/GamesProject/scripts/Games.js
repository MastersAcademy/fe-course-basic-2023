function createCardElement(game) {
    const template = document.querySelector('.card-template');

    if (!template) {
        console.error('Template not found');
        return null;
    }

    const clone = document.importNode(template.content, true);

    const gameTopImgElement = clone.querySelector('[data-type="Games__cards_top_img"]');
    if (gameTopImgElement) {
        gameTopImgElement.src = game.thumbnail;
        gameTopImgElement.alt = `Thumbnail for ${game.title}`;
    } else {
        console.error('Element with data-type "Games__cards_top_img" not found');
    }

    const gameTitleElement = clone.querySelector('[data-type="Games__cards_top_text_title"]');
    if (gameTitleElement) {
        gameTitleElement.textContent = game.title;
    } else {
        console.error('Element with data-type "Games__cards_top_text_title" not found');
    }

    const gameDescriptionElement = clone.querySelector('[data-type="Games__cards_top_text_p"]');
    if (gameDescriptionElement) {
        gameDescriptionElement.textContent = `${game.short_description.substring(0, 35)}...`;
    } else {
        console.error('Element with data-type "Games__cards_top_text_p" not found');
    }

    const genreElement = clone.querySelector('[data-card-genre]');
    if (genreElement) {
        genreElement.textContent = `Genre: ${game.genre}`;
    }

    const platformElement = clone.querySelector('[data-card-platform]');
    if (platformElement) {
        platformElement.textContent = `Platform: ${game.platform}`;
    }

    const publisherElement = clone.querySelector('[data-card-publisher]');
    if (publisherElement) {
        publisherElement.textContent = `Publisher: ${game.publisher}`;
    }

    const developerElement = clone.querySelector('[data-card-developer]');
    if (developerElement) {
        developerElement.textContent = `Developer: ${game.developer}`;
    }

    const releaseDateElement = clone.querySelector('[data-card-release-date]');
    if (releaseDateElement) {
        releaseDateElement.textContent = `Release Date: ${game.release_date}`;
    }

    return clone;
}

function loadAndRenderGames() {
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'flex';

    fetchGamesData()
        .then((gamesData) => {
            renderGames(gamesData.slice(0, 50));
        })
        .catch((error) => {
            console.error('Games loading error:', error);
        })
        .finally(() => {
            loadingOverlay.style.display = 'none';
        });
}

function fetchGamesData() {
    return fetch('https://mmo-games.p.rapidapi.com/games', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
        },
    }).then((response) => response.json());
}

function renderGames(games) {
    const cardContainer = document.querySelector('[data-type="card-container"]');

    if (!cardContainer) {
        console.error('Card container not found');
        return;
    }

    cardContainer.innerHTML = '';

    games.forEach((game) => {
        const cardElement = createCardElement(game);
        if (cardElement) {
            cardContainer.appendChild(cardElement);
        }
    });
}

function init() {
    loadAndRenderGames();
}

document.addEventListener('DOMContentLoaded', init);
