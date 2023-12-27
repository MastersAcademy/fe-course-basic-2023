function createGameCardStr(game) {
    const {
        title,
        thumbnail,
        small_description: smallDescription,
        genre,
        platform,
        publisher,
        developer,
        release_date: releaseDate,
    } = game;
    return `            <img class="card__img" data-card-img src="${thumbnail}" alt="game picture">

                        <div class="card__description">
                            <h2 class="description__title" data-description-title>${title}</h2>
                            <p class="description__text" data-description-text>${smallDescription}</p>
                        </div>
                        <ul class="card__actors">
                            <li class="card__actor" data-genre>
                                <span class="semiBold">Genre:</span>    ${genre}
                            </li>
                            <li class="card__actor" data-platform>
                                <span class="semiBold">Platform:</span>    ${platform}
                            </li>
                            <li class="card__actor" data-publisher>
                                <span class="semiBold">Publisher:</span>    ${publisher}
                            </li>
                            <li class="card__actor" data-developer>
                                <span class="semiBold">Developer:</span>    ${developer}
                            </li>
                            <li class="card__actor" data-release-date>
                                <span class="semiBold">Release_date:</span>    ${releaseDate}
                            </li>
                        </ul>
                   `;
}

function createCardElement(game) {
    const cardElement = document.createElement('li');
    cardElement.classList.add('card');
    cardElement.insertAdjacentHTML('afterbegin', createGameCardStr(game));
    return cardElement;
}

function filterGames(gamesArr) {
    const searchTerm = document.querySelector('[data-filter-search]').value;
    return gamesArr.filter((game) => {
        const { title, short_description: description } = game;
        return !(searchTerm !== '' && !title.toLowerCase().includes(searchTerm.toLowerCase())
            && !description.toLowerCase().includes(searchTerm.toLowerCase()));
    });
}

function markedSearchText(search, originString) {
    if (search === '') return originString;
    const regex = new RegExp(search, 'ig');
    return originString.replaceAll(regex, (match) => `<span class="filter-matched-text">${match}</span>`);
}

function createSearchQueryString() {
    const selectedGenre = document.querySelector('[data-filter-select="genre"]').value;
    const selectedPlatform = document.querySelector('[data-filter-select="platform"]').value;
    const isNewGame = document.querySelector('[data-age-games="new"]').checked;
    const isOldGame = document.querySelector('[data-age-games="old"]').checked;
    return `${selectedGenre !== 'genre' ? `category=${selectedGenre}` : ''}&platform=${selectedPlatform}${(isNewGame || isOldGame) ? '&sort-by=release-date' : ''}`;
}

function renderCards(container, arrGames) {
    container.insertAdjacentHTML('afterbegin', '');
    const fragment = new DocumentFragment();
    arrGames.forEach((game) => {
        fragment.append(createCardElement(game));
    });
    container.append(fragment);
}

function loadingSwitch(switching, place) {
    const LOADING_ELEMENT = document.querySelector('[data-loading]');
    if (switching && place) place.textContent = '';
    LOADING_ELEMENT.style.visibility = switching ? 'visible' : 'hidden';
}

function getGames(url, place) {
    loadingSwitch(true, place);
    const optionsGamesUrl = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
        },
    };
    return fetch(url, optionsGamesUrl)
        .then((response) => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.status);
            } else {
                return response.json();
            }
        })
        .then((result) => result.slice(0, 50))
        .then((result) => result.map((game) => {
            const copyGame = { ...game };
            copyGame.small_description = `${game.short_description.slice(0, 52)}...`;
            return copyGame;
        }))
        .catch((error) => {
            place.insertAdjacentHTML('afterbegin', `<span class="error-message">Something went wrong! ERROR: ${error.message}</span>`);
            console.log('get error', error);
        })
        .finally(() => loadingSwitch(false));
}

async function applyFilter(url, place) {
    try {
        const urlGamesQuery = `${url}?${createSearchQueryString()}`;
        const isOldGame = document.querySelector('[data-age-games="old"]').checked;
        const games = await getGames(urlGamesQuery, place);
        if (isOldGame) games.reverse();
        const searchTerm = document.querySelector('[data-filter-search]').value;
        const filterArrGames = filterGames(games);
        const markedTextFilterArrGames = filterArrGames.map((game) => {
            const copyGame = { ...game };
            copyGame.title = markedSearchText(searchTerm, game.title);
            copyGame.small_description = markedSearchText(searchTerm, game.small_description);
            return copyGame;
        });
        renderCards(place, markedTextFilterArrGames);
    } catch (e) {
        console.log('filter error: ', e);
    }
}

function attachHandlers(url, place) {
    const INPUT_GENGE = document.querySelector('[data-filter-select="genre"]');
    const INPUT_PLATFORM = document.querySelector('[data-filter-select="platform"]');
    const RADIO_NEW = document.querySelector('[data-age-games="new"]');
    const RADIO_OLD = document.querySelector('[data-age-games="old"]');
    const BUTTON_APPLY = document.querySelector('[data-filter-button]');
    const FORM = document.querySelector('[data-form-filters]');
    INPUT_GENGE.addEventListener('change', () => applyFilter(url, place));
    INPUT_PLATFORM.addEventListener('change', () => applyFilter(url, place));
    RADIO_NEW.addEventListener('change', () => applyFilter(url, place));
    RADIO_OLD.addEventListener('change', () => applyFilter(url, place));
    BUTTON_APPLY.addEventListener('click', () => applyFilter(url, place));
    FORM.addEventListener('submit', (event) => {
        event.preventDefault();
        applyFilter(url, place);
    });
}

async function init() {
    const urlGames = 'https://mmo-games.p.rapidapi.com/games';
    const CARDS_LIST = document.querySelector('[data-cards]');
    try {
        const games = await getGames(urlGames, CARDS_LIST);
        if (!Array.isArray(games)) throw new Error('is not Array');
        renderCards(CARDS_LIST, games);
    } catch (e) {
        console.log('init error: ', e.message);
    } finally {
        attachHandlers(urlGames, CARDS_LIST);
    }
}

init();
