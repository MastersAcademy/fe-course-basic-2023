const queryParams = {
    genre: '',
    shooter: '&category=shooter',
    arpg: '&category=action-rpg',
    battleRoyale: '&category=battle-royale',
    strategy: '&category=strategy',
    mmorpg: '&category=mmorpg',
    fighting: '&category=fighting',
    allgames: '',
    platform: '&platform=pc',
    online: '&platform=browser',
    newGames: '&sort-by=release-date',
    oldGames: '&sort-by=alphabetical',
};

const checkNew = document.querySelector('[data-type="check-new"]');
const checkOld = document.querySelector('[data-type="check-old"]');
const radioPlatform = document.querySelector('[data-type="platform-radio"]');
const radioOnline = document.querySelector('[data-type="online-radio"]');
const searchField = document.querySelector('[data-type="inp-search"]');
const noFound = document.querySelector('[data-type="text-h2"]');

function createCardElement(game) {
    const template = document.querySelector('template[data-type="card-template"]');
    const cardCopy = document.importNode(template.content, true);

    const imageElement = cardCopy.querySelector('[data-type="image"] img');
    imageElement.src = game.thumbnail;

    cardCopy.querySelector('[data-type="title"]').innerText = game.title;

    const descriptionElement = cardCopy.querySelector('[data-type="description"]');
    const maxDescriptionLength = 54;
    if (game.short_description.length > maxDescriptionLength) {
        descriptionElement.innerText = `${game.short_description.slice(0, maxDescriptionLength)}...`;
        descriptionElement.style.cursor = 'pointer';

        let descriptionVisible = false;
        descriptionElement.addEventListener('click', () => {
            if (descriptionVisible) {
                descriptionElement.innerText = `${game.short_description.slice(0, maxDescriptionLength)}...`;
            } else {
                descriptionElement.innerText = game.short_description;
            }

            descriptionVisible = !descriptionVisible;
        });
    } else {
        descriptionElement.innerText = game.short_description;
    }

    const descriptionList = cardCopy.querySelector('[data-type="short-description"]');
    descriptionList.innerHTML = `<li data-type="genre"><b>Genre:</b> ${game.genre}</li>
                                <li data-type="platform"><b>Platform:</b> ${game.platform}</li>
                                <li><b>Publisher:</b> ${game.publisher}</li>
                                <li><b>Developer:</b> ${game.developer}</li>
                                <li data-type="release_date"><b>Release date:</b> ${game.release_date}</li>`;

    return cardCopy;
}

const apiUrl = 'https://mmo-games.p.rapidapi.com/games?';
const ulContainer = document.querySelector('[data-type="cards-container"]');

async function renderCards(container, genre) {
    const url = new URL(`${apiUrl}${genre}`);

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'X-RapidAPI-Key': '1c3169c707mshb51bff34cbc9ff6p1749b9jsn648a19134256',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, options);
        const gamesList = await response.json();

        container.innerHTML = '';

        const limitedGames = gamesList.length > 50 ? gamesList.slice(0, 50) : gamesList;

        limitedGames.forEach(async (game) => {
            const cardElement = await createCardElement(game);
            container.appendChild(cardElement);
        });
    } catch (error) {
        console.error('Error fetching games:', error);
    }
}

function genreFilter(params) {
    const selectElement = document.getElementById('genre');
    const selectedGenreNow = selectElement.value;
    return params[selectedGenreNow] || params.allgames;
}

function buildDynamicUrl(params) {
    const dynamicUrl = genreFilter(params);
    const platform = document.querySelector('[data-type="platform-radio"]').checked
        ? params.platform
        : '';
    const online = document.querySelector('[data-type="online-radio"]').checked
        ? params.online
        : '';
    const newGames = document.querySelector('[data-type="check-new"]').checked
        ? params.newGames
        : '';
    const oldGames = document.querySelector('[data-type="check-old"]').checked
        ? params.oldGames
        : '';

    return `${params.genre}${dynamicUrl}${platform}${online}${newGames}${oldGames}`;
}

async function reRenderCards() {
    const dynamicUrl = buildDynamicUrl(queryParams);
    await renderCards(ulContainer, dynamicUrl);
}

const selectElement = document.querySelector('[data-type="genre-select"]');
selectElement.addEventListener('change', async () => {
    await reRenderCards();
});

function radioFilter(params) {
    radioPlatform.addEventListener('change', async () => {
        params.dynamicUrl = radioPlatform.checked ? params.platform : params.allgames;
        await reRenderCards();
    });

    radioOnline.addEventListener('change', async () => {
        params.dynamicUrl = radioOnline.checked ? params.online : params.allgames;
        await reRenderCards();
    });
}

function checkboxFilter(params) {
    let dynamicUrl = params.allgames;

    checkNew.addEventListener('change', async () => {
        dynamicUrl = checkNew.checked ? params.newGames : params.allgames;
        await reRenderCards();
    });

    checkOld.addEventListener('change', async () => {
        dynamicUrl = checkOld.checked ? params.oldGames : params.allgames;
        await reRenderCards();
    });

    renderCards(ulContainer, dynamicUrl);
}

function searchFilter() {
    function applySearchFilter() {
        const searchTerm = searchField.value.toLowerCase();
        const cards = document.querySelectorAll('.game__cod2');
        console.log(searchTerm);

        let anyCardFound = false;

        cards.forEach((card) => {
            const title = card.querySelector('[data-type="title"]').textContent.toLowerCase();
            const description = card.querySelector('[data-type="description"]').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
                anyCardFound = true;
            } else {
                card.style.display = 'none';
            }
        });
        noFound.innerText = anyCardFound ? '' : 'No results found!';
    }

    searchField.addEventListener('input', applySearchFilter);
}

async function init(params) {
    await reRenderCards(params);
    genreFilter(params);
    radioFilter(params);
    checkboxFilter(params);
    searchFilter();
}

init(queryParams);
