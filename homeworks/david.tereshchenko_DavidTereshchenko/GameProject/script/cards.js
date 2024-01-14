let games = [];
const cardsBlock = document.querySelector('.game__item-blocks');
const searchInput = document.querySelector('.search__input');
const newCheck = document.querySelector('#newGames');
const oldCheck = document.querySelector('#oldGames');
const dateYear = '2020-01-01';
const loading = document.querySelector('[data-type="loading"]');
const genreSelect = document.querySelector('[data-select="genre"]');
const platformSelect = document.querySelector('[data-select="platform"]');

function showLoader() {
    loading.style.display = 'flex';
}

function hideLoader() {
    loading.style.display = 'none';
}

function createCard(cards) {
    const cardsLimit = cards.filter((el) => el.id <= 50);
    cardsLimit.forEach((el) => {
        const maxDescription = 48;
        const world = el.short_description.split('');
        el.short_description = world.length > maxDescription
            ? `${world.slice(0, maxDescription).join('')}...`
            : el.short_description;

        cardsBlock.insertAdjacentHTML('beforeend', `<div class="item-block__game-item ">
                                <div class="game-item-item__header">
                                    <div class="header__icon">
                                        <img src="${el.thumbnail}" class="header__img" alt="game icon" width="90" height="90">
                                    </div>
                                    <div class="header__about">
                                        <h2 class="header__game-name cards-title">${el.title}</h2>
                                        <div class="about__p">${el.short_description}</div>
                                    </div>
                                </div>
                                <div class="game-item__info-list">
                                    <ul class="info-game" data-info="info">
                                        <li>
                                            <b>Genre:</b>${el.genre}
                                        </li>
                                        <li>
                                            <b>Platform:</b>${el.platform}
                                        </li>
                                        <li>
                                            <b>Publisher:</b>${el.publisher}
                                        </li>
                                        <li>
                                            <b>Developer:</b>${el.developer}
                                        </li>
                                        <li>
                                            <b>Release_date:</b>${el.release_date}
                                        </li>
                                    </ul>
                                </div>
                            </div>`);
    });
}

const apiURL = 'https://mmo-games.p.rapidapi.com/games';

async function getGames(platform) {
    let query = '';
    if (platform) {
        query = `?platform=${platform}`;
    }
    const url = `${apiURL}${query}`;
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
        },
    });
    try {
        showLoader();
        games = await response.json();
        createCard(games);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        hideLoader();
    }
}
document.addEventListener('DOMContentLoaded', getGames(''));

document.querySelector('[data-select="platform"]').addEventListener('change', () => {
    cardsBlock.innerText = '';
    switch (platformSelect.value) {
        case 'platform':
            getGames('all');
            break;

        case 'pc':
            getGames('pc');
            break;

        case 'browser':
            getGames('browser');
            break;

        default:
            getGames('all');
    }
});

async function getCategory(genre) {
    let query = '';
    if (genre) {
        query = `?category=${genre}`;
    }
    cardsBlock.innerText = '';
    const urlCategory = new URL(`${apiURL}${query}`);
    const response = await fetch(urlCategory, {
        method: 'GET',
        cache: 'no-cache',
        mode: 'cors',
        headers: {
            'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
        },
    });
    try {
        showLoader();
        games = await response.json();
        createCard(games);
    } catch (error) {
        console.error(error);
    } finally {
        hideLoader();
    }
}

document.querySelector('[data-select="genre"]').addEventListener('change', () => {
    cardsBlock.innerText = '';
    switch (genreSelect.value) {
        case 'genre':
            getCategory('');
            break;

        case 'shooter':
            getCategory('shooter');
            break;

        case 'pvp':
            getCategory('pvp');
            break;

        case 'mmorpg':
            getCategory('mmorpg');
            break;

        case 'pve':
            getCategory('pve');
            break;

        default:
            getCategory('');
    }
});

function sortFilter(element) {
    showLoader();
    searchInput.value = '';
    function compareDates(dataOld, dataNew) {
        if (element.dataset.radio === 'new') {
            return new Date(dataNew.release_date) - new Date(dataOld.release_date);
        }

        if (element.dataset.radio === 'old') {
            return new Date(dataOld.release_date) - new Date(dataNew.release_date);
        }
        return compareDates();
    }
    games.sort(compareDates);
    cardsBlock.innerText = '';

    setTimeout(() => {
        hideLoader();
        createCard(games);
    }, 1000);
}

document.querySelector('[data-search]').addEventListener('click', () => {
    showLoader();
    const search = games.filter((el) => {
        const searchThem = searchInput.value.toLowerCase();
        return el.title.toLowerCase().includes(searchThem)
            || el.short_description.toLowerCase().includes(searchThem)
            || el.genre.toLowerCase().includes(searchThem)
            || el.platform.toLowerCase().includes(searchThem)
            || el.publisher.toLowerCase().includes(searchThem)
            || el.developer.toLowerCase().includes(searchThem);
    });
    cardsBlock.innerText = '';
    setTimeout(() => {
        hideLoader();
        createCard(search);
    }, 500);
});

searchInput.oninput = function () {
    showLoader();
    newCheck.checked = false;
    oldCheck.checked = false;
    if (!this.value.length) {
        cardsBlock.innerText = '';
        setTimeout(() => {
            hideLoader();
            createCard(games);
        }, 500);
    }
};

function checkBoxFilter(element) {
    showLoader();
    const filterCards = games.filter((el) => {
        searchInput.value = '';
        if (newCheck.checked === true && oldCheck.checked === true) {
            return element;
        }

        if (newCheck.checked === false && oldCheck.checked === false) {
            return element;
        }

        if (element.dataset.check === 'old' && newCheck.checked === true) {
            return el.release_date >= dateYear;
        } if (oldCheck.checked === true) {
            return el.release_date <= dateYear;
        }

        if (element.dataset.check === 'new' && oldCheck.checked === true) {
            return el.release_date <= dateYear;
        } if (newCheck.checked === true) {
            return el.release_date >= dateYear;
        }
        return false;
    });
    cardsBlock.innerText = '';

    setTimeout(() => {
        hideLoader();
        createCard(filterCards);
    }, 1000);
}

checkBoxFilter(dateYear);
sortFilter();
