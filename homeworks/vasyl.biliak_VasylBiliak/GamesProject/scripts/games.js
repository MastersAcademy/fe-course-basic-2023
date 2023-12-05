const FORM_FILTERS_ELEMENT = document.querySelector('[data-form-filters]');
const TEXT_INPUT_ELEMENT = FORM_FILTERS_ELEMENT.elements['search-query'];
const GAMES_CONTAINER_ELEMENT = document.querySelector('.card-games');
const loadingOverlay = document.querySelector('.loading-overlay__spinner');
const oldGames = new Date('2010-01-01');
let allGamesData = [];
let gamesDisplayed = [];
let selectedGenreValue = '';
let selectedRadioValue = 'all';
let selectedDate = '&sort-by=release-date';

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

    const truncatedDescription = shortDescription.length > 80
        ? `${shortDescription.substring(0, 80)}...`
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
    }
}

function filterByGameCategory(category) {
    if (category === 'all') {
        return '';
    } return `&category=${category}`;
}

async function fetchData(platform, date, category) {
    try {
        showLoadingOverlay();
        const apiUrl = `https://mmo-games.p.rapidapi.com/games?platform=${platform}${category}${date}`;
        const response = await fetch(apiUrl, {
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
        allGamesData = Array.isArray(data) ? data.slice(0, 50) : [];
        gamesDisplayed = [...allGamesData];
        renderCards(GAMES_CONTAINER_ELEMENT, gamesDisplayed);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        hideLoadingOverlay();
    }
}

function filterByGameDate(isNewChecked, isOldChecked) {
    if (isNewChecked) {
        return '&sort-by=2022-01-01';
    }
    if (isOldChecked) {
        return `&sort-by=${oldGames}`;
    }
    return '&sort-by=release-date';
}

function filterBySearchQuery(cards) {
    const inputValue = FORM_FILTERS_ELEMENT.elements['search-query'].value.toLowerCase();
    return cards.filter((card) => card.title.toLowerCase().includes(inputValue));
}

async function getUpdatedFilteredCards() {
    if (FORM_FILTERS_ELEMENT.elements['games-category'].value) {
        selectedGenreValue = filterByGameCategory(FORM_FILTERS_ELEMENT.elements['games-category'].value);
    }

    if (FORM_FILTERS_ELEMENT.elements.browser.checked) {
        selectedRadioValue = FORM_FILTERS_ELEMENT.elements['radio-btns'].value.toLowerCase();
    }

    if (FORM_FILTERS_ELEMENT.elements.game_date_new.checked
        || FORM_FILTERS_ELEMENT.elements.game_date_old.checked) {
        selectedDate = filterByGameDate(FORM_FILTERS_ELEMENT.elements.game_date_new.checked,
            FORM_FILTERS_ELEMENT.elements.game_date_old.checked);
    }
    await fetchData(selectedRadioValue, selectedDate, selectedGenreValue);
}

function onChangeFiltersHandler() {
    const updatedFilteredGames = getUpdatedFilteredCards();
    renderCards(GAMES_CONTAINER_ELEMENT, updatedFilteredGames);
}

function onInputSearchHandler() {
    const updatedFilteredCards = filterBySearchQuery(gamesDisplayed);
    renderCards(GAMES_CONTAINER_ELEMENT, updatedFilteredCards);
}

async function initGames() {
    await fetchData(selectedRadioValue, selectedDate, selectedGenreValue);
    TEXT_INPUT_ELEMENT.addEventListener('input', onInputSearchHandler);
    FORM_FILTERS_ELEMENT.addEventListener('change', onChangeFiltersHandler);
}

document.addEventListener('DOMContentLoaded', initGames);
