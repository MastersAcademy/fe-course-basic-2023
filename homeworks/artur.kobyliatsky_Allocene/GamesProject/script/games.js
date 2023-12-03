// card create from API data
async function createCardElement(game) {
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

// fetch API
const apiUrl = 'https://mmo-games.p.rapidapi.com/games?';
const ulContainer = document.querySelector('[data-type="cards-container"]');

async function renderCards(container, genre) {
    const dynamicUrl = genre;
    const url = new URL(`${apiUrl}${dynamicUrl}`);

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
        if (response.ok) {
            const gamesList = await response.json();

            container.innerHTML = '';

            const gamesJSON = Array.isArray(gamesList) ? gamesList : JSON.stringify(gamesList);
            const limitedGames = gamesJSON.slice(0, 50);

            limitedGames.forEach(async (game) => {
                const cardElement = await createCardElement(game);
                container.appendChild(cardElement);
            });
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching games:', error);
    }
}

// filters
const queryParams = {
    // for genre filter
    genre: '',
    shooter: '&category=shooter',
    arpg: '&category=action-rpg',
    battleRoyale: '&category=battle-royale',
    strategy: '&category=strategy',
    mmorpg: '&category=mmorpg',
    fighting: '&category=fighting',
    allgames: '',
    // for radio filter
    platform: '&platform=pc',
    online: '&platform=browser',
    // for checkbox filter
    newGames: '&sort-by=release-date',
    oldGames: '&sort-by=alphabetical',
};

// Genre filtering
function genreFilter(params) {
    const selectElement = document.getElementById('genre');
    const selectedGenreNow = selectElement.value;
    return params[selectedGenreNow] || params.allgames;
}

// Function to apply all filters and render cards
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

async function applyFiltersAndRenderCards() {
    const dynamicUrl = buildDynamicUrl(queryParams);
    await renderCards(ulContainer, dynamicUrl);
}

const selectElement = document.getElementById('genre');
selectElement.addEventListener('change', async () => {
    await applyFiltersAndRenderCards();
});

renderCards(ulContainer, queryParams.genre);

genreFilter(queryParams);

// Radio filtering
function radioFilter(params) {
    const radioPlatform = document.querySelector('[data-type="platform-radio"]');
    const radioOnline = document.querySelector('[data-type="online-radio"]');
    let dynamicUrl = '';

    radioPlatform.addEventListener('change', async () => {
        dynamicUrl = radioPlatform.checked ? params.platform : params.allgames;
        await applyFiltersAndRenderCards();
    });

    radioOnline.addEventListener('change', async () => {
        dynamicUrl = radioOnline.checked ? params.online : params.allgames;
        await applyFiltersAndRenderCards();
    });

    renderCards(ulContainer, dynamicUrl);
}

radioFilter(queryParams);

// Checkbox filtering
function checkboxFilter(params) {
    const checkNew = document.querySelector('[data-type="check-new"]');
    const checkOld = document.querySelector('[data-type="check-old"]');
    let dynamicUrl = params.allgames;

    checkNew.addEventListener('change', async () => {
        dynamicUrl = checkNew.checked ? params.newGames : params.allgames;
        await applyFiltersAndRenderCards();
    });

    checkOld.addEventListener('change', async () => {
        dynamicUrl = checkOld.checked ? params.oldGames : params.allgames;
        await applyFiltersAndRenderCards();
    });

    renderCards(ulContainer, dynamicUrl);
}

radioFilter(queryParams);
checkboxFilter(queryParams);

// Searc field filltering
function searchFilter() {
    const searchField = document.querySelector('[data-type="search"]');
    const noFound = document.querySelector('[data-type="text-h2"]');
    searchField.addEventListener('input', async () => {
        const searchTerm = searchField.value.toLowerCase();
        const cards = document.querySelectorAll('.game__cod2');

        cards.forEach(async (card) => {
            const title = card.querySelector('[data-type="title"]').textContent.toLowerCase();
            const description = card.querySelector('[data-type="description"]').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
                noFound.innerText = '';
            } else {
                card.style.display = 'none';
                noFound.innerText = 'No results found!';
            }
        });
    });
}

searchFilter();
