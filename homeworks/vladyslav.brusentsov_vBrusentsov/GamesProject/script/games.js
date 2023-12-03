const cardContainer = document.querySelector('[data-type="card-container"]');

function createCardElement(game) {
    const templateByAttribute = document.querySelector('[data-card-template]');
    const cardCopy = document.importNode(templateByAttribute.content, true);
    cardCopy.querySelector('[data-card-title]').textContent = game.title;
    cardCopy.querySelector('[data-card-img]').src = game.thumbnail;
    cardCopy.querySelector('[data-card-short_description]').textContent = game.short_description;
    cardCopy.querySelector('[data-card-genre]').textContent = game.genre;
    cardCopy.querySelector('[data-card-platform]').textContent = game.platform;
    cardCopy.querySelector('[data-card-publisher]').textContent = game.publisher;
    cardCopy.querySelector('[data-card-developer]').textContent = game.developer;
    cardCopy.querySelector('[data-card-date]').textContent = game.release_date;

    return cardCopy;
}

function renderCards(container, dataGames) {
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    dataGames.forEach((game) => {
        const cardElement = createCardElement(game);
        return fragment.appendChild(cardElement);
    });
    container.appendChild(fragment);
}

async function getAllGame() {
    try {
        await fetch('https://mmo-games.p.rapidapi.com/games', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            },
        }).then((response) => response.json()).then((data) => {
            const games = data.slice(0, 50);
            return renderCards(cardContainer, games);
        });
    } catch (error) {
        console.error(error);
    }
}

async function getRadioButtonFilter(event) {
    try {
        const selectedValue = event.target.value;
        await fetch(`https://mmo-games.p.rapidapi.com/games?platform=${selectedValue}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            },
        }).then((response) => response.json()).then((data) => {
            const games = data.slice(0, 50);
            renderCards(cardContainer, games);
        });
    } catch (error) {
        console.error(error);
    }
}

async function getSelectFilterGames() {
    try {
        const genreSelect = document.getElementById('game-properties');
        const selectedGenre = genreSelect.value;
        await fetch(`https://mmo-games.p.rapidapi.com/games?category=${selectedGenre}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            },
        }).then((response) => response.json()).then((data) => {
            const games = data.slice(0, 50);
            renderCards(cardContainer, games);
        });
    } catch (error) {
        console.error(error);
    }
}

async function getSortGamesByDate(event) {
    try {
        console.log(event.target.value);
        if (event.target.value === 'New First') {
            const response = await fetch(' https://www.mmobomb.com/api1/games?&sort-by=release-date', {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
                    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
                },
            });
            const data = response.json();
            const games = data.slice(0, 50);
            renderCards(cardContainer, games);
        }
    } catch (error) {
        console.error(error);
    }
}

async function getSearchBarFilteredGames() {
    const searchBar = document.getElementById('search').value.toLowerCase();

    const response = await fetch('https://mmo-games.p.rapidapi.com/games', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
        },
    });
    const data = await response.json();
    const games = data.slice(0, 50);
    const searchBarFilter = games.filter((game) => game.title.toLowerCase().includes(searchBar)
       || game.short_description.toLowerCase().includes(searchBar));
    renderCards(cardContainer, searchBarFilter);
}

function init() {
    const radioButtonsFilterPlatform = document.querySelector('.radio-filter');
    const radioButtonsSortByDate = document.querySelectorAll('.radio-date-sort');
    const applyButton = document.getElementById('applyButton');
    const searchBar = document.getElementById('search');
    const genreSelect = document.getElementById('game-properties');
    // event listeners
    radioButtonsSortByDate.forEach((checkbox) => {
        checkbox.addEventListener('change', getSortGamesByDate);
    });
    radioButtonsFilterPlatform.addEventListener('change', getRadioButtonFilter);
    applyButton.addEventListener('click', getSearchBarFilteredGames);
    searchBar.addEventListener('keyup', getSearchBarFilteredGames);
    genreSelect.addEventListener('change', getSelectFilterGames);

    // return getSortGamesByDate() || getSearchBarFilteredGames()|| getSelectFilterGames();
    return getAllGame() || getSelectFilterGames() || getSortGamesByDate();
}

document.addEventListener('DOMContentLoaded', init);
