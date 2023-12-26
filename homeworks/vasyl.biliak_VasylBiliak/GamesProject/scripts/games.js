const FORM_FILTERS_ELEMENT = document.querySelector('[data-form-filters]');
const GAMES_CONTAINER_ELEMENT = document.querySelector('.card-games');
const loadingOverlay = document.querySelector('.loading-overlay__spinner');
let games = [];

function showLoadingOverlay() {
    loadingOverlay.style.display = 'block';
}

function hideLoadingOverlay() {
    loadingOverlay.style.display = 'none';
}

function createGameCardElement(card) {
    const {
        title, thumbnail, short_description: shortDescription, genre, platform, publisher,
        developer, release_date: releaseDate,
    } = card;

    const truncatedDescription = shortDescription.length > 85
        ? `${shortDescription.substring(0, 85)}...`
        : shortDescription;

    const cardTemplateStr = `
            <div class="card">
                <img class="game-card__img" src="${thumbnail}" width="90" height="90" alt="">
                <div class="game-card__top-info">
                    <span class="description__title">${title}</span>
                    <p class="description__text">${truncatedDescription}</p>
                </div>
                <ul class="card__actors">
                    <li class="card__actor">
                        <span class="bold-text">Genre:</span> ${genre}
                    </li>
                    <li class="card__actor">
                        <span class="bold-text">Platform:</span> ${platform}
                    </li>
                    <li class="card__actor">
                        <span class="bold-text">Publisher:</span> ${publisher}
                    </li>
                    <li class="card__actor">
                        <span class="bold-text">Developer:</span> ${developer}
                    </li>
                    <li class="card__actor">
                        <span class="bold-text">Release Date:</span> ${releaseDate}
                    </li>
                </ul>
            </div>
        `;

    return cardTemplateStr;
}

function clearGamesContainer(container) {
    if (!container) return;
    container.innerHTML = '';
}

function renderCards(container, cards) {
    clearGamesContainer(container);
    if (cards.length) {
        cards.forEach((card) => {
            const gameCard = createGameCardElement(card);
            container.innerHTML += gameCard;
        });
    } else {
        container.innerHTML += '<div style=" font-weight: bold; margin-top: 25px; font-size: 25px;">Nothing found</div>';
    }
}

function filterByGameCategory(category) {
    if (category === 'all') {
        return '';
    } return `&category=${category}`;
}

function filterByGamePlatform(platform) {
    if (platform === 'all') {
        return '';
    } return `&platform=${platform}`;
}

function filterByGameDate(array, isNewChecked, isOldChecked) {
    if (isOldChecked) {
        return array.reverse();
    }
    return array;
}

function filterBySearchQuery(arrayGames, searchQuery) {
    return arrayGames.filter((game) => game.title.toLowerCase().includes(searchQuery));
}

function checkRadioButton(radioElement) {
    radioElement.checked = !radioElement.checked;
}

async function fetchData() {
    try {
        const categorySelect = FORM_FILTERS_ELEMENT.elements['games-category'].value;
        const platformSelect = FORM_FILTERS_ELEMENT.elements['games-platform'].value;
        const gameDate = FORM_FILTERS_ELEMENT.elements.game_date.value;
        const inputValue = FORM_FILTERS_ELEMENT.elements['search-query'].value;
        const isRadioNewData = FORM_FILTERS_ELEMENT.elements.game_date_new.checked;
        const isRadioOldData = FORM_FILTERS_ELEMENT.elements.game_date_old.checked;

        showLoadingOverlay();
        let url = 'https://mmo-games.p.rapidapi.com/games?';
        if (categorySelect) {
            url += filterByGameCategory(categorySelect);
        }
        if (platformSelect) {
            url += filterByGamePlatform(platformSelect);
        }
        if (gameDate) {
            url += '&sort-by=release-date';
            checkRadioButton(gameDate);
        }
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        games = Array.isArray(data) ? data.slice(0, 50) : [];
        games = filterByGameDate(games, isRadioNewData, isRadioOldData);
        if (inputValue > '') {
            games = filterBySearchQuery(games, inputValue);
        }
        renderCards(GAMES_CONTAINER_ELEMENT, games);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        hideLoadingOverlay();
    }
}

async function initGames() {
    await fetchData();
    FORM_FILTERS_ELEMENT.addEventListener('change', await fetchData);
    FORM_FILTERS_ELEMENT.addEventListener('submit', (event) => event.preventDefault());
}

document.addEventListener('DOMContentLoaded', initGames);
