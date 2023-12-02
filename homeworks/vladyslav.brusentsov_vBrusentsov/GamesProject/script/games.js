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

async function getCheckboxFilteredGames() {
    const newGamesCheckbox = document.getElementById('new-games').checked;
    const oldGamesCheckbox = document.getElementById('old-games').checked;

    try {
        const response = await fetch('https://mmo-games.p.rapidapi.com/games', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            },
        });
        const data = await response.json();
        const games = data.slice(0, 50);
        console.log(games);

        if (!newGamesCheckbox && !oldGamesCheckbox) {
            renderCards(cardContainer, games);
        }

        const filteredCheckboxGames = games.filter((game) => {
            const releaseYear = parseInt(game.release_date.split('-')[0], 10);

            return (!newGamesCheckbox && !oldGamesCheckbox)
            || (newGamesCheckbox && releaseYear > 2020)
            || (oldGamesCheckbox && releaseYear <= 2010);
        });
        renderCards(cardContainer, filteredCheckboxGames);
    } catch (error) {
        console.error(error);
    }
}

// function getSearchBarFilteredGames() {
//     const searchBar = document.getElementById('search').value.toLowerCase();

//     const searchBarFilter = games.filter((game) => game.title.toLowerCase().includes(searchBar)
//        || game.short_description.toLowerCase().includes(searchBar));
//     renderCards(cardContainer, searchBarFilter);
// }

// function getSelectFilterGames() {
//     const genreSelect = document.getElementById('game-properties');
//     const selectedGenre = genreSelect.value;
//     const selectFilter = games
//         .filter((game) => selectedGenre === 'default' || game.genre === selectedGenre);
//     renderCards(cardContainer, selectFilter);
// }

function init() {
    const checkboxes = document.querySelectorAll('.checkbox-filter input[type="checkbox"]');
    // const applyButton = document.getElementById('applyButton');
    // const searchBar = document.getElementById('search');
    // const genreSelect = document.getElementById('game-properties');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', getCheckboxFilteredGames);
    });

    // applyButton.addEventListener('click', getSearchBarFilteredGames);
    // searchBar.addEventListener('keyup', getSearchBarFilteredGames);
    // genreSelect.addEventListener('change', getSelectFilterGames);

    return getCheckboxFilteredGames();
    /* || getSearchBarFilteredGames() || getSelectFilterGames(); */
}

document.addEventListener('DOMContentLoaded', init);
