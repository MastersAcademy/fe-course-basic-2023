// const c = console.log; // for short use console.log

let games = [];
const cardsBlock = document.querySelector('.game__item-blocks');
const searchInput = document.querySelector('.search__input');
const newCheck = document.querySelector('#newGames');
const oldCheck = document.querySelector('#oldGames');
const dateYear = '2020-01-01';
const loading = document.querySelector('[data-type="loading"]');

function showLoader() {
    loading.style.display = 'flex';
}

function hideLoader() {
    loading.style.display = 'none';
}

function renderCard(
    releaseDate,
    genre,
    platform,
    thumbnail,
    title,
    shortDescription,
    publisher,
    developer,
) {
    return `<div class="item-block__game-item ">
                                <div class="game-item-item__header">
                                    <div class="header__icon">
                                        <img src="${thumbnail}" class="header__img" alt="game icon" width="90" height="90">
                                    </div>
                                    <div class="header__about">
                                        <h2 class="header__game-name cards-title">${title}</h2>
                                        <div class="about__p">${shortDescription}</div>
                                    </div>
                                </div>
                                <div class="game-item__info-list">
                                    <ul class="info-game" data-info="info">
                                        <li>
                                            <b>Genre:</b>${genre}
                                        </li>
                                        <li>
                                            <b>Platform:</b>${platform}
                                        </li>
                                        <li>
                                            <b>Publisher:</b>${publisher}
                                        </li>
                                        <li>
                                            <b>Developer:</b>${developer}
                                        </li>
                                        <li>
                                            <b>Release_date:</b>${releaseDate}
                                        </li>
                                    </ul>
                                </div>
                            </div>`;
}

async function getJSON() {
    try {
        showLoader();
        const response = await fetch('https://mmo-games.p.rapidapi.com/games', {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            },
        });

        games = await response.json();
        games = games.slice(0, 50);
        games.forEach((cards) => {
            cardsBlock.innerHTML += renderCard(
                cards.release_date,
                cards.genre,
                cards.platform,
                cards.thumbnail,
                cards.title,
                cards.short_description,
                cards.publisher,
                cards.developer,
            );
        });
    } catch (error) {
        console.error('Error:', error);
    } finally {
        hideLoader();
    }
}
document.addEventListener('DOMContentLoaded', getJSON);

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
        search.forEach((cards) => {
            cardsBlock.innerHTML += renderCard(
                cards.release_date,
                cards.genre,
                cards.platform,
                cards.thumbnail,
                cards.title,
                cards.short_description,
                cards.publisher,
                cards.developer,
            );
        });
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
            games.forEach((cards) => {
                cardsBlock.innerHTML += renderCard(
                    cards.release_date,
                    cards.genre,
                    cards.platform,
                    cards.thumbnail,
                    cards.title,
                    cards.short_description,
                    cards.publisher,
                    cards.developer,
                );
            });
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
            showLoader();
            return element;
        }

        if (element.dataset.check === 'new' && newCheck.checked === true) {
            return el.release_date >= dateYear;
        } if (oldCheck.checked === true) {
            return el.release_date <= dateYear;
        }

        if (element.dataset.check === 'old' && oldCheck.checked === true) {
            return el.release_date <= dateYear;
        } if (newCheck.checked === true) {
            return el.release_date >= dateYear;
        }
        return false;
    });
    cardsBlock.innerText = '';

    setTimeout(() => {
        hideLoader();
        filterCards.forEach((cards) => {
            cardsBlock.innerHTML += renderCard(
                cards.release_date,
                cards.genre,
                cards.platform,
                cards.thumbnail,
                cards.title,
                cards.short_description,
                cards.publisher,
                cards.developer,
            );
        });
    }, 500);
}

checkBoxFilter(dateYear);
