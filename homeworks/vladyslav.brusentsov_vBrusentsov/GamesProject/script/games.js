const cardContainer = document.querySelector('[data-type="card-container"]');
const loadingOverlay = document.getElementById('loading-overlay');

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

async function getAllGame(query = {}, localParams = {}) {
    try {
        const queryParams = new URLSearchParams(query);
        loadingOverlay.style.display = 'flex';
        renderCards(cardContainer, []);
        /* If you have good ethernet and you get very fast response you can uncomment next row */
        // await new Promise((resolve) => setTimeout(resolve, 2000));

        await fetch(`https://mmo-games.p.rapidapi.com/games?${queryParams.toString()}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            },
        }).then((response) => response.json()).then((data) => {
            if (data.status === 0) {
                return renderCards(cardContainer, []);
            }
            let games = localParams['sort-by-type'] === 'old-games' ? data.reverse() : data;
            if (localParams.search) {
                console.log(games);
                games = games.filter((game) => game.title.toLowerCase().includes(localParams.search)
                || game.short_description.toLowerCase().includes(localParams.search));
            }

            return renderCards(cardContainer, games.slice(0, 50));
        }).finally(() => {
            loadingOverlay.style.display = 'none';
            console.log(loadingOverlay.style.display);
        });
    } catch (error) {
        console.error(error);
    }
}

async function getSearchBarFilteredGames(localParams) {
    localParams.search = document.getElementById('search').value.toLowerCase();
    console.log(localParams);
    getAllGame(undefined, localParams);
}

function init() {
    const radioButtonsFilterPlatform = document.querySelector('.radio-filter');
    const radioButtonsSortByDate = document.querySelector('.radio-date-sort');
    const applyButton = document.getElementById('applyButton');
    const searchBar = document.getElementById('search');
    const genreSelect = document.getElementById('game-properties');
    // event listeners
    let radioFilterState = {};
    const queryParams = {};
    const localParams = {};
    radioButtonsSortByDate.addEventListener('click', (event) => {
        const activeInputSortByDate = event.target;
        if (activeInputSortByDate.tagName === 'INPUT') {
            if (activeInputSortByDate.checked
                && radioFilterState[activeInputSortByDate.id]) {
                activeInputSortByDate.checked = false;
            }
            radioFilterState = {
                [activeInputSortByDate.id]: activeInputSortByDate.checked,
            };
            if (activeInputSortByDate.checked) {
                queryParams['sort-by'] = 'release-date';
                localParams['sort-by-type'] = activeInputSortByDate.id;
            } else {
                queryParams['sort-by'] = '';
                localParams['sort-by-type'] = activeInputSortByDate.id;
            }
            getAllGame(queryParams, localParams);
        }
    });

    radioButtonsFilterPlatform.addEventListener('click', (event) => {
        const activeInputPlatformFilter = event.target;
        if (activeInputPlatformFilter.tagName === 'INPUT') {
            console.log(activeInputPlatformFilter.id);
            if (activeInputPlatformFilter.checked
                && radioFilterState[activeInputPlatformFilter.id]) {
                activeInputPlatformFilter.checked = false;
            }
            radioFilterState = {
                [activeInputPlatformFilter.id]: activeInputPlatformFilter.checked,
            };
            if (activeInputPlatformFilter.checked) {
                queryParams.platform = event.target.value;
            } else {
                delete queryParams.platform;
            }
            getAllGame(queryParams);
        }
    });
    applyButton.addEventListener('click', getSearchBarFilteredGames);
    searchBar.addEventListener('keyup', getSearchBarFilteredGames);
    genreSelect.addEventListener('change', () => {
        if (genreSelect.value === 'default') {
            delete queryParams.category;
        } else {
            queryParams.category = genreSelect.value;
        }
        getAllGame(queryParams);
    });
    console.log(loadingOverlay.style.display);
    console.log(loadingOverlay.style.display);
    // return getSortGamesByDate() || getSearchBarFilteredGames()|| getSelectFilterGames();
    return getAllGame();
}

document.addEventListener('DOMContentLoaded', init);
