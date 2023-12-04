const checkboxes = document.querySelectorAll('.checkbox__input');
const containerCards = document.querySelector('.main.cards');
const genreDropdown = document.getElementById('genre');
const textInput = document.querySelector('.search__input');
const radioButtons = document.querySelectorAll('.radio__input');
const loader = document.querySelector('.loader');

const filtersState = {
    checkboxes: [],
    selectedGenre: 'all',
    textValue: '',
    selectedRadio: '',
};

async function fetchGames() {
    const url = 'https://mmo-games.p.rapidapi.com/games';
    const headers = {
        'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    const response = await fetch(url, { method: 'GET', headers });
    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
}

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

function setCardItemVisibility(cardItem, isVisible) {
    if (isVisible) {
        cardItem.classList.remove('hidden');
    } else {
        cardItem.classList.add('hidden');
    }
}

function createCardTemplate({
    release_date: releaseDate,
    genre,
    platform,
    thumbnail,
    title,
    short_description: shortDescription,
    publisher,
    developer,
}) {
    return `<li class="card__item" data-release-date="${releaseDate}" data-genre="${genre}" data-platform="${platform}">
                        <div class="card__view">
                            <img src="${thumbnail}" alt="game picture" width="90" height="90">
                            <div>
                                <h3 class="card__title">${title}</h3>
                                <p>${shortDescription}</p>
                            </div>
                        </div>
                        <dl class="item-descriptions">
                            <div>
                                <dt>Platform</dt>
                                <dd>${platform}</dd>
                            </div>

                            <div>
                                <dt>Publisher</dt>
                                <dd>${publisher}</dd>
                            </div>

                            <div>
                                <dt>Developer</dt>
                                <dd>${developer}</dd>
                            </div>

                            <div>
                                <dt>Genre</dt>
                                <dd>${genre}</dd>
                            </div>

                            <div>
                                <dt>Release_date</dt>
                                <dd >${releaseDate}</dd>
                            </div>
                        </dl>
                    </li>`;
}

async function renderCards(container) {
    loader.style.display = 'block';
    try {
        const gamesData = await fetchGames();
        const cardsHTML = gamesData.map(createCardTemplate).join('');
        container.querySelector('.section__title').insertAdjacentHTML('afterend', `<ul class="card__list">${cardsHTML}</ul>`);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        loader.style.display = 'none';
    }
}
function updateState() {
    filtersState.checkboxes = [...checkboxes].filter((checkbox) => checkbox.checked);
    filtersState.selectedGenre = genreDropdown.options[genreDropdown.selectedIndex].value;
    filtersState.textValue = textInput.value.toLowerCase();
    filtersState.selectedRadio = [...radioButtons].find((radio) => radio.checked).value;
}

function getPlatformVisibility(cardItem) {
    const textContent = cardItem.textContent.toLowerCase();
    const platform = (cardItem.dataset.platform).toLowerCase();

    const isPlatformVisible = filtersState.selectedRadio === 'platform' && platform.includes('pc (windows)');
    const isOnlineVisible = filtersState.selectedRadio === 'online' && textContent.includes('web browser');
    const isAllVisible = filtersState.selectedRadio === 'all';

    return isPlatformVisible || isOnlineVisible || isAllVisible;
}

function getDateVisibility(cardItem) {
    const releaseDate = new Date(cardItem.dataset.releaseDate).getFullYear();
    const isOld = releaseDate < 2010;
    const isNew = releaseDate > 2020;

    return (filtersState.checkboxes.length === 0
        || filtersState.checkboxes.some(({ value }) => (value === 'new' && isNew)
            || (value === 'old' && isOld)));
}

function getGamesVisibleByText(cardItem) {
    const textContent = cardItem.textContent.toLowerCase();

    return textContent.includes(filtersState.textValue);
}

function getGenreVisibility(cardItem) {
    const genre = (cardItem.dataset.genre).toLowerCase();

    return (filtersState.selectedGenre === 'all' || genre === filtersState.selectedGenre);
}

function updateVisibility(cardItem) {
    const isVisibleByPlatform = getPlatformVisibility(cardItem);
    const isVisibleByDate = getDateVisibility(cardItem);
    const gamesVisibleByText = getGamesVisibleByText(cardItem);
    const genreVisible = getGenreVisibility(cardItem);

    const isVisible = isVisibleByDate && genreVisible
        && gamesVisibleByText && isVisibleByPlatform;

    setCardItemVisibility(cardItem, isVisible);
}

function applyCardItemFilters() {
    const cardItems = document.querySelectorAll('.card__item');
    updateState();
    cardItems.forEach(updateVisibility);
}

function init() {
    loader.style.display = 'none';
    renderCards(containerCards);
    const applyFilters = () => {
        applyCardItemFilters();
    };

    checkboxes.forEach((checkbox) => checkbox.addEventListener('change', applyFilters));
    genreDropdown.addEventListener('change', applyFilters);
    textInput.addEventListener('input', debounce(applyFilters, 300));
    radioButtons.forEach((radio) => radio.addEventListener('change', applyFilters));
}

document.addEventListener('DOMContentLoaded', init);
