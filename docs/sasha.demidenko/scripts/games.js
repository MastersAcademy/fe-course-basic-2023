const newCheckbox = document.getElementById('new');
const oldCheckbox = document.getElementById('old');
const newCardSelector = document.querySelector('[data-type="cards-container"]');
const loadingContainer = document.getElementById('loading-spinner');
const container = document.querySelector('.cards_wrapper[data-type=\'cards-container\']');
let games = [];
function createCardElement(game) {
    const elementTemplate = document.querySelector('[data-type="card-template"]');
    const elementCopy = elementTemplate.content.cloneNode(true);

    const selectElement = (selector) => elementCopy.querySelector(`[data-type="${selector}"]`);

    const cardsTitle = selectElement('title');
    const cardsImg = selectElement('thumbnail');
    const cardsDescription = selectElement('short_description');
    const cardsGenre = selectElement('genre');
    const cardsPlatform = selectElement('platform');
    const cardsPublisher = selectElement('publisher');
    const cardsDeveloper = selectElement('developer');
    const cardsDate = selectElement('release_date');
    const descMaxLength = 100;

    cardsTitle.textContent = game.title;
    cardsTitle.style.cssText = 'height: 90px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap';

    cardsImg.src = game.thumbnail;
    cardsImg.alt = `Thumbnail for ${game.title}`;
    cardsImg.style.cssText = 'width: 90px; height: 90px; border-radius: 12px';

    cardsDescription.textContent = game.short_description;
    if (game.short_description.length > descMaxLength) {
        cardsDescription.dataset.fullText = game.short_description;
        cardsDescription.textContent = `${game.short_description.substring(0, descMaxLength)}...`;
        cardsDescription.style.cursor = 'pointer';
    }

    cardsGenre.textContent = `Genre: ${game.genre}`;
    cardsPlatform.textContent = `Platform: ${game.platform}`;
    cardsPublisher.textContent = `Publisher: ${game.publisher}`;
    cardsDeveloper.textContent = `Developer: ${game.developer}`;
    cardsDate.textContent = `Release Date: ${game.release_date}`;

    return elementCopy;
}

function filterNewGames(allGames) {
    const newGames = allGames.filter((game) => {
        const releaseDate = new Date(game.release_date);
        return releaseDate.getFullYear() >= 2020;
    });
    return newGames;
}
function filterOldGames(allGames) {
    const oldGames = allGames.filter((game) => {
        const releaseDate = new Date(game.release_date);
        return releaseDate.getFullYear() <= 2010;
    });
    return oldGames;
}

function displayCards(cont, gamesList, isNewChecked, isOldChecked) {
    let filteredGames = gamesList;
    if (isNewChecked && !isOldChecked) {
        filteredGames = filterNewGames(gamesList);
    } else if (!isNewChecked && isOldChecked) {
        filteredGames = filterOldGames(gamesList);
    } else if (isNewChecked && isOldChecked) {
        filteredGames = filterNewGames(gamesList).concat(filterOldGames(gamesList));
    }
    const fragment = document.createDocumentFragment();

    filteredGames.forEach((game) => {
        const card = createCardElement(game);
        fragment.appendChild(card);
    });

    container.innerHTML = '';
    container.appendChild(fragment);
}

function showLoading() {
    loadingContainer.style.display = 'flex';
}
function hideLoading() {
    loadingContainer.style.display = 'none';
}

async function fetchCards() {
    try {
        showLoading();
        const response = await fetch('https://mmo-games.p.rapidapi.com/games', {
            method: 'get',
            headers: {
                'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            },
        });
        const json = await response.json();
        games = json.slice(0, 50);
    } catch (err) {
        console.log('Error data:', err);
        container.innerHTML = 'Error loading data';
    } return games;
}

function filterAndRenderCards() {
    displayCards(newCardSelector, games, newCheckbox.checked, oldCheckbox.checked);
}
async function init() {
    newCheckbox.addEventListener('change', filterAndRenderCards);
    oldCheckbox.addEventListener('change', filterAndRenderCards);
    await fetchCards();
    displayCards(container, games);
    hideLoading();
}

init();
