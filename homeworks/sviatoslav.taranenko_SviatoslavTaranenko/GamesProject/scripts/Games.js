
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

function renderGames(games) {
    const cardContainer = document.querySelector('[data-type="card-container"]');

    if (!cardContainer) {
        console.error('Card container not found');
        return;
    }

    const searchText = document.getElementById('search').value.toLowerCase();

    cardContainer.innerHTML = '';

    games.forEach((game) => {
        const cardElement = createCardElement(game);
        if (cardElement) {
            cardContainer.appendChild(cardElement);
        }
    });
}

function init() {
}

document.addEventListener('DOMContentLoaded', init);
